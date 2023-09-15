import { useState } from 'react';
import style from './Control.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Control = () => {

  const [typeChart, setTypeChart] = useState(1)
  const [creator, setCreator] = useState(false)


  const data = [
    {
      name: '1',
      Mañana: 20,
      Tarde: 26,
    },
    {
      name: '2',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '3',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '4',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '5',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '6',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '7',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '8',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '9',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '10',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '11',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '12',
      Mañana: 17,
      Tarde: 30,
    }, {
      name: '13',
      Mañana: 17,
      Tarde: 30,
    }]

  return (
    <>
      <div className={style.control}>
        <select onChange={(e) => setTypeChart(e.target.value)} className={style.select}>
          <option value={1} selected>Temperatura</option>
          <option value={2}>Humedad</option>
          <option value={3}>Cadena de frio</option>
        </select>
        <button className={style.button} onClick={() => setCreator(true)}>Crear</button>
        { !creator ? <div>
          {typeChart == 1 && <div>
            <h4>Temperatura del mes en la mañana</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={data}
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
              <Area type="monotone" dataKey="Mañana" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            <h4>Temperatura del mes en la tarde</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={data}
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
              <Area type="monotone" dataKey="Tarde" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </div>}
          {typeChart == 2 && <div>
            <h4>Humedad del mes en la mañana</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={data}
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
              <Area type="monotone" dataKey="Mañana" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            <h4>Humedad del mes en la tarde</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={data}
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
              <Area type="monotone" dataKey="Tarde" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </div>}
          {typeChart == 3 && <div>
            <h4>Cadena de frio del mes en la mañana</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={data}
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
              <Area type="monotone" dataKey="Mañana" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            <h4>Cadena de frio del mes en la tarde</h4>
            <AreaChart
              className={style.chart}
              width={400}
              height={160}
              data={data}
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
              <Area type="monotone" dataKey="Tarde" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </div>}
        </div>:
        <div>
          {typeChart == 1 && <h1>Temperatura form</h1>}
          {typeChart == 2 && <h1>Humedad form</h1>}
          {typeChart == 3 && <h1>Cadena form</h1>}
        </div>
        }
      </div>
    </>
  )
};

export default Control