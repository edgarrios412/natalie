import style from './Financiero.module.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

 
const Financiero = () => {
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
    <div>
      <h1 className={style.titleSection}>Financiero</h1>
        <BarChart
        style={{marginTop:"120px"}}
          width={600}
          height={400}
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
        </BarChart>
    </div>
    </>
  )
};

export default Financiero