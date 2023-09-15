import { useState } from 'react';
import style from './Financiero.module.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

 
const Financiero = () => {

  const [chartType, setChartType] = useState(3)

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
  return(
    <>
    <div className={style.financiero}>
      <h1 className={style.titleSection}>Financiero</h1>
      <select onChange={(e) => setChartType(e.target.value)} className={style.select}>
        <option value={1}>Diario</option>
        <option value={2}>Semanal</option>
        <option value={3} selected>Mensual</option>
        <option value={4}>Anual</option>
      </select>
        {chartType == 1 && <BarChart
        className={style.grafica}
        // style={{marginTop:"120px"}}
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
    </div>
    </>
  )
};

export default Financiero