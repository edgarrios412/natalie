import style from './Perfil.module.css'
import natalie from "../../../assets/natalieperfil.jpg"
import axios from "axios"
import { useState } from 'react';
 
const Perfil = ({fn}) => {

  const [image, setImage] = useState(localStorage.getItem("image") || JSON.parse(localStorage.getItem("user")).image)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  const uploadUserImage = async (e) => {
    const files = e.target.files;
    const dato = new FormData();
    dato.append("file", files[0]);
    dato.append("upload_preset","natalie")
    dato.append("api_key","612393625364863")
    dato.append("timestamp", 0)
    const res = await axios.post("https://api.cloudinary.com/v1_1/dftvenl2z/image/upload", dato)
    await axios.put("http://localhost:3001/user", {id:JSON.parse(localStorage.getItem("user")).id, image:res.data.secure_url})
    localStorage.setItem("image", res.data.secure_url)
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
          <p>Doc. {user.name} {user.lastname}</p>
          <p>Administradora</p>
          <p>Odontologa Estetica</p>
          <p>Tarjeta profesional XXXXX</p>
          <p>{user.email}</p>
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