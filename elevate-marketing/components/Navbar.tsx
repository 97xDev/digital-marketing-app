import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-teal-500 p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-white text-xl font-bold'>Dark Elevate</Link>
        <div className='space-x-4'>
          <Link href='/' className='text-white hover:underline'>Home</Link>
          <Link href='/blog' className='text-white hover:underline'>Blog</Link>
        </div>
      </div>
    </nav>
  );
}