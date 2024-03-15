import { Request, Response, NextFunction } from "express";
import PrevisaoController from "../src/controllers/PrevisaoController";

jest.mock("../src/services/Cptec", () => {
    return jest.fn()
        .mockImplementationOnce(() => {
            return {
                listaCidades: jest.fn().mockImplementation(() => {
                        return "<note><cidade>aa</cidade><from>aaaa</from><heading>aaaaa</heading><body>AAAAAAAAAAAAA</body></note>";
                    })
            };
        })
        .mockImplementationOnce(() => {
            return {
                listaCidades: jest.fn().mockImplementation(() => {
                        return undefined;
                    })
            }
        })
        .mockImplementationOnce(() => {
            return {
                previsao: jest.fn().mockImplementation(() => {
                        return "<note><cidade>teste</cidade><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>";
                    })
            };
        })
        .mockImplementationOnce(() => {
            return {
                previsao: jest.fn().mockImplementation(() => {
                        return undefined;
                    })
            }
        });
});

describe("Testes unitarios previsao", () => {
    const previsao = PrevisaoController;

    test("listaCidades válido", async () => {
        const req: Request = { params: { cidade: "caraguatatuba" } } as unknown as Request;
        const res = { locals: {} } as unknown as Response;

        const next = jest.fn();

        await previsao.listaCidades(req, res, next);

        expect(res.locals).not.toBeNull();
        expect(next).toHaveBeenCalled();
    });

    test("listaCidades invalido", async () => {
        const req = { params: { cidade: "taubate" }} as unknown as Request;
        const res = { json: jest.fn() } as unknown as Response;

        const next = jest.fn();

        await previsao.listaCidades(req, res, next);
        
        expect(res.json).toHaveBeenCalled();
    });

    test("previsao valido", async () => {
        const req = {} as unknown as Request;
        const res = {
            locals: { id: "10" },
            json: jest.fn()
        } as unknown as Response;

        await previsao.previsao(req, res);

        expect(res.json).not.toHaveBeenCalledWith({ message: expect.any(TypeError) });
    })

    test("previsao invalido", async () => {
        const req = {} as unknown as Request;
        const res = {
            locals: { id: "10" },
            json: jest.fn()
        } as unknown as Response;

        await previsao.previsao(req, res);

        expect(res.json).toHaveBeenCalledWith({message: expect.any(TypeError)});
    })
});