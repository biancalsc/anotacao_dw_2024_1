import Cptec from "../src/services/Cptec";
import api from "../src/services/api";

jest.mock("../src/services/api", () => {
    return {
        get: jest.fn().mockResolvedValue({ data: "response data" })
    };
});

describe("Testes unitarios classe Cptec", () =>{
    it("lista Cidades", async () => {
        const cptec = new Cptec();
        const cidade = "ubatuba";
        await cptec.listaCidades(cidade);

        expect(api.get).toHaveBeenCalledWith(`/listaCidades?city=${cidade.toLocaleLowerCase()}`);
    });

    it("previsao", async () => {
        const cptec = new Cptec();
        const id = "5515"
        await cptec.previsao(id);

        expect(api.get).toHaveBeenCalledWith(`/cidade/${id}/previsao.xml`);
    });
})