import { useRef } from 'react'
import style from './Pacientes.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import CanvasDraw from "react-canvas-draw";
import foto from "../../../assets/diagrama.jpg"
import documentos from "../../../assets/documentos.png"
import { HexColorPicker } from 'react-colorful';
import axios from "axios"

const PacienteDetail = ({pacienteId, back}) => {


    const [paciente, setPaciente] = useState()
    const refCanvaFirm = useRef(null)

    const [color, setColor] = useState("#aabbcc");

    useEffect(() => {
      axios.get("/client/"+pacienteId)
      .then(({data}) => {setPaciente(data); console.log(data); setTimeout(() => refCanvaFirm.current.loadSaveData(data.firma,true),1000)})
      },[])
  


      const [evolucion, setEvolucion] = useState(false)
      const [nuevaEvolucion, setNuevaEvolucion] = useState(false)
    return (
        <>
        { !evolucion ? <div className={style.detailPaciente}>
          <br></br>
          <br></br>
        <button className={style.button} onClick={back}>Volver</button>
            <div className={style.clinicHistory}>
          <div className={style.column}>
            <p><b>Cedula:</b> {paciente ? paciente.cedula : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <p><b>Nombres:</b> {paciente ? paciente.name : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <p><b>Edad:</b> {paciente ? paciente.edad : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <p><b>Sexo:</b> {paciente ? paciente.sexo : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <p><b>Fecha nacimiento:</b> {paciente ? paciente.nacimiento : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <button className={style.button} onClick={() => setEvolucion(true)}>Evolucion</button>
            <br></br>
            <p>¿Le han practicado alguna intervención quirúrgica?<input checked={paciente?.form[0]} type='checkbox'/></p>
            <p>Toma algún medicamento <input checked={paciente?.form[1]} type='checkbox'/></p>
            <p>¿Esta usted bajo tratamiento medico??<input checked={paciente?.form[2]} type='checkbox'/></p>
            <p>¿Ha recibido alguna transfusión de sangre?<input checked={paciente?.form[3]} type='checkbox'/></p>
            <p><b>¿Sufre de tensión arterial?</b><input checked={paciente?.form[4]} type='checkbox'/></p>
            <p>Alta<input checked={paciente?.form[5]} type='checkbox'/></p>
            <p>Baja<input checked={paciente?.form[6]} type='checkbox'/></p>
            <p>¿Sangra excesivamenteal cortase?<input checked={paciente?.form[7]} type='checkbox'/></p>
            <b>¿Padece o padeció algún problema sanguíneo?<input checked={paciente?.form[8]} type='checkbox'/></b>
            <p>Leucemia<input checked={paciente?.form[9]} type='checkbox'/></p>
            <p>Anemia<input checked={paciente?.form[10]} type='checkbox'/></p>
            <p>Hemofilio<input checked={paciente?.form[11]} type='checkbox'/></p>
            <p>Deficit Vitaminico<input checked={paciente?.form[12]} type='checkbox'/></p>
            
            <p>¿Ha tenido limitacion para abrir  o cerrar la boca?<input checked={paciente?.form[13]} type='checkbox'/></p>
            <b>¿ha presentado reacción alérgica a alguno de estos medicamentos?</b>
            <p>Penicilina<input checked={paciente?.form[14]} type='checkbox'/></p>
            <p>Anestesia<input checked={paciente?.form[15]} type='checkbox'/></p>
            <p>Yodo<input checked={paciente?.form[16]} type='checkbox'/></p>
            <p>Aspirina<input checked={paciente?.form[17]} type='checkbox'/></p>

          </div>
          <div className={style.column}>
            <p><b>Direccion:</b> {paciente ? paciente.direccion : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <p><b>Departamento:</b> {paciente ? paciente.departamento : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <p><b>Ciudad:</b> {paciente ? paciente.ciudad : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <p><b>Celular:</b> {paciente ? paciente.celular : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <p><b>Email:</b> {paciente ? paciente.email : <span style={{color:"grey"}}>Cargando..</span>}</p>
            <br></br>
            <p>¿Ha consumido o consume drogas?<input checked={paciente?.form[18]} type='checkbox'/></p>
            <b>Sufre o ha sufrido de:</b>
            <p>Enfermedades venéreas<input checked={paciente?.form[19]} type='checkbox'/></p>
            <p>Problemas de corazón<input checked={paciente?.form[20]} type='checkbox'/></p>
            <p>Hepatitis<input checked={paciente?.form[21]} type='checkbox'/></p>
            <p>Asma<input checked={paciente?.form[22]} type='checkbox'/></p>
            <p>Diabetes<input checked={paciente?.form[23]} type='checkbox'/></p>
            <p>Ulcera gástrica<input checked={paciente?.form[24]} type='checkbox'/></p>
            <p>Tiroides<input checked={paciente?.form[25]} type='checkbox'/></p>
            <p>¿Sufre de Herpes o altos recurrentes?<input checked={paciente?.form[26]} type='checkbox'/></p>
            <b>¿Presenta alguno de los siguientes habitos?</b>
            <p>Morderse los labios o las uñas<input checked={paciente?.form[27]} type='checkbox'/></p>
            <p>Fumar<input checked={paciente?.form[28]} type='checkbox'/></p>
            <p>Consumir Alimentos cítricos<input checked={paciente?.form[29]} type='checkbox'/></p>
            <p>Apretamiento dental<input checked={paciente?.form[30]} type='checkbox'/></p>
            <p>Respiracion bucal<input checked={paciente?.form[31]} type='checkbox'/></p>
            <p>¿Siente ruidos en la mandíbula al abrir o cerrar la boca?<input checked={paciente?.form[32]} type='checkbox'/></p>
            <p>¿Es usted VIH +?<input checked={paciente?.form[33]} type='checkbox'/></p>
            <p>¿Toma algun tratamiento retroviral?<input checked={paciente?.form[34]} type='checkbox'/></p>
            <p>¿Esta usted embarazada?<input checked={paciente?.form[35]} type='checkbox'/></p>
            <p>¿Esta tomando actualmente pastillas anticonceptivas?<input checked={paciente?.form[36]} type='checkbox'/></p>
            </div>
        </div>
        <h3>Odontodiagrama</h3>
        {/* <button onClick={handleSave}>Guardar</button>
        <button onClick={cargar}>Cargar</button> */}
        <HexColorPicker color={color} onChange={setColor} style={{margin:"50px auto"}}/>
        <CanvasDraw
        // onChange={handleSave}
        lazyRadius={0}
        imgSrc={foto}
        brushRadius={4}
        hideInteenablePanAndZoom={true}
        
        brushColor={color}
        loadTimeOffset={0}
        style={{width:"700px", margin:"0 auto"}}
        />
        <div className={style.consentimientos}>
          <div>
          <h3>Diagnostico y plan de tratamiento</h3>
          <textarea className={style.textarea}/>
          <h4 className={style.textFe}>Doy fe que la información suministrada es verídica y autorizo a la Dra. Natalie Ariza y su equipo de trabajo a realizar los tratamientos pertinentes</h4>
          <CanvasDraw
        // onChange={handleSave}
        lazyRadius={0}
        disabled
        // imgSrc={foto}
        brushRadius={1.5}
        hideInteenablePanAndZoom={true}
        ref={refCanvaFirm}
        brushColor="black"
        loadTimeOffset={0}
        style={{width:"400px", height:"180px", margin:"0 auto"}}
        />
          </div>
          <div onClick={() => alert("Aca debes mostrar los consentimientos")}>
            <br></br>
            <img src={documentos} className={style.imgIcon}/>
            <h4 className={style.texto}>Ver consentimientos</h4>
          </div>
        </div>
        <br></br>
        <button className={style.button} onClick={back}>Guardar</button>
        </div>
        :
        <div>
        {!nuevaEvolucion ? 
        <div>
        <h1 onClick={() => setEvolucion(false)}>Evolucion</h1>
        <table className={style.evolucion}>
          <tr>
          <td className={style.topTd}>Fecha</td>
          <td className={style.topTd}>Hora</td>
          <td className={style.topTd}>Evolucion</td>
          <td className={style.topTd}>Abono</td>
          <td className={style.topTd}>Firma</td>
          <td className={style.topTd}>Prueba esterilizacion</td>
          </tr>
          <tr>
          <td className={style.td}>12/04/23</td>
          <td className={style.td}>9:30 am</td>
          <td className={style.td}>Al paciente se le realizo una tomografia intraversal</td>
          <td className={style.td}>$96.000</td>
          <td className={style.td}>FIRMA</td>
          <td className={style.td}><button className={style.button} onClick={() => alert("Mostrar prueba de esterilizacion")}>Ver</button></td>
          </tr>
        </table>
        <br></br>
        <div className={style.buttons}>
        <button className={style.button} onClick={() => setNuevaEvolucion(true)}>Agregar</button>
        <button className={style.button} onClick={() => setEvolucion(false)}>Volver</button>
        </div>
        </div>
        :   
            <div className={style.form}>
                <h1 onClick={() => setNuevaEvolucion(false)}>Nueva evolucion</h1>
                <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Fecha</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Hora</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Evolucion</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Abono</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Prueba</label>
          </div>
          <input type="file" style={{width:"200px"}}></input>
          <br></br><br></br>
          
          <div className={style.buttons}>
          <button className={style.button} onClick={() => setNuevaEvolucion(false)}>Guardar</button>
          <button className={style.button} onClick={() => setNuevaEvolucion(false)}>Volver</button>
          </div>
            </div>
            }
        </div>
        }
        </>
    )
}

export default PacienteDetail