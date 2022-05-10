import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0x15caE85Dd1cb44f27E2F1051BDde0ae29b886b2d");

(async () => {
	try {
		// What's the max supply you want to set? 1,000,000 is a nice number!
		const amount = 1000000;
		// Interact with your deployed ERC-20 contract and mint the tokens!
		await token.mint(amount);
		const totalSupply = await token.totalSupply();

		// Print out how many of our token's are out there now!
		console.log("✅ There now is", totalSupply.displayValue, "$RNV in circulation");
	} catch (error) {
		console.error("Failed to print money", error);
	}
})();
