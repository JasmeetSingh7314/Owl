import { TempleWallet } from '@temple-wallet/dapp'

export const wallet = new TempleWallet('TheOwlApp');

export const connectWallet=async ()=>{

      console.log('initializing connection')
      await wallet.connect('ghostnet' );

}

export const getAccount=async ()=>{
    const currentUserAddress = wallet.pkh || (await wallet.getPKH());
    if(currentUserAddress){
        console.log(currentUserAddress)
        return currentUserAddress;
    }else{
        return ""
    }

}
// TODO 2.a - Setup a Beacon Wallet instance
// import { BeaconWallet } from "@taquito/beacon-wallet";
// import { NetworkType } from "@airgap/beacon-dapp";

// export const wallet = new BeaconWallet({
//     name: "OwlApp",
//     preferredNetwork: NetworkType.GHOSTNET,
// })

// // TODO 2.b - Complete connectWallet function (for ghostnet)
// export const connectWallet = async () => {
//     console.log('jaskjsd')
//     await wallet.requestPermissions({ network: {type: NetworkType.GHOSTNET}});
// };

// // TODO 2.c - Complete getAccount function
// export const getAccount = async () => {
//     const connectedWallet = await wallet.client.getActiveAccount();
//     if (connectedWallet) {
//         return connectedWallet.address;
//     }
//     else{
//         return "";
//     }
// };
// import { TezosToolkit } from "@taquito/taquito";
// import { BeaconWallet } from "@taquito/beacon-wallet";
// import { Address } from "./config";


// const preferredNetwork = "ghostnet";
// const options = {
//   name: "NFT",
//   iconUrl: "https://tezostaquito.io/img/favicon.png",
//   preferredNetwork: preferredNetwork,
// };
// const rpcURL = "https://ghostnet.smartpy.io/";
// const wallet = new BeaconWallet(options);

// const getActiveAccount = async () => {
//   return await wallet.client.getActiveAccount();
// };

// const connectWallet = async () => {
//   console.log("again hit")
//   console.log(wallet)
//   let account = await wallet.client.getActiveAccount();
//   console.log(account)
//   if (!account) {
//     await wallet.requestPermissions({
//       network: { type: preferredNetwork },
//     });
//     account = await wallet.client.getActiveAccount();
//   }
//   return { success: true, wallet: account.address };
// };

// const disconnectWallet = async () => {
//   await wallet.disconnect();
//   return { success: true, wallet: null };
// };

// const checkIfWalletConnected = async (wallet) => {
//   try {
//     const activeAccount = await wallet.client.getActiveAccount();
//     if (!activeAccount) {
//       await wallet.client.requestPermissions({
//         type: { network: preferredNetwork },
//       });
//     }
//     return {
//       success: true,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error,
//     };
//   }
// };

// export const changeName = async (name) => {
//   // const wallet = new BeaconWallet(options);
//   const response = await checkIfWalletConnected(wallet);

//   if (response.success) {
//     const tezos = new TezosToolkit(rpcURL);
//     tezos.setWalletProvider(wallet);
//     const contract = await tezos.wallet.at(Address);
//     const operation = await contract.methods.default(name).send();
//     const result = await operation.confirmation();
//     console.log(result);
//   }
// };

// export {
//   connectWallet,
//   disconnectWallet,
//   getActiveAccount,
//   checkIfWalletConnected,
// };