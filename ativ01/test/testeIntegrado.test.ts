import request from "supertest";
import app from "../src";

describe("Teste integrado", () => {
    it("previsão", async () => {
        const response = await request(app).get("/previsao/ubatuba");

        expect (response.body.nome).toBe("Ubatuba")
    });

    it("previsão 7 dias", async () => {
        const response = await request(app).get("/previsao7/ubatuba");

        expect (response.body.nome).toBe("Ubatuba")
    });

    it("previsão estendida", async () => {
        const response = await request(app).get("/estendida/ubatuba");

        expect (response.body.nome).toBe("Ubatuba")
    });
});