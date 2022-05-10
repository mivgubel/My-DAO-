import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop("0x56898e26b80c26DdbaEA6fd25AF4E7D4FA74F8e9");

(async () => {
	try {
		// We define our claim conditions, this is an array of objects because
		// we can have multiple phases starting at different times if we want to
		const claimConditions = [
			{
				// When people are gonna be able to start claiming the NFTs (now)
				startTime: new Date(),
				// The maximum number of NFTs that can be claimed: 50_000.
				maxQuantity: 100,
				// The price of our NFT (cobrar formato: 0.01)
				price: 0,
				// The amount of NFTs people can claim in one transaction.
				quantityLimitPerTransaction: 1,
				// We set the wait between transactions to MaxUint256, which means
				// people are only allowed to claim once.
				waitInSeconds: MaxUint256,
			},
		];

		await editionDrop.claimConditions.set("0", claimConditions);
		console.log("✅ Successfully set claim condition!");
	} catch (error) {
		console.error("Failed to set claim condition!", error);
	}
})();
