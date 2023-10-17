import style from './Panel.module.css'
import Perfil from "./Perfil/Perfil"
import Financiero from './Financiero/Financiero';
import { useEffect, useState } from 'react';
import Agenda from './Agenda/Agenda';
import Control from './Control/Control';
import Pacientes from './Pacientes/Pacientes';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logonata.jpeg"
import axios from "axios"

const Panel = () => {

  const [page, setPage] = useState(1)
  const [changePass, setChangePass] = useState(false)
  const [changeDate, setChangeDate] = useState(null)
  const [newDate, setNewDate] = useState(false)
  const navigate = useNavigate()

  const editarEvento = (id) => {
    setChangeDate(id)
  }

  const auth = async () => {
    if(!localStorage.getItem("token")) return navigate("/login")
    const {data} = await axios.post("/user/auth", {token:localStorage.getItem("token")})
      if(data.status){
        localStorage.setItem("image", data.user.image)
        localStorage.setItem("user",JSON.stringify(data.user))
        return
      }
      return navigate("/login")
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("image")
    navigate("/login")
  }
  
  useEffect(() => {
    auth()
  },[])

  const [date, setDate] = useState([{id:"a"},{id:1}])

  const getDates = async () => {
    const {data} = await axios.get("/calendar")
    const fechas = data?.map(d => {
      return{
        id:d.id,
        title:d.title,
        start:new Date(d.start),
        end: new Date(d.end),
        resourceId:1,
        procedimiento:d.procedimiento
      }
      })
    setDate(fechas)
  }

  const nuevaFecha = async () => {
    await axios.post("/calendar", {
      title: form.title,
      start: new Date(form.start + "T" + form.hour + ":" + form.min),
      end: new Date(form.start + "T" + form.endhour + ":" + form.endmin),
      procedimiento: form.procedimiento
    })
    getDates()
  }

  useEffect(() => {
    getDates()
  },[])

  const [form, setForm] = useState({
    title: "",
    start: "",
    resourceId: 1,
    hour:"01",
    min:"00",
    endhour:"01",
    endmin:"00"
    // id: 10,
  })

  const [formPass, setFormPass] = useState({
    id:JSON.parse(localStorage.getItem("user"))?.id,
    newpass:"",
    newpass2:"",
    oldpass:""
  })

  const handleForm = (name, value) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  const deleteDate = async () => {
    await axios.delete("/calendar/"+changeDate)
    getDates()
  } 

  const handleFormPass = (e) => {
    setFormPass({
      ...formPass,
      [e.target.name]:e.target.value
    })
  }

  const saveChangePass = async () => {
    console.log(formPass)
    if(formPass.newpass !== formPass.newpass2) return alert("Las contraseñas no coinciden")
    const {data} = await axios.put("/user", formPass)
    setChangePass(false)
    alert(data.users)
  }

  const [pacientes, setPacientes] = useState()

  useEffect(() => {
    axios.get("/user").then(({ data }) => setPacientes(data))
  }, [])

  const [dateSelected, setDateSelected] = useState()

  useEffect(() => {
    const dateSelect = date.find(d => d.id == changeDate)
    setDateSelected(dateSelect)
    console.log(dateSelect)
  },[changeDate])

  return (
    <>
      {changePass && <div className={style.modal}>
        <div className={style.windows}>
          <h2 className={style.title}>Cambiar contraseña</h2>
          <div className={style.inputContainer}>
            <input type="password" onChange={handleFormPass} name="oldpass" value={formPass.oldpass} className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Contraseña anterior</label>
          </div>
          <div className={style.inputContainer}>
            <input type="password" onChange={handleFormPass} name="newpass" value={formPass.newpass} className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Nueva contraseña</label>
          </div>
          <div className={style.inputContainer}>
            <input type="password" onChange={handleFormPass} name="newpass2" value={formPass.newpass2} className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Repite la contraseña</label>
          </div>
          <button className={style.button} onClick={saveChangePass}>Confirmar</button>
          <br></br>
          <br></br>
          <button className={style.button} onClick={() => setChangePass(false)}>Atras</button>
        </div>
      </div>}
      {changeDate && <div className={style.modal}>
        <div className={style.windows}>
          <h2 className={style.title}>{dateSelected?.title}</h2>
          <p className={style.title}><b>Procedimiento:</b> {dateSelected?.procedimiento}</p>
          <div className={style.buttons}>
            <button className={style.button} onClick={() => setChangeDate(false)}>Cerrar</button>
            <button className={style.buttonDelete} onClick={deleteDate}>Eliminar</button>
          </div>
        </div>
      </div>}
      {newDate && <div className={style.modal}>
        <div className={style.windows}>
          <h2 className={style.title}>Nuevo evento</h2>
          <div className={style.inputContainer}>
            <select name="title" onChange={(e) => handleForm(e.target.name, e.target.value)} className={style.input} placeholder=' '>
              <select selected value={null}>Seleccionar</select>
              {pacientes.map(p => <option value={`${p.name} ${p.lastname}`}>{p.name} {p.lastname}</option>)}
            </select>
            <label className={style.textInput}>Paciente</label>
          </div>
          <div className={style.inputContainer}>
            <input name="procedimiento" onChange={(e) => handleForm(e.target.name, e.target.value)} className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Procedimiento</label>
          </div>
          <div className={style.inputContainer}>
            <input type="date" name="start" onChange={(e) => handleForm(e.target.name, e.target.value)} className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Fecha inicio</label>
          </div>
          <div className={style.inputContainer}>
          <input type="time" className={style.input} name="hour" onChange={(e) => handleForm(e.target.name, e.target.value)}/>
          <label className={style.textInput}>Hora inicio</label>
          </div>
          <div className={style.inputContainer}>
          <input type="time" className={style.input} name="endhour" onChange={(e) => handleForm(e.target.name, e.target.value)}/>
          <label className={style.textInput}>Hora fin</label>
          </div>
            <button className={style.button} onClick={() => {nuevaFecha(); setNewDate(false)}}>Guardar</button>
            <button className={style.buttonDelete} onClick={() => setNewDate(false)}>Cerrar</button>
        </div>
      </div>}
      <nav className={style.nav}>
        <img className={style.logo} src={logo} />
        <h1 className={style.saludo}>Hola {JSON.parse(localStorage.getItem("user")).name}! 👋</h1>
        {/* <input onChange={(e) => alert("Filtrando usuarios con cedula: " + e.target.value)} onClick={() => setPage(5)} placeholder="Buscar paciente" className={style.findInput} /> */}
        <input placeholder="Buscar paciente" className={style.findInput} />
      </nav>
      <div className={style.flexContainer}>
        <div className={style.navigator}>
          <ul className={style.ul}>
            <li className={page == 1 ? style.liSelected : style.li} onClick={() => setPage(1)}>Perfil</li>
            <li className={page == 2 ? style.liSelected : style.li} onClick={() => setPage(2)}>Control financiero</li>
            <li className={page == 3 ? style.liSelected : style.li} onClick={() => setPage(3)}>Agenda</li>
            <li className={page == 4 ? style.liSelected : style.li} onClick={() => setPage(4)}>Control ambiental y limpieza</li>
            {/* <li className={page == 5 ? style.liSelected : style.li} onClick={() => setPage(5)}>Pacientes</li> */}
            <li className={style.li} onClick={logout}>Cerrar sesion</li>
          </ul>
        </div>
        <div className={style.panelContainer}>
          {page == 1 && <Perfil fn={() => setChangePass(true)} />}
          {page == 2 && <Financiero />}
          {page == 3 && <Agenda fn={editarEvento} date={date} newDate={() => setNewDate(true)} />}
          {page == 4 && <Control />}
          {page == 5 && <Pacientes />}
        </div>
      </div>
    </>
  )
};

export default Panel