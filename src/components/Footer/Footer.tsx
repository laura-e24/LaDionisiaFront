import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    return (
<>

<footer className="bg-footer h-min w-full p-14 flex footer 
max-w-screen-xl
m-auto
">

  <div className="          
    max-w-screen-xl
    grid place-items-center
    ">
    <div className="w-28 h-28 relative opacity-70">
      <Image layout="fill" src="/assets/logonav.svg"/>
    </div>
  </div>
  <div className="absolute fixed left-1/2 -translate-x-1/2 p-2">
    <div className="grid grid-cols-2 gap-14">
      <div>
        <p className="text-gray-600 pb-1">

        <Link href='/about'>
          <a className="footlink">  
            <span className="spanLeft">[</span>
            ABOUT
            <span className="spanRight">]</span>
          </a>
        </Link>
        </p>
        <p className="text-gray-600 pb-1">
          <a className="footlink" href="/shipping">
            <span className="spanLeft">[</span>
            SHIPPING &amp; RETURNS
            <span className="spanRight">]</span>
          </a>
        </p>
        <p className="text-gray-600 pb-1">
          <a className="footlink" href="/newsletter">
            <span className="spanLeft">[</span>
            NEWSLETTER
            <span className="spanRight">]</span>
          </a>
        </p>
        <p className="text-gray-600 pb-1">
          <a className="footlink" href="/privacy">
             <span className="spanLeft">[</span>
             PRIVACY
             <span className="spanRight">]</span>
          </a>
        </p>
      </div>
      <div>
        <h1 id="contact" className="text-xl text-gray-600 pb-2">Contact</h1>
        <p className="text-gray-600  pb-2">
          <a className="footlink" href="mailto:ladionisia@mail.com">
            <span className="spanLeft">[</span>
            ladionisia@mail.com
            <span className="spanRight">]</span>
          </a>
        </p>
        <p className="text-gray-600">
          <a className="footlink" href="telto:+541111111111">
            <span className="spanLeft">[</span>
            +54 111 111 1111
            <span className="spanRight">]</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</footer>
</>
)}
