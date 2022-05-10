import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x56898e26b80c26DdbaEA6fd25AF4E7D4FA74F8e9");

(async () => {
	try {
		await editionDrop.createBatch([
			{
				name: "Rektnegados DAO NFT",
				description: "This NFT will give you access to RektnegadosDAO",
				image: readFileSync("scripts/assets/Rektnegados.jpg"),
			},
		]);
		console.log("✅ Successfuly created a new NFT in the drop!");
	} catch (error) {
		console.error("Failed to create the new NFT", error);
	}
})();
