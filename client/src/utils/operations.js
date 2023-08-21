import { useState } from "react";

import  tezos  from "./tezos";
import { Address } from "./config";

const contractAddress=Address;

export const hex2buf = (hex) => {
	return new Uint8Array(
		hex.match(/[da-f]{2}/gi).map((h) => parseInt(h, 16))
	);
};
 
export function bytes2Char(hex) {
	return Buffer.from(hex2buf(hex)).toString("utf8");
}

  
export const mintNFT = async (amount,metadata) => {
      try {
        console.log(amount,metadata) 
        const contract = await tezos.wallet.at('KT19YBGhmge3upmDXFJVKmJrWGoazhtHZSjR');
		console.log('Hello')
        // let bytes = "";
        // for (var i = 0; i < metadata.length; i++) {
        //   bytes += metadata.charCodeAt(i).toString(16).slice(-4);
        // }
        // console.log(contract)
        // const op = await contract.methods.mint(amount, bytes).send();
        // console.log(op)
        // console.log(op.confirmation)
        // await op.confirmation();
        
        
      } catch (e) {
        console.log(e);
      }
};

export const collectNFT = async ( amount, id ) => {
	try {
			const contract = await tezos.wallet.at(contractAddress);
 
			const op = await contract.methods
				.collect(id)
				.send({ mutez: true, amount: amount });
			await op.confirmation();
      let tokenData=await fetchData();
      return tokenData;
		} catch (e) {
			console.log(e);
		}
	;
};

export const fetchData = async () => {
	
		try {
			const response = await fetch(
				`https://api.ghostnet.tzkt.io/v1/contracts/${contractAddress}/bigmaps/data/keys`
			);
			const response1 = await fetch(
				`https://api.ghostnet.tzkt.io/v1/contracts/${'KT1Ufhsq577dbPaqH6czBetXN2M3AH9oNBQo'}/bigmaps/token_metadata/keys`
			);
			const d1 = response.data;
			const d2 = response1.data;
			let tokenData = [];
			for (let i = 0; i < d1.length; i++) {
				const s = bytes2Char(d2[i].value.token_info[""])
					.split("//")
					.at(-1);
        
 
				const res = await fetch("https://ipfs.io/ipfs/" + s);
 
				const l1 = d1[i].value;
				const l2 = res.data;
				tokenData[i] = {
					...l1,
					...l2,
					token_id: d2[i].value.token_id,
				};
			}
      console.log(tokenData);
      return tokenData;
			
			// dispatch({ type: "SET_TOKEN_DATA", payload: tokenData });
 
		} catch (e) {
			console.log(e);
		}
	};


export const updateAdmin=async ()=>{
    try {
        const contractInstance = await tezos.wallet.at(contractAddress);
        const op = await contractInstance.methods.updateAdmin().send();
        await op.confirmation(1);
      } catch (err) {
        throw err;
      }

}
  
  // TODO 10 - Call end_game entrypoint in the Lottery contract
  export const endGameOperation = async () => {
    try {
      const contractInstance = await tezos.wallet.at(contractAddress);
      const op = await contractInstance.methods.end_game().send();
      await op.confirmation(1);
    } catch (err) {
      throw err;
    }
  };