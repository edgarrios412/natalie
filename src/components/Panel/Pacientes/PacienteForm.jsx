import { useNavigate } from 'react-router-dom'
import style from './PacienteForm.module.css'

const PacienteForm = ({back}) => {

    return (
        <>
            <div className={style.clinicHistory}>
          <div className={style.column}>
              <button className={style.button} onClick={back}>Volver</button>
              <br></br>
                <br></br>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Cedula</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Nombre</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Edad</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Sexo</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Fecha de nacimiento</label>
          </div>
            {/* <button className={style.button} onClick={() => setEvolucion(true)}>Evolucion</button> */}
            {/* <br></br> */}
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
          <br></br>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Direccion</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Departamento</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Ciudad</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Celular</label>
          </div>
          <div className={style.inputContainer}>
            <input className={style.input} placeholder=' '></input>
            <label className={style.textInput}>Email</label>
          </div>
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
        </>
    )
}

export default PacienteForm