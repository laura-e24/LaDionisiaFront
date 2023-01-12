import members from '../../components/componentsAbout/membersInfo'
import MembersCard from '../../components/componentsAbout/membersCards'
import NavBar from '../../components/Navbar/NavBar'

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h1>ABOUT US</h1>
        <p>
          <span>
            What do we believe? The wine is for all. You don't have to be a connoisseur to be able to enjoy it. We want everyone to approach    this great drink without fear, without prejudice.
           There are no rules for enjoying wine. Everything changed. How to enjoy wine, too. Each bottle accompanies an experience, a unique pairing. Watching a movie in bed or hanging out on the terrace with friends. The possibilities are endless, it's just a matter of trying. There are no rules or formulas, just a desire to enjoy and share. We are, after all, accomplices of your moments lived.
          </span>
        </p>
      </div>
      
      <div>
        <h2>OUR TEAM</h2>
        {members?.map((e)=>{
          return(
            <MembersCard
              name={e.name}
              image={e.image}
              github={e.github}
              linkedin={e.linkedin}
            />
          )
        })}
      </div>
    </div>
  )
}


export default About
