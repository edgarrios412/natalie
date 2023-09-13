import style from './Control.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Control = () => {

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
    },{
      name: '3',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '4',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '5',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '6',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '7',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '8',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '9',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '10',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '11',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '12',
      Mañana: 17,
      Tarde: 30,
    },{
      name: '13',
      Mañana: 17,
      Tarde: 30,
    }]

  return(
    <>
      <div style={{marginLeft:"20vw", marginTop:"11vh"}}>
        <h1>Control</h1>
        <h4>Temperatura del mes en la mañana</h4>
        <AreaChart
            width={500}
            height={200}
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
            width={500}
            height={200}
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
      </div>
    </>
  )
};

export default Control