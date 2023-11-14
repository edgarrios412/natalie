import { useState } from 'react'
import style from '../Pacientes/Pacientes.module.css'
import CotizacionDetail from './CotizacionDetail'

const Cotizacion = () => {

    const [id, setId] = useState(null)

    if(id) return <CotizacionDetail id={id} volver={() => setId(null)}/>

    return(
        <div>
        <h1 style={{textAlign:"center"}}>Cotizaciones</h1> 
        <table className={style.evolucion}>
          <tr>
          <td className={style.topTd}>ID</td>
          <td className={style.topTd}>Fecha</td>
          <td className={style.topTd}>Cliente</td>
          <td className={style.topTd}>Items</td>
          <td className={style.topTd}>Precio</td>
          </tr>
          <tr onClick={() => setId(1)}>
          <td className={style.td}>1</td>
          <td className={style.td}>02/02/23</td>
        <td className={style.td}>Yina Garzon</td>
          <td className={style.td}>10</td>
          <td className={style.td}>$10.000.000</td>
          </tr>
        </table>
        <br></br>
        <div className={style.buttons}>
        <button className={style.button}>Agregar</button>
        </div>
        </div>
    )
}

export default Cotizacion