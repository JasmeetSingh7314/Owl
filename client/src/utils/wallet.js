
import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
    name: "Tezos Lottery Dapp",
    preferredNetwork: "ghostnet",
})

export const connectWallet = async () => {
    await wallet.requestPermissions({ network: {type: "ghostnet"}});
};

export const getAccount = async () => {
    const connectedWallet = await wallet.client.getActiveAccount();
    if (connectedWallet) {
        return connectedWallet.address;
    }
    else{
        return "";
    }
};