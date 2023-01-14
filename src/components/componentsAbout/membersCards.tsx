import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function MembersCard({name, image, github,linkedin }){

  return(
      <div>
        <img src= {image} className="w-28 
        h-28 
        mb-2 
        rounded-full 
        object-scale-down"
        />
        <h3 className="items-center justify-center w-32 h-32 text-lg font-montserrat text-gray-600">{name}</h3>
        <a href={github} target="_blank"> <FontAwesomeIcon icon={faGithub} size="xl"/> </a>
        <a href={linkedin} target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="xl"/> </a>  
      </div>
  )
}
