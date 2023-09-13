import style from './Perfil.module.css'
 
const Perfil = () => {
  return(
    <>
    <div className={style.container}>
      <div className={style.perfilContainerTop}>
        <img className={style.img}/>
        <div className={style.dataUser}>
          <p>Natalie Ariza</p>
          <p>Administradora</p>
          <p>Odontologa Estetica</p>
          <p>Tarjeta profesional XXXXX</p>
          <p>docnatalieariza@doc.com</p>
        </div>
      </div>
      <div className={style.perfilContainerBottom}>
        <button className={style.button}>Guardar</button>
        <button className={style.button}>Cambiar contraseña</button>
      </div>
      </div>
    </>
  )
};

export default Perfil