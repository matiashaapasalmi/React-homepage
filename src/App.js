import React from 'react'
import profiili from './profiili.jpeg';
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import MediaQuery, {useMediaQuery} from "react-responsive";



const App = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })



  const matias = {
    name: 'Matias Haapasalmi',
  }
  const otsikko = {
    color: "#FAEBD7",
    padding: "100px 50px 0px 50px",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const linkit = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  const taustatyyli = {
    
    backgroundImage: `url(${profiili})`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    width: '100vw',
    height: '80vh',
    backgroundAttachment: 'fixed'
    
  };
  const mobiilitektstityyli = {
    padding: "0px 50px 0px 50px",
    justifyContent: "center",
    alignItems: "center",
    
  };
  const tekstityyli = {
    
    padding: "16px 300px 0px 300px",
    justifyContent: "center",
    alignItems: "center",
  }


  return (

    <>

      <div style={taustatyyli}>

       <h1 style={otsikko}>{matias.name}</h1>
    
      </div>
      <div style={{width: '100vw', height: '500px', backgroundColor: '#f3f3f3'}}>

        
           
          <div style={isDesktopOrLaptop ? tekstityyli : mobiilitektstityyli}>
          Moro! Tervetuloa ensinmäisille omille sivuilleni.
          Olen 22-vuotias yhteisöllinen, analyyttinen ja ahkera
          tietotekniikan opiskelija Tampereelta. Olen erittäin
          oppimiskykyinen ja teknologia-alasta kiinnostunut ihminen. Etsin uusia
          mahdollisuuksia kerätä työkokemusta, kehittää itseäni
          vastuullisessa työskentelyssä sekä teknologia-alan erinäisissä
          työtehtävissä. Alla on linkattuna Linkednin ja Github tilini, sieltä voit 
          käydä tutkimassa muutamia tekemiäni projekteja. 
          

        
          </div>
          <div style={linkit}>
          <a style={{fontSize: "100px", padding: "50px"}} href="https://www.linkedin.com/in/matias-haapasalmi/">
              <BsLinkedin/>
            </a>
          
          

            <a style={{fontSize: "100px", padding: "50px"}} href="https://github.com/matiashaapasalmi">
              <BsGithub/>
            </a>
            
        </div>
        
      </div>
    </>
  )
}

export default App