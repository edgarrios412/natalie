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
  const [changePass, setChangePass] = useState(false)
  const [changeDate, setChangeDate] = useState(null)
  const [newDate, setNewDate] = useState(false)
  const navigate = useNavigate()

  const editarEvento = (id) => {
    setChangeDate(id)
  }

  const [date, setDate] = useState([{
    id:1,
    title:"Hola",
    start:new Date(),
    end:new Date(),
    resourceId:1,
  },{
    id:2,
    title:"Hola",
    start:new Date(),
    end:new Date(),
    resourceId:1,
  }])

  const nuevaFecha = (title, hora) => {
    setDate([
      ...date,
      form
    ])
  }

  const [form, setForm] = useState({
    title:"",
    start:"",
    resourceId:1,
    id:10,
  })

  const handleForm = (name, value) => {
    setForm({
      ...form,
      [name]:value
    })
    console.log(form)
  }

  return (
    <>
      {changePass && <div className={style.modal}>
        <div className={style.windows}>
          <h2 className={style.title}>Cambiar contraseña</h2>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Contraseña anterior</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Nueva contraseña</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Repite la contraseña</label>
          </div>
          <button className={style.button} onClick={() => setChangePass(false)}>Confirmar</button>
        </div>
      </div>}
      {changeDate && <div className={style.modal}>
        <div className={style.windows}>
          <h2 className={style.title}>Evento #{changeDate}</h2>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Titulo</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Fecha</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Descripcion</label>
          </div>
          <div className={style.buttons}>
          <button className={style.button} onClick={() => setChangeDate(false)}>Guardar</button>
          <button className={style.buttonDelete} onClick={() => setChangeDate(false)}>Eliminar</button>
          </div>
        </div>
      </div>}
      {newDate && <div className={style.modal}>
        <div className={style.windows}>
          <h2 className={style.title}>Evento #{changeDate}</h2>
          <div className={style.inputContainer}>
            <input name="title" onChange={(e) => handleForm(e.target.name, e.target.value)} className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Titulo</label>
          </div>
          <div className={style.inputContainer}>
            <input type="date" name="start" onChange={(e) => handleForm(e.target.name, new Date(e.target.value+"T10:00"))} className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Fecha</label>
          </div>
          <div className={style.inputContainer}>
            <input type="date" name="end" onChange={(e) => handleForm(e.target.name, new Date(e.target.value+"T10:00"))} className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Fecha</label>
          </div>
          <div className={style.buttons}>
          <button className={style.button} onClick={() => nuevaFecha()}>Guardar</button>
          <button className={style.buttonDelete} onClick={() => setNewDate(false)}>Eliminar</button>
          </div>
        </div>
      </div>}
      <nav className={style.nav}>
        <img className={style.logo} src={logo} />
        <h1 className={style.saludo}>Hola Natalie! 👋</h1>
        <input onChange={(e)=> alert("Filtrando usuarios con cedula:" + e.target.value)} onClick={() => setPage(5)} placeholder="Buscar paciente" className={style.findInput} />
      </nav>
      <div className={style.flexContainer}>
        <div className={style.navigator}>
          <ul className={style.ul}>
            <li className={page == 1 ? style.liSelected : style.li} onClick={() => setPage(1)}>Perfil</li>
            <li className={page == 2 ? style.liSelected : style.li} onClick={() => setPage(2)}>Control financiero</li>
            <li className={page == 3 ? style.liSelected : style.li} onClick={() => setPage(3)}>Agenda</li>
            <li className={page == 4 ? style.liSelected : style.li} onClick={() => setPage(4)}>Control ambiental y limpieza</li>
            <li className={page == 5 ? style.liSelected : style.li} onClick={() => setPage(5)}>Pacientes</li>
            <li className={style.li} onClick={() => navigate("/login")}>Cerrar sesion</li>
          </ul>
        </div>
        <div className={style.panelContainer}>
          {page == 1 && <Perfil fn={() => setChangePass(true)} />}
          {page == 2 && <Financiero />}
          {page == 3 && <Agenda fn={editarEvento} date={date} newDate={() => setNewDate(true)}/>}
          {page == 4 && <Control />}
          {page == 5 && <Pacientes />}
        </div>
      </div>
    </>
  )
};

export default Panel