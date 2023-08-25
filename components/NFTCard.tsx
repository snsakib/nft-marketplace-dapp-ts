'use client'
import Link from 'next/link'
import Image from 'next/image'
import { GetIpfsUrlFromPinata } from '@/scripts/pinata';

export default function NFTCard(data) {

  console.log(data.data);
  const imgURL = GetIpfsUrlFromPinata(data.data.img);

  return (
    <Link href={{ pathname: `/nft/${data.data.id}` }}>
      <div className='border'>
        <Image
          src={imgURL}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div>
          <h1>{data.data.name}</h1>
          <p>{data.data.description}</p>
          <p>{data.data.price} ether</p>
        </div>
      </div>
    </Link>
  )

}