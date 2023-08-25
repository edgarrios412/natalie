import style from './Home.module.css'
import natalie from "../../assets/natalie3.jpg" 
import natalie4 from "../../assets/natalie4.jpg" 
import {FaArrowDown} from "react-icons/fa"

const Home = () => {
  return(
    <div className={style.home}>
    <nav className={style.nav}>
    <ul className={style.ul}>
        <li className={style.li}>Inicio</li>
        <li className={style.li}>Trabajos</li>
    </ul>
    </nav>
      <div className={style.container}>
        {/* <p><FaArrowDown/></p> */}
        <h1 className={style.titleName}>Natalie Ariza</h1>
        <h2 className={style.titleProfesion}>ODONTOLOGA</h2>
        <div className={style.pantallaNegra}></div>
        <img className={style.img} alt="Natalie" src={natalie}/>
      </div>
      <div className={style.resumeContainer}>
        <div className={style.quienSoy}>
            <img className={style.imgNatalie} src={natalie4}></img>
            <div className={style.quienSoyText}>

            </div>
        </div>
      </div>
    </div>
  )
};

export default Home