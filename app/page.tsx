'use client';
import { useEffect } from "react";
import { ethers } from "ethers";
import Marketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';
import { NFTMarketplaceAddress } from '../scripts/config';

export default function Home() {
  let provider;
  let signer = null;

  async function getAllNFTs() {
    if(window.ethereum === null) {
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      let contract = new ethers.Contract(NFTMarketplaceAddress, Marketplace.abi, signer);
      let transaction = await contract.getAllNFTs();
      console.log(transaction)
    }
  }

  useEffect(() => {
    getAllNFTs();
  }, []);

  return (
    <>
      All NFTs
    </>
  )
}
