import style from './Pacientes.module.css'
import { useState } from 'react';
import PacienteDetail from './PacienteDetail';
import PacienteForm from './PacienteForm';
 
const Pacientes = () => {

  const [pacienteId, setPacienteId] = useState(null)
  const [create, setCreate] = useState(false)


  const pacientes = [
    {
      name:"Yina",
      lastname:"Garzon",
      cedula:"105823823",
      fecha:"02/04/55",
      ultipro:"1234",
      proxci:"mañana"
    },
    {
      name:"Edgar",
      lastname:"Vilchez",
      cedula:"105823823",
      fecha:"05/12/23",
      ultipro:"1234",
      proxci:"mañana"
    }
  ]

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
          <tr className={style.tr} onClick={() => setPacienteId(1)}>
          <td className={style.td}>{u.cedula}</td>
          <td className={style.td}>{u.name} {u.lastname}</td>
          <td className={style.td}>{u.fecha}</td>
          <td className={style.td}>{u.ultipro}</td>
          <td className={style.td}>{u.proxci}</td>
          </tr>)}
        </table>
        <br></br>
        <button onClick={() => setCreate(true)} className={style.button}>Nuevo paciente</button>
        </>}
        {create && <PacienteForm back={() => setCreate(false)}/>}
        {pacienteId ==! null && <PacienteDetail back={() => setPacienteId(null)}/>}
        <br></br>
      </div>
    </>
  )
};

export default Pacientes