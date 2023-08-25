'use client';
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Marketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';
import { NFTMarketplaceAddress } from '../scripts/config';
import axios from "axios";
import { GetIpfsUrlFromPinata } from "@/scripts/pinata";
import NFTCard from "@/components/NFTCard";

export default function Home() {
  const [data, updateData] = useState([]);
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
      let items = await Promise.all(transaction.map(async (item) => {
        // console.log('item');
        // console.log(item);
        let tokenURI = await contract.tokenURI(item.id);
        tokenURI = GetIpfsUrlFromPinata(tokenURI);
        let meta = await axios.get(tokenURI);
        meta = meta.data;
        // console.log('meta');
        console.log(meta)
        let NFT = {
          id: item.id,
          name: meta.name,
          description: meta.description,
          owner: item.owner,
          price: meta.price,
          img: meta.img,
        };
        return NFT;
      }));

      updateData(items);
    }
  }

  useEffect(() => {
    getAllNFTs();
  }, []);

  return (
    <div className="flex justify-between p-10 border">
      {
        data.map((value, index) => {
          return <NFTCard data={value} key={index}></NFTCard>;
        })
      }
    </div>
  )
}
