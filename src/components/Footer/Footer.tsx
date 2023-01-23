import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
    const [hasMounted, setHasMounted] = useState(false);
    const goNav = (e) => {
      e.preventDefault()
      const   id      = 'navbar',
              element = document.getElementById(id);
      let y = element.getBoundingClientRect().top + window.pageYOffset;
          y+= (window.innerWidth < 1200) ? 0 : -98
      window.scrollTo({ top: y, behavior: 'smooth' })
     // document
     // .querySelector('#navbar')
     // .scrollIntoView({block: "start", behavior: "smooth"})
    }
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    return (
<>
<footer className="bg-footer">
  <div className="container flex max-w-screen-xl p-14">          
    <div className="          
      max-w-screen-xl
      grid place-items-center
    ">
     <div onClick={goNav} className="footer-logo w-28 h-28 relative opacity-70">
        <Image layout="fill" src="/assets/logonav.svg"/>
      </div>
    </div>
    <div id="footer-links" className="absolute fixed left-1/2 -translate-x-1/2 p-2">
      <div className="grid grid-cols-2 gap-14">
        <div id="footer-links-left">
          <p className="text-gray-600 pb-1">
            <Link href='/about'>
              <a className="footlink">  
                <span className="spanLeft">[</span>
                about
                <span className="spanRight">]</span>
              </a>
            </Link>
          </p>
          <p className="text-gray-600 pb-1">
            <a className="footlink" href="/shipping">
              <span className="spanLeft">[</span>
              shipping &amp; returns
              <span className="spanRight">]</span>
            </a>
          </p>
          <p className="text-gray-600 pb-1">
            <a className="footlink" href="/newsletter">
              <span className="spanLeft">[</span>
              newsletter
              <span className="spanRight">]</span>
            </a>
          </p>
          <p className="text-gray-600 pb-1">
            <a className="footlink" href="/privacy">
               <span className="spanLeft">[</span>
               privacy
               <span className="spanRight">]</span>
            </a>
          </p>
        </div>
        <div id="contact-div">
          <p className="footlink text-xl text-gray-600 pb-2">Contact</p>
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
  </div>
</footer>
</>
)}
