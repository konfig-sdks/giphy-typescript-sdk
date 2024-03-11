import { Giphy } from "./index";

describe("giphy-typescript-sdk", () => {
    it("initialize client", async () => {
        const giphy = new Giphy({
            apiKey: "API_KEY",
        });
    });
});
