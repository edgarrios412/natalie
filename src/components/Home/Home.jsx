import style from './Home.module.css'
import natalie from "../../assets/natalie3.jpg" 
import natalie4 from "../../assets/natalie4.jpg" 
import natalie6 from "../../assets/natalie6.jpg" 
import {FaArrowDown} from "react-icons/fa"
import logoNata from "../../assets/logonatalie.png"
import logoNata2 from "../../assets/logonatalie2.png"
import logoMini from "../../assets/logonata.png"
import Footer from '../Footer/Footer'
import ortodoncia from "../../assets/ortodoncia.jpg"
import telefono from "../../assets/telefono.png"
import {FiPhoneCall} from "react-icons/fi"
import {HiOutlineMail} from "react-icons/hi"
import {MdOutlineLocationOn} from "react-icons/md"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import fotocelular from "../../assets/celularfoto.jpg"

import { Fade } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return(
    <div className={style.home}>
      <nav className={style.nav}>
        <img className={style.logoMini} src={logoMini}/>
    <ul className={style.ul}>
        <li className={style.li}>Inicio</li>
        <li onClick={() => navigate("/login")} className={style.li}>Ingresar</li>
    </ul>
    </nav>
      <div className={style.container}>
        <h1 className={style.titleName}>Natalie Ariza</h1>
        <h2 className={style.titleProfesion}>ODONTOLOGA</h2>
        <button className={style.buttonReserva}><a className={style.noLink} target="_blank" href="https://wa.link/sdh5gu">Reserva tu valoracion</a></button>
        <img className={style.logoNata} src={logoNata2}/>
        <div className={style.pantallaNegra} style={{zIndex:"1"}}></div>
        <Carousel width="100%" infiniteLoop={true} renderIndicator={() => {}} renderThumbs={() => {}} renderArrowNext={() => {}} renderArrowPrev={() => {}} interval="6000" autoPlay={true} showStatus={false}>
                <div>
                <img className={style.img} alt="Natalie" src={natalie}/>
                </div>
                <div>
                <img className={style.img} alt="Natalie" src={natalie4}/>
                </div>

            </Carousel>
      </div>
    <div className={style.navDiv}></div>
      <div className={style.resumeContainer}>
        <div className={style.especialidades}>
           <Fade damping="0.2" direction='right' triggerOnce={true} cascade={true}>
            <div className={style.especialidad}>
              <img className={style.espeImg} src={ortodoncia}/>
              <h1 className={style.espeTitle}>Ortodoncia</h1>
            </div>
            <div className={style.especialidad}>
            <img className={style.espeImg} src={ortodoncia}/>
              <h1 className={style.espeTitle}>Endodoncia</h1>
            </div>
            <div className={style.especialidad}>
            <img className={style.espeImg} src={ortodoncia}/>
              <h1 className={style.espeTitle}>Ortografia</h1>
            </div>
            <div className={style.especialidad}>
            <img className={style.espeImg} src={ortodoncia}/>
              <h1 className={style.espeTitle}>Ortopediatra</h1>
            </div>
            <div className={style.especialidad}>
            <img className={style.espeImg} src={ortodoncia}/>
              <h1 className={style.espeTitle}>Ortopediatra</h1>
            </div>
            <div className={style.especialidad}>
            <img className={style.espeImg} src={ortodoncia}/>
              <h1 className={style.espeTitle}>Ortopediatra</h1>
            </div>
            </Fade>

        </div>
      </div>
      <div className={style.resumeContainer}>
        <div className={style.disenoSonrisa}>
          <Fade triggerOnce direction='left' fraction={0.5}>
        <Carousel width="400px" infiniteLoop={true} interval="3000" autoPlay={true} showStatus={false}>
                <div>
                    <img src={ortodoncia} />
                </div>
                <div>
                    <img src={ortodoncia} />
                </div>
                <div>
                    <img src={ortodoncia} />
                </div>
            </Carousel>
          </Fade>
          <Fade triggerOnce direction='right' fraction={0.5}>
        <div className={style.texto}>
          <h1 className={style.titleTexto}>Diseño de sonrisa</h1>
          <p className={style.subtitleTexto}>Ultima tecnologia</p>
          <p className={style.subtitleTexto}>Maxima naturalidad</p>
          <p className={style.subtitleTexto}>Una sonrisa para cada rostro</p>

          <p className={style.descTexto}>Deseas diseño de sonrisa pero te da temor que no se vea natural ? Que son los laminados cerámicos? Que son las carillas indirectas en resina? En la actualidad el éxito de la estética es lograr resultados lo más parecidos a la naturaleza posible.</p>
          <button className={style.buttonValoracion}><a className={style.noLink} target="_blank" href="https://wa.link/sdh5gu">Pide tu valoracion</a></button>
        </div>
          </Fade>
        </div>
      </div>
      <div className={style.resumeContainer}>
        <div className={style.disenoSonrisa}>
        <Fade triggerOnce direction='left' fraction={0.5}>
          <div className={style.containerTlf}>
        <img className={style.carrusel} style={{backgroundColor:"transparent"}} src={telefono}/>
        <img className={style.imgTlf} src={fotocelular}/>
          </div>
        </Fade>
        <Fade triggerOnce direction='right' fraction={0.5}>
        <div className={style.texto}>
          <p className={style.descTexto} style={{fontSize:"2em", textAlign:"center"}}>
Bienvenidos al consultorio dental de la Dra. Natalie Ariza y su equipo de especialistas, donde no solo diseñamos sonrisas, te devolvemos la seguridad y la tranquilidad al reír y masticar.</p>
          <button className={style.buttonValoracion}><a className={style.noLink} target="_blank" href="https://wa.link/sdh5gu">Pide tu valoracion</a></button>
        </div>
        </Fade>
        </div>
      </div>
        <div className={style.final}>
        <div className={style.izquierda}>
        <img className={style.logoNatalie} src={logoNata}/>
        <div className={style.mapa}>
          <div style={{width: "100%"}}><iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=es&amp;q=4.2586822,-73.5606767+(Natalie%20Ariza%20Odontolog%C3%ADa%20Est%C3%A9tica)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car Navigation Systems</a></iframe></div>
        </div>
        </div>
        <div className={style.derecha}>
          <h1 className={style.textoGrande}>Agendar cita</h1>
          <div className={style.numero}>
            <FiPhoneCall className={style.iconitos}/>
            <p className={style.textoYina}>+57 3204519919</p>
          </div>
          <div className={style.numero}>
          <HiOutlineMail className={style.iconitos}/>
          <p className={style.textoYina}>natasger1988@gmail.com</p>
          </div>
          <div className={style.numero}>
          <MdOutlineLocationOn className={style.iconitos}/>
          <p className={style.textoYina}>Centro Comercial Sunrise Ofc. 205</p>
          </div>
        </div>
        </div>
        <Footer/>
      </div>
  )
};

export default Home