import style from './Usuarios.module.css'
import { useEffect, useState } from 'react';
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Usuarios = ({find, createUser}) => {

  const [pacienteId, setPacienteId] = useState(null)
  const [create, setCreate] = useState(false)


  const [pacientes, setPacientes] = useState()
  
  const [paciente, setPaciente] = useState()
  const [filterP, setFilterP] = useState()
  
  const newClient = () => {
    setPacienteId(null); 
  }
  
  useEffect(() => {
    axios.get("/user")
    .then(({data}) => {setPacientes(data); setFilterP(data)})
  },[])
  
  const deleteUser = async (id) => {
    await axios.delete("/user/"+id)
    alert("Eliminado con exito")
    axios.get("/user")
    .then(({data}) => {setPacientes(data); setFilterP(data)})
  }

  useEffect(() => {
    if(!find?.length){
      return setFilterP(pacientes)
    }else{
      setFilterP(pacientes?.filter(p => p.cedula == find))
    }
  },[find])

  return(
    <>
    <Toaster position="top-center"/>
      <div className={style.pacientes}>
      <><h1>Pacientes</h1>
      {window.innerWidth < 1300 ? <Table className={style.tabla}>
      <Thead>
        <Tr>
          <Th className={style.topTd}>ID</Th>
          <Th className={style.topTd}>Nombres</Th>
          <Th className={style.topTd}>Rol</Th>
          <Th className={style.topTd}>Email</Th>
          <Th className={style.topTd}>Acciones</Th>
        </Tr>
      </Thead>
      <Tbody>
        {filterP?.map( u =>
          <Tr className={style.tr}>
          <Td className={style.td}>{u.id}</Td>
          <Td className={style.td}>{u.name} {u.lastname}</Td>
          <Td className={style.td}>{u.role}</Td>
          <Td className={style.td}>{u.email}</Td>
          <Td className={style.td} onClick={() => deleteUser(u.id)}>Borrar</Td>
          </Tr>)}
      </Tbody>
    </Table>:<table className={style.tabla}>
          <tr>
          <td className={style.topTd}>ID</td>
          <td className={style.topTd}>Nombres</td>
          <td className={style.topTd}>Rol</td>
          <td className={style.topTd}>Email</td>
          <td className={style.topTd}>Acciones</td>
          </tr>
          {filterP?.map( u =>
          <tr className={style.tr}>
          <td className={style.td}>{u.id}</td>
          <td className={style.td}>{u.name} {u.lastname}</td>
          {u.role == 1 && <td className={style.td}>Especialista</td>}
          {u.role == 2 && <td className={style.td}>Administrador</td>}
          <td className={style.td}>{u.email}</td>
          <td className={style.td} onClick={() => deleteUser(u.id)}>Borrar</td>
          </tr>)}
        </table>}
    <br></br>
        <button onClick={createUser} className={style.button}>Nuevo usuario</button></>
        <br></br>
      </div>
    </>
  )
};

export default Usuarios