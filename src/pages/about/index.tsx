import members from '../../components/componentsAbout/membersInfo'
import MembersCard from '../../components/componentsAbout/membersCards'
import TecInfo from '../../components/componentsAbout/TecInfo'
import TecCards from '../../components/componentsAbout/TecCards'
import NavBar from '../../components/NavBar'

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h1>Informacion del proyecto:</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ab aliquid quis vitae a consectetur dolore non, voluptates dicta aperiam optio architecto, molestiae iste, doloribus inventore corporis laborum dolor porro!</p>
      </div>
      
      <div>
        <h1>Tecnologias</h1>
        {TecInfo?.map((e) =>{
          return(
            <TecCards
              name={e.name}
              icon={e.icon}
              documentation={e.documentation} 
            />
          )
        })}
      </div>

      <div>
        <h2>Miembros:</h2>
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
