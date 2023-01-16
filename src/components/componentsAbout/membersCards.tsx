import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
export default function MembersCard({name, image, github,linkedin }){
return(
<><div className="flex items-center pl-7 pr-7">
  <img src= {image} className="
  w-24
  h-24 
  mr-4
  rounded-full 
  object-scale-down
  "/>
  <h3 className="text-lg font-montserrat text-gray-600 ">
    {name}<br/>
    <a href={github} target="_blank"> <FontAwesomeIcon icon={faGithub} size="sm"/> </a>
    <a className="ml-2" href={linkedin} target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="sm"/> </a>  
  </h3>
</div></>
)}
