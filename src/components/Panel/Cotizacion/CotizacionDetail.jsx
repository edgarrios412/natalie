import { Toaster } from "react-hot-toast"
import style from "./CotizacionDetail.module.css"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import { useEffect, useState } from "react"
import axios from "axios"

const CotizacionDetail = ({volver,id}) => {

  const [coti, setCoti] = useState()

  useEffect(() => {
    axios.get("/client/cotizacion/"+3).then(({data}) => {setCoti(data); console.log(data)})
  },[])

    return(
        <>
        <Toaster position="top-center"/>
          <div className={style.pacientes}>
          <><h1>Detalles de la cotizacion #{coti?.id}</h1>
          <br></br><br></br>
          <div className={style.header}>
          <p>Paciente: Yina Garzon</p>
          <p>Telefono: 311-8268264</p>
          <p>Fecha: {coti?.date}</p>
          <p>Tratamiento: No definido</p>
          </div>
          {window.innerWidth < 1300 ? <Table className={style.tabla}>
          <Thead>
            <Tr>
              <Th className={style.topTd}>Item</Th>
              <Th className={style.topTd}>Descripcion</Th>
              <Th className={style.topTd}>Precio</Th>
              <Th className={style.topTd}>Cantidad</Th>
              <Th className={style.topTd}>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {coti?.proced.map(p => {
            return(
              <Tr className={style.tr}>
              <Td className={style.td}></Td>
              <Td className={style.td}>{p.label}</Td>
              <Td className={style.td}>${p.value}</Td>
              <Td className={style.td}>2</Td>
              <Td className={style.td}>$2,000,000</Td>
              </Tr>)
            })}
          </Tbody>
        </Table>:<table className={style.tabla}>
              <tr>
              <td className={style.topTd}>Item</td>
              <td className={style.topTd}>Descripcion</td>
              <td className={style.topTd}>Precio</td>
              <td className={style.topTd}>Cantidad</td>
              <td className={style.topTd}>Total</td>
              </tr>
              {coti?.proced.map(p => {
                return(
              <tr className={style.tr}>
              <td className={style.td}></td>
              <td className={style.td}>{p.label}</td>
              <td className={style.td}>${p.value}</td>
              <td className={style.td}>2</td>
              <td className={style.td}>$2,000,000</td>
              </tr>)})}
            </table>}
        <br></br>
        <div className={style.footer}>
          <div className={style.footerItem}>
            <p>Subtotal:</p>
            <p>$2,000,000</p>
          </div>
          <div className={style.footerItem}>
            <p>Impuestos (0%):</p>
            <p>$0</p>
          </div>
          <div className={style.footerItem}>
            <p>Total:</p>
            <p>$2,000,000</p>
          </div>
        </div>

            <h5>Oferta valida por 5 dias a partir de la emision</h5>
            </>
            <button className={style.button} onClick={volver}>Volver</button>
            <br></br>
          </div>
        </>
      )
}

export default CotizacionDetail