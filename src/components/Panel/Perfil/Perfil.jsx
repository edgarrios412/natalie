import style from './Perfil.module.css'
import natalie from "../../../assets/natalieperfil.jpg"
import axios from "axios"
import { useState } from 'react';
 
const Perfil = ({fn}) => {

  const [image, setImage] = useState()

  const uploadUserImage = async (e) => {
    const files = e.target.files;
    // console.log(files[0])
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset","natalie")
    data.append("api_key","612393625364863")
    data.append("timestamp", 0)
    const res = await axios.post("https://api.cloudinary.com/v1_1/dftvenl2z/image/upload", data)
    setImage(res.data.secure_url)
  }

  return(
    <>
    <div className={style.container}>
      <div className={style.perfilContainerTop}>
        <div>
        <input onChange={uploadUserImage} className={style.inputFile} type="file"/>
        <img src={image ? image : natalie} className={style.img}/>
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