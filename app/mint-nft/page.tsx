"use client";
import { useState } from "react";
import { uploadFileToIPFS } from "../../scripts/pinata";

export default function MintNFT() {
  const [nftData, setNftData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [file, setFile] = useState(null);


  async function handleSubmit(e) {
    e.preventDefault();

    if(nftData.name !== "" && nftData.description !== "" && file !== null && nftData.price !== "") {
      disableSubmitBtn();
      // Upload image to IPFS
      const fileUploadResponse = await uploadFileToIPFS(file, nftData.name);

      // If Image Upload is successful then send data to the backend API
      // const formData = new FormData();
      // formData.append("name", nftData.name);
      // formData.append("description", nftData.description);
      // formData.append("price", nftData.price);

      // const res = await fetch('/api/mint-nft', {
      //   body: formData,
      //   method: 'POST'
      // })

      // if(res) {
      //   enableSubmitBtn();
      // }
    } else {
      // display error msg
    }
  }

  function disableSubmitBtn() {
    const btn = document.getElementById('submit');
    btn.disabled = true;
    btn.style.cursor = 'not-allowed';
    btn.style.opacity = 0.3;
  }

  function enableSubmitBtn() {
    const btn = document.getElementById('submit');
    btn.disabled = false;
    btn.style.cursor = 'default';
    btn.style.opacity = 1;
  }

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-sky-500 mb-5">Create NFT</h1>
      <form
        className="border rounded-md flex flex-col justify-around items-center min-h-max p-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-around items-start mb-5 min-w-full">
          <label htmlFor="name" className="text-xl font-bold">
            NFT Name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="min-w-full mt-3 rounded min-h-[35px] text-black p-2"
            value={nftData.name}
            onChange={(e) => setNftData({ ...nftData, name: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col justify-around items-start my-5 min-w-full">
          <label htmlFor="description" className="text-xl font-bold">
            NFT Description
          </label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            className="min-w-full mt-3 rounded min-h-[35px] text-black p-2"
            value={nftData.description}
            onChange={e => setNftData({ ...nftData, description: e.target.value })}
          ></textarea>
        </div>
        <div className="flex flex-col justify-around items-start my-5 min-w-full">
          <label htmlFor="image" className="text-xl font-bold">
            Upload Image <span className="text-red-700">*</span>
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="min-w-full mt-3 rounded min-h-[35px] text-black p-2"
            accept="image/*"
            onChange={e => setFile(e.target.files[0])}
            required
          />
        </div>
        <div className="flex flex-col justify-around items-start my-5 min-w-full">
          <label htmlFor="price" className="text-xl font-bold">
            Price (in ether) <span className="text-red-700">*</span>
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="min-w-full mt-3 rounded min-h-[35px] text-black p-2"
            value={nftData.price}
            onChange={e => setNftData({ ...nftData, price: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col justify-around items-start mt-5 min-w-full">
          <button
            id="submit"
            className="rounded font-bold text-xl min-w-full min-h-[35px] bg-sky-500"
            type="submit"
          >
            Create NFT
          </button>
        </div>
      </form>
    </div>
  );
}
