import { Toaster } from "react-hot-toast"
import style from "./CotizacionDetail.module.css"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"

const CotizacionDetail = ({volver,id}) => {
    return(
        <>
        <Toaster position="top-center"/>
          <div className={style.pacientes}>
          <><h1>Detalles de la cotizacion #1</h1>
          <br></br><br></br>
          <div className={style.header}>
          <p>Paciente: Yina Garzon</p>
          <p>Telefono: 311-8268264</p>
          <p>Fecha: 04/05/23</p>
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
              <Tr className={style.tr}>
              <Td className={style.td}>1</Td>
              <Td className={style.td}>Rayos X</Td>
              <Td className={style.td}>$1,000,000</Td>
              <Td className={style.td}>2</Td>
              <Td className={style.td}>$2,000,000</Td>
              </Tr>
          </Tbody>
        </Table>:<table className={style.tabla}>
              <tr>
              <td className={style.topTd}>Item</td>
              <td className={style.topTd}>Descripcion</td>
              <td className={style.topTd}>Precio</td>
              <td className={style.topTd}>Cantidad</td>
              <td className={style.topTd}>Total</td>
              </tr>
              <tr className={style.tr}>
              <td className={style.td}>1</td>
              <td className={style.td}>Rayos X</td>
              <td className={style.td}>$1,000,000</td>
              <td className={style.td}>2</td>
              <td className={style.td}>$2,000,000</td>
              </tr>
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