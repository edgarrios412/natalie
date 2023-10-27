import style from './Pacientes.module.css'
import { useEffect, useState } from 'react';
import PacienteDetail from './PacienteDetail';
import PacienteForm from './PacienteForm';
import axios from "axios"
 
const Pacientes = () => {

  const [pacienteId, setPacienteId] = useState(null)
  const [create, setCreate] = useState(false)


  const [pacientes, setPacientes] = useState()

  const [paciente, setPaciente] = useState()

  useEffect(() => {
    axios.get("/client/all")
    .then(({data}) => setPacientes(data))
  },[])

  return(
    <>
      <div className={style.pacientes}>
        { create == false && pacienteId == null && <><h1>Pacientes</h1>
        <table className={style.tabla}>
          <tr>
          <td className={style.topTd}>Cedula</td>
          <td className={style.topTd}>Nombre y apellido</td>
          <td className={style.topTd}>Fecha</td>
          <td className={style.topTd}>Ultimo procedimiento</td>
          <td className={style.topTd}>Proxima cita</td>
          </tr>
          {pacientes?.map( u =>
          <tr className={style.tr} onClick={() => setPacienteId(u.id)}>
          <td className={style.td}>{u.cedula}</td>
          <td className={style.td}>{u.name}</td>
          <td className={style.td}>En proceso</td>
          <td className={style.td}>En proceso</td>
          <td className={style.td}>En proceso</td>
          </tr>)}
        </table>
        <br></br>
        <button onClick={() => setCreate(true)} className={style.button}>Nuevo paciente</button>
        </>}
        {create && <PacienteForm back={() => setCreate(false)}/>}
        {pacienteId !== null && <PacienteDetail pacienteId={pacienteId} back={() => setPacienteId(null)}/>}
        <br></br>
      </div>
    </>
  )
};

export default Pacientes