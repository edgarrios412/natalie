import style from './Pacientes.module.css'
import CanvasDraw from "react-canvas-draw";
import foto from "../../../assets/diagrama.jpg"
import documentos from "../../../assets/documentos.png"
import { useEffect, useRef, useState } from 'react';
 
const Pacientes = () => {
  const refCanva = useRef(null)

  // const [code, setCode] = useState()
  const [code, setCode] = useState()

  const pacientes = [
    {
      name:"Yina",
      lastname:"Garzon",
      cedula:"105823823",
      fecha:"02/04/55",
      ultipro:"1234",
      proxci:"mañana"
    },
    {
      name:"Edgar",
      lastname:"Vilchez",
      cedula:"105823823",
      fecha:"05/12/23",
      ultipro:"1234",
      proxci:"mañana"
    }
  ]

  useEffect(() => {
    if(code){
      refCanva?.current?.loadSaveData(code, false)
    }
  },[])

  const handleSave= () => {
    const data = refCanva.current.getSaveData()
    setCode(data)
    console.log(code)
  }

  const cargar= () => {
    refCanva.current.loadSaveData(code, false)
  }
 
  return(
    <>
      <div style={{marginLeft:"20vw", marginTop:"11vh"}}>
        {/* <h1>Pacientes</h1>
        <table>
          <tr>
          <td className={style.topTd}>Cedula</td>
          <td className={style.topTd}>Nombre y apellido</td>
          <td className={style.topTd}>Fecha</td>
          <td className={style.topTd}>Ultimo procedimiento</td>
          <td className={style.topTd}>Proxima cita</td>
          </tr>
          {pacientes?.map( u =>
          <tr>
          <td className={style.td}>{u.cedula}</td>
          <td className={style.td}>{u.name} {u.lastname}</td>
          <td className={style.td}>{u.fecha}</td>
          <td className={style.td}>{u.ultipro}</td>
          <td className={style.td}>{u.proxci}</td>
          </tr>)}
        </table> */}

        <div className={style.clinicHistory}>
          <div className={style.column}>
            <p><b>Cedula:</b> 1057565810</p>
            <p><b>Nombre:</b> Yina Garzon</p>
            <p><b>Edad:</b> 19 años</p>
            <p><b>Sexo:</b> Femenina</p>
            <p><b>Fecha nacimiento:</b> 16/03/2004</p>
            <br></br>
            <p>¿Le han practicado alguna intervención quirúrgica?<input type='checkbox'/></p>
            <p>Toma algún medicamento <input type='checkbox'/></p>
            <p>¿Esta usted bajo tratamiento medico??<input type='checkbox'/></p>
            <p>¿Ha recibido alguna transfusión de sangre?<input type='checkbox'/></p>
            <p><b>¿Sufre de tensión arterial?</b><input type='checkbox'/></p>
            <p>Alta<input type='checkbox'/></p>
            <p>Baja<input type='checkbox'/></p>
            <p>¿Sangra excesivamenteal cortase?<input type='checkbox'/></p>
            <b>¿Padece o padeció algún problema sanguíneo?<input type='checkbox'/></b>
            <p>Leucemia<input type='checkbox'/></p>
            <p>Anemia<input type='checkbox'/></p>
            <p>Hemofilio<input type='checkbox'/></p>
            <p>Deficit Vitaminico<input type='checkbox'/></p>

            
            <p>¿Ha tenido limitacion para abrir  o cerrar la boca?<input type='checkbox'/></p>
            <b>¿ha presentado reacción alérgica a alguno de estos medicamentos?</b>
            <p>Penicilina<input type='checkbox'/></p>
            <p>Anestesia<input type='checkbox'/></p>
            <p>Yodo<input type='checkbox'/></p>
            <p>Aspirina<input type='checkbox'/></p>

          </div>
          <div className={style.column}>
            <p><b>Direccion:</b> La gran cuadra</p>
            <p><b>Departamento:</b> Cundinamarca</p>
            <p><b>Ciudad:</b> Zipaquira</p>
            <p><b>Celular:</b> 377428742783</p>
            <p><b>Email:</b> yygm@gmail.com</p>
            <br></br>
            <p>¿Ha consumido o consume drogas?<input type='checkbox'/></p>
            <b>Sufre o ha sufrido de:</b>
            <p>Enfermedades venéreas<input type='checkbox'/></p>
            <p>Problemas de corazón<input type='checkbox'/></p>
            <p>Hepatitis<input type='checkbox'/></p>
            <p>Asma<input type='checkbox'/></p>
            <p>Diabetes<input type='checkbox'/></p>
            <p>Ulcera gástrica<input type='checkbox'/></p>
            <p>Tiroides<input type='checkbox'/></p>
            <p>¿Sufre de Herpes o altos recurrentes?<input type='checkbox'/></p>
            <b>¿Presenta alguno de los siguientes habitos?</b>
            <p>Morderse los labios o las uñas<input type='checkbox'/></p>
            <p>Fumar<input type='checkbox'/></p>
            <p>Consumir Alimentos cítricos<input type='checkbox'/></p>
            <p>Apretamiento dental<input type='checkbox'/></p>
            <p>Respiracion bucal<input type='checkbox'/></p>
            <p>¿Siente ruidos en la mandíbula al abrir o cerrar la boca?<input type='checkbox'/></p>
            <p>¿Es usted VIH +?<input type='checkbox'/></p>
            <p>¿Toma algun tratamiento retroviral?<input type='checkbox'/></p>
            <p>¿Esta usted embarazada?<input type='checkbox'/></p>
            <p>¿Esta tomando actualmente pastillas anticonceptivas?<input type='checkbox'/></p>
            </div>
        </div>
        <h3>Odontodiagrama</h3>
        <button onClick={handleSave}>Guardar</button>
        <button onClick={cargar}>Cargar</button>
        <CanvasDraw
        lazyRadius={0}
        imgSrc={foto}
        brushRadius={4}
        hideInteenablePanAndZoom={true}
        ref={refCanva}
        brushColor="black"
        loadTimeOffset={0}
        style={{width:"700px"}}
        />
        <div className={style.consentimientos}>
          <div>
          <h3>Diagnostico y plan de tratamiento</h3>
          <textarea className={style.textarea}/>
          </div>
          <div>
            <img src={documentos} className={style.imgIcon}/>
            <h4 className={style.texto}>Ver consentimientos</h4>
          </div>
        </div>
        <button>Guardar</button>
        <br></br>
      </div>
    </>
  )
};

export default Pacientes