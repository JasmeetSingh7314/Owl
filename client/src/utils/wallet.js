import {TempleWallet} from '@temple-wallet/dapp'

export const wallet = new TempleWallet('TheOwlApp');

export const connectWallet=async ()=>{
    try {
        const available = await TempleWallet.isAvailable();
        if (!available) {
          throw new Error('Temple Wallet not installed');
        }
      } catch (err) {
        console.log(err);
      }
      await wallet.connect('ghostnet' );

}

export const getAccount=async ()=>{
    const currentUserAddress = wallet.pkh || (await wallet.getPKH());
    if(currentUserAddress){
        return currentUserAddress;
    }else{
        return ""
    }

}