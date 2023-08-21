import { TezosToolkit } from "@taquito/taquito";
 
import { wallet } from "./wallet";

const tezos=new TezosToolkit('https://ghostnet.smartpy.io/')

tezos.setWalletProvider(wallet)
export default tezos;