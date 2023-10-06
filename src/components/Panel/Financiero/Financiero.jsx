import { useEffect, useState } from 'react';
import style from './Financiero.module.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

 
const Financiero = () => {

  const [chartType, setChartType] = useState(3)
  const [creatorPay, setCreatorPay] = useState(false)
  const [detail, setDetail] = useState(false)
  const day = [
    {
      name:"Hoy",
      Bancolombia: 4000,
      Efectivo: 2400,
      TDC: 2400,
    }
  ]
  const data = [
    {
      name: 'Enero',
      Bancolombia: 4000,
      Efectivo: 2400,
      TDC: 2400,
    },
    {
      name: 'Febrero',
      Bancolombia: 3000,
      Efectivo: 1398,
      TDC: 2210,
    },
    {
      name: 'Marzo',
      Bancolombia: 2000,
      Efectivo: 9800,
      TDC: 2290,
    }]

    const [pagos, setPagos] = useState()

    const getPagos = async () => {
      const {data} = await axios.get("http://localhost:3001/financiero")
      setPagos(data)
    }

    const newPay = async () => {
      const {data} = await axios.post("http://localhost:3001/financiero", formPay)
      alert(data.status)
      getPagos()
      setCreatorPay(false)
    }

    const [formPay, setFormPay] = useState({
      user:"",
      monto:"",
      reason:"",
      tipo:"Bancolombia"
    })

    const handleForm = (name,value) => {
      setFormPay({...formPay, [name]:value})
    }

    useEffect(() => {
      getPagos()
    },[])

  return(
    <>
    {(!creatorPay && !detail) && <div className={style.financiero}>
      <h1 className={style.titleSection}>Financiero</h1>
      <select onChange={(e) => setChartType(e.target.value)} className={style.select}>
        <option value={1} selected>Hoy</option>
        {/* <option value={2}>Semanal</option> */}
        <option value={3}>Mensual</option>
        <option value={4}>Anual</option>
      </select>
        {chartType == 1 && <BarChart
        className={style.grafica}
        // style={{marginTop:"120px"}}
          width={600}
          height={350}
          data={day}
          onClick={(e) => alert("Mostrar detalles de " + e.activeTooltipIndex)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bancolombia" fill="#8884d8" />
          <Bar dataKey="Efectivo" fill="#82ca9d" />
          <Bar dataKey="TDC" fill="#FF5733" />
        </BarChart>}
        {chartType == 2 && <BarChart
        className={style.grafica}
          width={600}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bancolombia" fill="#8884d8" />
          <Bar dataKey="Efectivo" fill="#82ca9d" />
          <Bar dataKey="TDC" fill="#FF5733" />
        </BarChart>}
        {chartType == 3 && <BarChart
        className={style.grafica}
          width={600}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bancolombia" fill="#8884d8" />
          <Bar dataKey="Efectivo" fill="#82ca9d" />
          <Bar dataKey="TDC" fill="#FF5733" />
        </BarChart>}
        {chartType == 4 && <BarChart
        className={style.grafica}
          width={600}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bancolombia" fill="#8884d8" />
          <Bar dataKey="Efectivo" fill="#82ca9d" />
          <Bar dataKey="TDC" fill="#FF5733" />
        </BarChart>}
        <br></br>
        <button className={style.button} onClick={() => setDetail(true)}>Detalles</button>
        <br></br>
        <br></br>
        <button className={style.button} onClick={() => setCreatorPay(true)}>Nuevo pago</button>
    </div>}
    {(creatorPay && !detail) && <div className={style.financiero}>
      <h1 onClick={() => setCreatorPay(false)}>Nuevo pago</h1>
      <div className={style.inputContainer}>
            <input name="user" onChange={(e) => handleForm(e.target.name, e.target.value)} className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Nombre</label>
          </div>
          <div className={style.inputContainer}>
            <input type="date" name="start" className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Fecha</label>
          </div>
          <div className={style.inputContainer}>
          <input type="time" className={style.input} name="hour"/>
          <label className={style.textInput}>Hora</label>
          </div>
          <div className={style.inputContainer}>
            <input name="monto" className={style.input} onChange={(e) => handleForm(e.target.name, e.target.value)} placeholder=' '></input>
            <label className={style.textInput}>Monto</label>
          </div>
          <div className={style.inputContainer}>
            <input name="reason" className={style.input} onChange={(e) => handleForm(e.target.name, e.target.value)} placeholder=' '></input>
            <label className={style.textInput}>Razon</label>
          </div>
          <div className={style.inputContainer}>
            {/* <input name="reason" className={style.input} onChange={(e) => handleForm(e.target.name, e.target.value)} placeholder=' '></input> */}
            <select onChange={(e) => setFormPay({...formPay, tipo:e.target.value})} className={style.input}>
              <option value="Bancolombia">Bancolombia</option>
              <option value="Efectivo">Efectivo</option>
              <option value="TDC">TDC</option>
            </select>
            <label className={style.textInput}>Metodo</label>
          </div>
          <div className={style.buttons}>
          <button className={style.button} onClick={newPay}>Guardar</button>
          <button className={style.button} onClick={() => setCreatorPay(false)}>Volver</button>
          </div>
      </div>}
      {(!creatorPay && detail) && <div className={style.financiero}>
        <h2>Detalle financiero</h2>
      <table className={style.tabla}>
          <tr>
          <td className={style.topTd}>Fecha</td>
          <td className={style.topTd}>Causante</td>
          <td className={style.topTd}>Procedimiento</td>
          <td className={style.topTd}>Valor pagado</td>
          <td className={style.topTd}>Metodo de pago</td>
          </tr>
          {pagos?.map( u =>
          <tr key={u.id} className={style.tr}>
          <td className={style.td}>{u.date}</td>
          <td className={style.td}>{u.user}</td>
          <td className={style.td}>{u.reason}</td>
          <td className={style.td}>${u.monto}</td>
          <td className={style.td}>{u.tipo}</td>
          </tr>)}
        </table>
        <br></br>
            <button className={style.button} onClick={() => setDetail(false)}>Volver</button>
      </div>}
    </>
  )
};

export default Financiero