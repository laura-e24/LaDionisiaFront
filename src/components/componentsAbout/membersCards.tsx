import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function MembersCard({name, image, github,linkedin }){

  return(
      <div>
        <h3>{name}</h3>
        <img src= {image} alt="img not found" width="150px" height="150px"/>
        <a href={github} target="_blank"> <FontAwesomeIcon icon={faGithub} size="xl"/> </a>
        <a href={linkedin} target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="xl"/> </a>  
      </div>
    
  )
}
