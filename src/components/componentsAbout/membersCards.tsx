import React from 'react'
import Image from 'next/image'
export default function MembersCard({name, image, github,linkedin }){
return(
<><div className="flex items-center pl-7 pr-7 member-card">
  <img src= {image} className="
  w-24
  h-24 
  mr-4
  rounded-full 
  object-scale-down
  member-pic
  "/>
  <h3 className="text-lg font-poppins text-gray-600 ">
    {name}<br/>
    <a href={github} target="_blank"> <Image src="/assets/github.svg" width={17} height={17}/> </a>
    <a className="ml-2" href={linkedin} target="_blank"> <Image src="/assets/linkedin.svg" width={17} height={17}/> </a>  
  </h3>
</div></>
)}
