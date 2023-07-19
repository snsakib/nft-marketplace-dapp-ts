"use client";
import { useState } from "react";

export default function MintNFT() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgPath: "",
    price: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if(formData.name !== "" && formData.description !== "" && formData.imgPath !== "" && formData.price !== 0) {
      disableSubmitBtn();
      // Upload data to the backend API
      // If the response is successful then 
      enableSubmitBtn();
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
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
            value={formData.imgPath}
            onChange={e => setFormData({ ...formData, imgPath: e.target.value })}
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
            value={formData.price}
            onChange={e => setFormData({ ...formData, price: +e.target.value })}
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
