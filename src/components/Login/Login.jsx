import style from './Login.module.css'
import logo from "../../assets/logonata.jpeg"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  return(
    <div className={style.login}>
      <div className={style.loginContainer}>
        <img className={style.logo} src={logo}/>
        {/* <h1 className={style.title}>Iniciar sesion</h1> */}
        <div className={style.inputContainer}>
        <input className={style.input} placeholder=' '></input>
        <label className={style.textInput}>Usuario</label>
        </div>
        <div className={style.inputContainer}>
        <input className={style.input} placeholder=' '></input>
        <label className={style.textInput}>Contraseña</label>
        </div>
        <button className={style.button} onClick={() => navigate("/panel")}>Ingresar</button>
        <p className={style.olvidemipass}>Olvide mi contraseña</p>
        <p className={style.text}>¿Aun no tienes cuenta?</p>
        <p className={style.registro}>Registrate</p>
      </div>
    </div>
  )
};

export default Login