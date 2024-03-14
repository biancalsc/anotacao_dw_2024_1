import Cptec from "../src/services/Cptec";

describe("Teste do Cptec", () => {
    it("Cidade válida", async () => {
        const cptec = new Cptec();
        const cidade = "ubatuba";
        const listaCidades = await cptec.listaCidades(cidade);

        expect(listaCidades).toEqual(expect.stringContaining("<nome>Ubatuba</nome>"));
    });

    it("previsão", async () => {
        const cptec = new Cptec();
        const previsao = "5515";
        const previsaoCidade = await cptec.previsao(previsao);

        expect(previsaoCidade).toEqual(expect.stringContaining("<nome>Ubatuba</nome>"));
    });

    it("previsão 7 dias", async() => {
        const cptec = new Cptec();
        const previsao7dias = "5515";
        const previsaoCidade7dias = await cptec.previsao7dias(previsao7dias);

        expect(previsaoCidade7dias).toEqual(expect.stringContaining("<nome>Ubatuba</nome>"));
    });

    it("previsão estendida", async() => {
        const cptec = new Cptec();
        const previsaoEstendida = "5515";
        const previsaoCidadeEstendida = await cptec.previsaoEstendida(previsaoEstendida);

        expect(previsaoCidadeEstendida).toEqual(expect.stringContaining("<nome>Ubatuba</nome>"));
    });
});