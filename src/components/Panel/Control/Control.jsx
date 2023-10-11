import { useEffect, useState } from 'react';
import style from './Control.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios"

const Control = () => {

  const [typeChart, setTypeChart] = useState(1)
  const [creator, setCreator] = useState(false)


  const [temp, setTemp] = useState([])
  const [tempForm, setTempForm] = useState({
    name: new Date().getDate(),
    type:1,
    mañana: 0,
    tarde: 0,
  })

  const [hume, setHume] = useState([])
  const [humeForm, setHumeForm] = useState({
    name: new Date().getDate(),
    type:2,
    mañana: 0,
    tarde: 0,
  })

  const [frio, setFrio] = useState([])
  const [frioForm, setFrioForm] = useState({
    name: new Date().getDate(),
    type:3,
    mañana: 0,
    tarde: 0,
  })

  const handleTempForm = (e) => {
    const { name, value } = e.target
    setTempForm({
      ...tempForm,
      [name]: value
    })
  }

  const createTemp = async () => {
    await axios.post("http://localhost:3001/temperatura", tempForm)
    setTemp([
      ...temp,
      tempForm
    ])
    console.log(temp)
  }

  const handleHumeForm = (e) => {
    const { name, value } = e.target
    setHumeForm({
      ...humeForm,
      [name]: value
    })
  }

  const createHume = async () => {
    await axios.post("http://localhost:3001/temperatura", humeForm)
    setHume([
      ...hume,
      humeForm
    ])
    console.log(hume)
  }

  const handleFrioForm = (e) => {
    const { name, value } = e.target
    setFrioForm({
      ...frioForm,
      [name]: value
    })
  }

  const createFrio = async () => {
    await axios.post("http://localhost:3001/temperatura", frioForm)
    setFrio([
      ...frio,
      frioForm
    ])
  }

  const getData = async () => {
    const {data} = await axios.get("http://localhost:3001/temperatura")
    console.log(data)
    setTemp(data.temp)
    setHume(data.hume)
    setFrio(data.frio)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <div className={style.control}>
        <select onChange={(e) => setTypeChart(e.target.value)} className={style.select}>
          <option value={1} selected>Temperatura</option>
          <option value={2}>Humedad</option>
          <option value={3}>Cadena de frio</option>
        </select>
        {!creator && <button className={style.button} onClick={() => setCreator(true)}>Crear</button>}
        {!creator ? <div>
          {typeChart == 1 && <div>
            <h4>Temperatura del mes en la mañana</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={temp}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="mañana" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            <h4>Temperatura del mes en la tarde</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={temp}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="tarde" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </div>}
          {typeChart == 2 && <div>
            <h4>Humedad del mes en la mañana</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={hume}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="mañana" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            <h4>Humedad del mes en la tarde</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={hume}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="tarde" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </div>}
          {typeChart == 3 && <div>
            <h4>Cadena de frio del mes en la mañana</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={frio}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="mañana" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            <h4>Cadena de frio del mes en la tarde</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={frio}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="tarde" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </div>}
        </div> :
          <div>
            {typeChart == 1 && <>
              <br></br>
              <div className={style.inputContainer}>
                <input name="mañana" onChange={handleTempForm} className={style.input} placeholder=' '></input>
                <label className={style.textInput}>Mañana</label>
              </div>
              <div className={style.inputContainer}>
                <input name="tarde" onChange={handleTempForm} className={style.input} placeholder=' '></input>
                <label className={style.textInput}>Tarde</label>
              </div>
              <br></br>
              <button onClick={() => {setCreator(false); createTemp()}} className={style.button}>Guardar</button>
              <button onClick={() => setCreator(false)} className={style.button}>Volver</button>
            </>}
            {typeChart == 2 && <>
              {/* <h1>Humedad form</h1> */}
              <br></br>
              <div className={style.inputContainer}>
                <input name="mañana" onChange={handleHumeForm} className={style.input} placeholder=' '></input>
                <label className={style.textInput}>Mañana</label>
              </div>
              <div className={style.inputContainer}>
                <input name="tarde" onChange={handleHumeForm} className={style.input} placeholder=' '></input>
                <label className={style.textInput}>Tarde</label>
              </div>
              <br></br>
              <button onClick={() => {setCreator(false); createHume()}} className={style.button}>Guardar</button>
              <button onClick={() => setCreator(false)} className={style.button}>Volver</button>
            </>}
            {typeChart == 3 && <>
              {/* <h1>Cadena form</h1> */}
              <br></br>
              <div className={style.inputContainer}>
                <input name="mañana" onChange={handleFrioForm} className={style.input} placeholder=' '></input>
                <label className={style.textInput}>Mañana</label>
              </div>
              <div className={style.inputContainer}>
                <input name="tarde" onChange={handleFrioForm} className={style.input} placeholder=' '></input>
                <label className={style.textInput}>Tarde</label>
              </div>
              <br></br>
              <button onClick={() => {setCreator(false); createFrio()}} className={style.button}>Guardar</button>
              <button onClick={() => setCreator(false)} className={style.button}>Volver</button>
            </>}
          </div>
        }
      </div>
    </>
  )
};

export default Control