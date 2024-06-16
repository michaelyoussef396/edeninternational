import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="flex h-29">
      <div className="flex-1 bg-diagonal-split">
        <a href="./">
            <Image src="/title.webp" className='block p-8' alt="eden international" width={300} height={250} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
