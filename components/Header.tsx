import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex flex-row justify-between items-center py-5 px-10 border-b'>
      <div className='flex flex-row items-center'>
        <Image
          src='/logo.svg'
          width={50}
          height={50}
          alt='Logo'
        />
        <h1 className='ml-5 text-2xl'>NFT Marketplace</h1>
      </div>
      <div className='text-xl'>
        <Link href='/' className='px-3'>Home</Link>
        <Link href='/mint-nft' className='px-3'>Mint NFT</Link>
        <Link href='/my-nft' className='px-3'>My NFT</Link>
      </div>
    </header>
  )
}