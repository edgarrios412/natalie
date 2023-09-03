import style from './Footer.module.css'
import {RiFacebookCircleLine} from "react-icons/ri"
import {FiPhoneCall, FiInstagram} from "react-icons/fi"
import {BsInstagram} from "react-icons/bs"
import {MdOutlineLocationOn} from "react-icons/md"
 
const Footer = () => {
  return(
    <footer className={style.footer}>
        <p className={style.david}>Copyrigth © 2023 Natalie Ariza</p>
        <div className={style.iconosPlus}>
            <RiFacebookCircleLine className={style.oneIcono}/>
            <FiInstagram className={style.oneIcono}/>
            <MdOutlineLocationOn className={style.oneIcono}/>
            <FiPhoneCall className={style.oneIcono}/>
        </div>
        <p className={style.creadorDavid}><a className={style.link} target="_blank" href='https://www.codeandcoffee.tech'>Powered by CodeandCoffee</a></p>
    </footer>
  )
};

export default Footer