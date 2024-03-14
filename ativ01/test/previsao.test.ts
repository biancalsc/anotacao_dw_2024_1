import { Request, Response } from "express";
import PrevisaoController from "../src/controllers/PrevisaoController";

describe("Teste do PrevisaoController", () => {
    it ("Cidade válida", async () => {
        const req = {params: {cidade: "ubatuba"}} as unknown as Request;
        const res = {} as unknown as Response;
        const next = () => {};

        await PrevisaoController.listaCidades(req, res, next);
        expect(res.locals).toMatchObject({nome: "Ubatuba"})
    });

    it ("previsão 7 dias", async () => {
        const req = {} as unknown as Request;
        const res = {
            locals: {id: "5515"},
            send: jest.fn()
        } as unknown as Response;
        await PrevisaoController.previsao7dias(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({nome: "Ubatuba"}));
    });

    it ("previsão", async () => {
        const req = {} as unknown as Request;
        const res = {
            locals: {id: "5515"},
            send: jest.fn()
        } as unknown as Response;
        await PrevisaoController.previsao(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({nome: "Ubatuba"}));
    });

    it ("previsão estendida", async () => {
        const req = {} as unknown as Request;
        const res = {
            locals: {id: "5515"},
            send: jest.fn()
        } as unknown as Response;
        await PrevisaoController.previsaoEstendida(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({nome: "Ubatuba"}));
    });
});