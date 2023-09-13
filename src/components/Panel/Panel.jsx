import style from './Panel.module.css'
import Perfil from "./Perfil/Perfil"
import Financiero from './Financiero/Financiero';
import { useState } from 'react';
import Agenda from './Agenda/Agenda';
import Control from './Control/Control';
import Pacientes from './Pacientes/Pacientes';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logonata.jpeg"
 
const Panel = () => {

    const [page, setPage] = useState(1)
    const navigate = useNavigate()

  return(
    <>
      <nav className={style.nav}>
      <img className={style.logo} src={logo}/>
      <h1>Hola Natalie!</h1>
      <input className={style.findInput}/>
      </nav>
      <div className={style.flexContainer}>
      <div className={style.navigator}>
        <ul className={style.ul}>
            <li className={style.li} onClick={() => setPage(1)}>Perfil</li>
            <li className={style.li} onClick={() => setPage(2)}>Control financiero</li>
            <li className={style.li} onClick={() => setPage(3)}>Agenda</li>
            <li className={style.li} onClick={() => setPage(4)}>Control ambiental y limpieza</li>
            <li className={style.li} onClick={() => setPage(5)}>Pacientes</li>
            <li className={style.li} onClick={() => navigate("/login")}>Cerrar sesion</li>
        </ul>
      </div>
      <div className={style.panelContainer}>
      {page == 1 && <Perfil/>}
      {page == 2 && <Financiero/>}
      {page == 3 && <Agenda/>}
      {page == 4 && <Control/>}
      {page == 5 && <Pacientes/>}
      </div>
      </div>
    </>
  )
};

export default Panel