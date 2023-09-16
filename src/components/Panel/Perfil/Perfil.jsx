import style from './Perfil.module.css'
import natalie from "../../../assets/natalieperfil.jpg"
 
const Perfil = ({fn}) => {
  return(
    <>
    <div className={style.container}>
      <div className={style.perfilContainerTop}>
        <div>
        <input className={style.inputFile} type="file"/>
        <img src={natalie} className={style.img}/>
        </div>
        <div className={style.dataUser}>
          <p>Doc. Natalie Ariza</p>
          <p>Administradora</p>
          <p>Odontologa Estetica</p>
          <p>Tarjeta profesional XXXXX</p>
          <p>docnatalieariza@doc.com</p>
        </div>
      </div>
      <div className={style.perfilContainerBottom}>
        <button className={style.button} onClick={fn}>Cambiar contraseña</button>
        {/* <button className={style.button}>Guardar</button> */}
      </div>
      </div>
    </>
  )
};

export default Perfil