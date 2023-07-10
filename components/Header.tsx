'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Web3Button } from '@web3modal/react'

export default function Header() {

  return (
    <header className='flex flex-col md:flex-row justify-between py-5 px-10 border-b'>
      <div className='flex flex-row items-center mb-5 md:lg-0'>
        <Image
          src='/logo.svg'
          width={40}
          height={40}
          alt='Logo'
        />
        <h1 className='ml-5 text-xl'>NFT Marketplace</h1>
      </div>
      <div className='flex justify-between text-md font-bold text-sky-500'>
        <Link href='/'>Home</Link>
        <Link href='/mint-nft'>Mint NFT</Link>
        <Link href='/my-nft'>My NFT</Link>
      </div>
      <div className='pt-5 text-center'>
        <Web3Button />
      </div>
    </header>
  )
}