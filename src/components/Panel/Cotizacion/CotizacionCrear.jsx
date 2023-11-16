// import style from './CotizacionCrear.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const data =
    [
        { value: 1000, label: 'Chocolate' },
        { value: 250, label: 'Strawberry' },
        { value: 290, label: 'Vanilla' }
    ]



const CotizacionCrear = ({volver}) => {
    const [pacientes, setPacientes] = useState()

    useEffect(() => {
        axios.get("/client/all").then(({ data }) => setPacientes(data))
    }, [])

    
    const [valor, setValor] = useState(0)
    const [proce, setProce] = useState(0)
    const [form, setForm] = useState()

    const calcValor = (array) => {
        var value = 0;
        array.forEach(element => {
            value = value + element.value
        });
        setProce(array)
        setValor(value)
    }
    
    const handleForm = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    } 

    const newCoti = () => {
        axios.post("/client/cotizacion", {...form, proced:proce}).then(() => volver())
    }

    return (
        <>
            <Select
                onChange={(e) => calcValor(e)}
                isMulti
                options={data}
            />
            Total: {valor}
            <input name="date" onChange={handleForm} type="date" />
            <select name="clientId" onChange={handleForm}>
                <option value={null}>Seleccionar</option>
                {pacientes?.map(p => <option value={`${p.id}`}>{p.name}</option>)}
            </select>
            <button onClick={newCoti}>Crear</button>
        </>
    )
}

export default CotizacionCrear