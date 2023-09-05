'use client'
import Link from 'next/link'
import Image from 'next/image'
import { GetIpfsUrlFromPinata } from '@/scripts/pinata';

export default function NFTCard(data) {

  console.log(data.data);
  const imgURL = GetIpfsUrlFromPinata(data.data.img);

  return (
    <div className='border-2 border-sky-900 rounded max-w-[280px] min-[400px]:max-w-[300px]'>
      <Link href={{ pathname: `/nft/${data.data.id}` }}>
        <div>
          <Image
            src={imgURL}
            width={500}
            height={400}
            alt="Picture of the author"
          />
          <div className='p-3 text-black'>
            <h1 className='font-bold text-xl'>{data.data.name}</h1>
            {/* <p className='text-base'>{data.data.description}</p> */}
            <p className='text-base'>{data.data.price} ETH</p>
          </div>
        </div>
      </Link>
      <div className='py-3 mx-3'>
        <button className='bg-sky-900 rounded p-2 w-full font-bold'>Buy NFT</button>
      </div>
    </div>
  )

}