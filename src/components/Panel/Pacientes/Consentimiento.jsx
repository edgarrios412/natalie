import CanvasDraw from "react-canvas-draw"
import style from "./Consentimiento.module.css"

const Consentimiento = ({ fn, paciente, firma}) => {

    return (
        <>
            <h1 onClick={fn}>Consentimientos</h1>
            <h3>{paciente?.name}</h3>
            <p className={style.consen}>INDICACIONES DE CUIDADOS PRE y POST-OPERATORIOS PARA PACIENTES ORTODONTICOS CON MINI IMPLANTES

                estimado paciente, como es de su conocimiento , para el exito de lis mini implantes, son necesarios algunos
                cuidados entre los cuales figuran:

                CUIDADOS OPERATORIOS

                *Tomar la medicacion antes del procedimiento, segun lo indicado.
                *Concurrir al consultorio con acompaÃ±ante.

                CUIDADOS POST-OPERATORIOS

                *Continuar con la medicaciÃ³n segÃºn receta del profesional.
                *Aplicar hilo en el are las primeras 24 horas.
                *Ingerir, durante este primer dia una dieta fria o helada
                *Evitar alimentos calientes o duros.
                *Evitar cualquier tipo de contacto al mini-implante (tirar o empujar el tornillo, forzar con la
                lengua entre otros).
                *ObservaciÃ³n: el ceplilado dental no es un traumatismo y debe realizarse.
                *Evitar esfuerzos fisicos excesivos (ejercicio, levantar peso, caminar al sol por 48 horas)
                *Seguir el protocolo de higlenizaciÃ³n.

                PROTOCOLO DE HIGIENIZACION

                +  CEPILLADO: HigenizaciÃ³n del Ã¡rea del mini-implante con cepillo de tamaÃ±o pequeÃ±o y
                cerdas suaves o ultra suaves (poliÃ©ster) para impedir la acumulaciÃ³n de alimentos.
                Â» PRIMERA SEMANA-APLICACIÃ“N DE GEL O BUCHES: Aplicar en el rea del mini- implante
                segÃºn la receta del profesional. Gel de clorhexidina al 0,2 % (DENTAGEL) dos veces por
                dÃ­a, por siete dÃ­as, o buches con soluciÃ³n de gluconato de clorhexidina al 0,12 % durante el
                mismo periodo (si no se dispone de gel).
                Â» DESPUES DE LA PRIMERA SEMANA, Luego de los siete dÃ­as, sustitulr el gel o los buches de
                clorhexidina por un antisÃ©ptico bucal (buches) convencional durante 30 segundos, tres
                veces por dÃ­a, durante todo el tratamiento:

                + CUIDADOS CONTINUOS: Mientras el mini-implante este instalado cepillarse los dientes
                con un cepillo pequeÃ±o de cerdas suaves, humedecido en sol
                clorhexidina (la misma utilizada para buches en la primera semana)

                Â» CONTROLES: Concurrir a las consultas de control, establecidas.</p>

            <p className={style.consen}>CONSENTIMIENTO INFORMADO DE ENDODONCIA

                Ciudad: ____________________ fecha : ______________ Yo: _____________ identificado con CC _____________
                actuando en nombre propio o como representante legal del menor de edad o persona con incapacidad mental para tomar
                decisiones cuyo nombre es: ________________con documento de identidad No. _________

                DECLARO QUE SE ME HA INFORMADO

                *Mi responsabilidad como usuario de asistir a las citas de revision o control programadas.
                * En caso de recibir anestesia, la recomendaciÃ³n de evitar morder el labio o carrillo de la(s) Ã¡rea(s) anestesiada(s).
                *Se requiere informar la odontÃ³logo, en caso de alergico(a) a algun medicamento o tenido antecedentes de alergias a la anestesia local
                *La necesidad de presentar InformaciÃ³n verÃ­dica y real sobre antecedentes al odontÃ³logo y cualquier cambio en el estado de la salud.


                ENDODONCIA: actividad que se busca del nervio afectado en el diente y la posterior preparaciÃ³n y selle del conducto o todo procedimiento
                o intervenciÃ³n que este relacionado con el nervio (pulpa) dental.


                RIESGOS Y/O COMPLICACIONES

                *Perforaciones dentales
                *Aumento o apariciÃ³n de lesiÃ³n en el hueso, que puede llegar o requerir cirugÃ­a apical.
                *Dolor post operatorio, apariciÃ³n de absceso o fÃ­stula, inflamaciÃ³n o edema.
                *Material de obturaciÃ³n sobrepasado hueso, no puede ser removido durante el procedimiento, puede llegar a necesitar cirugÃ­a apical.
                *Debilidad del diente con mayor riesgo de fractura que un diente vital.
                *InfecciÃ³n o dolor en caso de Interrumpir el tratamiento antes de finalizada la endodoncia.
                *Recidiva de reabsorciÃ³n interna o externa.
                *Fractura de instrumentos dentro del conducto.
                *Cambio de color en el diente.
                *IngestiÃ³n de materiales o instrumental durante el procedimiento.
                *Sub-extensiÃ³n de material de selle.
                *Sangrado, laceraciones o quemaduras en tejidos productos del instrumental o quimicos usados en el procedimiento.
                *LaceraciÃ³n de estructuras orales prÃ³ximas al diente (nervio, tejido blando, rostro).

                RECOMENDACIONES QUE LE APLICAN
                *En el tratamiento de endodoncia no dejar destapado a no ser que sea prescripciÃ³n del odontÃ³logo.
                *Realizar la restauraciÃ³n definitiva del diente tratado con endodoncia a mas tardar un mes despuÃ©s de terminado el tratamiento.
                *En tratamientos de endodoncia, no interrumpir el tratamiento y cumplir las citas hasta finalizar el tratamiento. </p>
                <p className={style.consen}>CONSENTIMIENTO INFORMADO PARA PACIENTES ORTODONTICOS CON MINI-IMPLANTES


NOMBRE Y APELLIDO DEL PROFESIONAL:______________

CONSULTORIO":____________________

Â¿Que son los mini-Implantes?
Los miniimplantes son pequeÃ±ostornillos de titanio que pueden ser empleados en el tratamiento ortodontico 
con el objetivo de apoyar en la base osea (maxilar o mandibula) las fuerzas necesarias para mover los dientes 


Ventajas del uso de estos dispositivos en su tratamiento: 
Cuando utilizamos, evitamos apoyar las fuerzas en los dientes que no queremos mover, lo que acelera el tratamiento  
y evita efects indeseados en estos dientes. Con los mini-implantes ampliamos las posibilidades de movimientos. 


Â¿Como se instalan los mini-mplantes? 
Luego de la planificaciÃ³n bucal por medio de un examen clÃ­nico, radiogrÃ¡fico/tomogrÃ¡fico, se selecciona el sitio de colocaciÃ³n. 
La InstalaciÃ³n del min implante es quirÃºrgica, por lo general, rÃ¡pida y con anestÃ©sta local.

Riesgos por el uso de mini-implantes:

1-Perdida del mini-mplante por falta de higienaciÃ³n de la zona por parte del paciente, por una calidad 
inadecuada de hueso en el sitio (no siem. determinar antes de la colocaciÃ³n) o por la fuerza aplicada. 

2-Necesidad de reposicionamiento del mini-implante en funciÃ³n del movimiento (para evitar el contacto 
de la raiz del diente en el movimiento)

3-Contacto del mini-mplante con la raÃ­z del diente en la instalacion (En caso puede ser necesario
reinstalar el mini-implante)

4-Fractura del mini-implante durante la instalaciÃ³n, el tratamiento o la remociÃ³n. En caso de fractura
del mintimplante, puede haber necesidad de un control radiogrÃ¡fico del dispositivo, mantener el fragmento o 
evaluar si es necesario extraerlo por medio de una cirugÃ­a),

5- Si se prevÃ© la apariciÃ³n de InflamaciÃ³n o dolor, puede estar indicado el uso de antinflamatorios o
analgÃ©sicos

6-Falta de firmeza del mini-implante y necesidad de ajustarlo o reposicionarlo nuevamente.

7-Aftas, inflamaciÃ³n en el sitio de la colocaciÃ³n, crecimiento de la mucosa que rodea al mini-implante o,
en casos mas raros, infecciones locales u Ã³seas (osteomielitis)

Â¿Usted sabia que el uso de mini-mplantes plantea riesgos?

()si (In

Certifico que he leÃ­do y comprendido la informaciÃ³n, el profesional ha discutido el tratamiento conmigo
y tuve la oportunidad de preguntarle todas mis dudas sobre los mini-implantes y sobre la InformaciÃ³n
contenida en el folleto explicativo. Estoy consciente de la necesidad de HigienizaciÃ³n correcta y de las
citas regulares para control y evaluaciÃ³n de los mini-Implantes, ademÃ¡s de reconocer que no hay
garantÃ­as de Ã©xito en el uso de los dispositivos, pues depende de la respuesta del organismo. Autorizo el
uso de mini-Implantes en el paciente citado a continuaciÃ³n. 
Si ( ) No ( )
Autorizo tambiÃ©n la utilizaciÃ³n de fotografÃ­as y radiografÃ­as en medios de divulgaciÃ³n cientÃ­fica y
publicaciones SI( )NO( ).

Nombre y apellido del paciente:              Edad:
Fecha: ______/______/________
Firma del paciente o responsable:_________________
</p>
                <p className={style.consen}>CONSENTIMIENTO INFORMADO DE OPERATORIA DENTAL

Ciudad: ____________________ fecha : ______________ Yo: _____________ identificado con CC _____________
actuando en nombre propio o como representante legal del menor de edad o persona con incapacidad mental para tomar
decisiones cuyo nombre es: ________________con documento de identidad No. _________

DECLARO QUE SE ME HA INFORMADO

*Mi responsabilidad como usuario de asistir a las citas de revision o control programadas. 
* En caso de recibir anestesia, la recomendaciÃ³n de evitar morder el labio o carrillo de la(s) Ã¡rea(s) anestesiada(s).
*Se requiere informar la odontÃ³logo, en caso de alergico(a) a algun medicamento o tenido antecedentes de alergias a la anestesia local
*La necesidad de presentar InformaciÃ³n verÃ­dica y real sobre antecedentes al odontÃ³logo y cualquier cambio en el estado de la salud. 


DECLARO QUE SE ME HA INFORMADO

*Mi responsabilidad como usuario de asistir a las citas de revision o control programadas. 
* En caso de recibir anestesia, la recomendaciÃ³n de evitar morder el labio o carrillo de la(s) Ã¡rea(s) anestesiada(s).
*Se requiere informar la odontÃ³logo, en caso de alergico(a) a algun medicamento o tenido antecedentes de alergias a la anestesia local
*La necesidad de presentar InformaciÃ³n verÃ­dica y real sobre antecedentes al odontÃ³logo y cualquier cambio en el estado de la salud. 


Operatoria: actividades realizadas en las superficies de los dientes que tiene como finalidad eliminar la caries o 
reconstruir superficies fracturada, incluye la eliminacionde las partes de la estructura dentaria o en su defecto la remodelaciÃ³n adecuada para recibir 
posteriormente los materiales restauradores. Dichos materiales pueden ser temporales o definitivos (calza o cemento temporal)

RIESGOS Y/O COMPLICACIONES

*Fractura de la restauraciÃ³n debido a su extensiÃ³n:
*Desalojo de la restauraciÃ³n debido a su extensiÃ³n y/o dificil retenciÃ³n
*Fractura de la estructura dental permanente cuando la perdida sea mayor al 65% o por debilidad de las paredes.
*Sensibilidad dental leve a cambios tÃ©rmicos (calor 0 frio) que disminuya con el tiempo
*Sangrado, laceraciones de tejidos orales con fresa o instrumentos utilizados en el procedimiento. 
*Posibilidad de requerir tratamiento endodontico y/o protÃ©sico posterior. 
*Cambio de color en la restauraciÃ³n. 
*IngestiÃ³n de materiales o instrumentos utilizados durante el procedimiento.

RECOMENDACIONES QUE APLICAN

*Acatar las instrucciones sobre tÃ©cnicas e implementos para mantener una higiene oral.
*No consumir alimentos durante las primeras dos horas
*No consumir alimentos duros o pegajosos las primeras 72 horas.
*Evitar golpes en los dientes.
*Tomar los medicamentos ordenados por el odontÃ³logo como esta en la prescripciÃ³n, si
ocurre reacciones (brotes, rasquiÃ±a, dolor estomacal)debe suspenderlos y consultar con el odontÃ³logo.
*Acudir al odontÃ³logo si presenta dolor agudo o fuerte.
</p>
                <p className={style.consen}>
Natalie Ariza

FORMULARIO DE CONSENTIMIENTO INFORMADO PARA ANESTESIA LOCAL

El Sr(a)________________  de ______aÃ±os de edad,
con cedula de ciudadanÃ­a No,____________ de con domicilio en la __________________ de ____________

El Sr(a) _________________ de _____aÃ±os de edad,  con cedula
de ciudadania No. ______________ de _________________ con domicilio  en la _______ de __________ en calidad de
acudiente de el Sr(a) _________________________________. 

***** todas las lineas de arriba que se autocompleten con los datos del paciente y si es menor de 18 aÃ±os que de la opcion del acudiente*****


DECLARO

Que el/la Dr. (a)_______________ *** Aqui el nombre del doctor que esta iniciando la sesion***** me ha
explicado que el tratamiento que voy a recibir Implica a administraciÃ³n de ANESTESIA LOCAL.

* El propÃ³sito principal de la anestesia es interrumpir transitoriamente la funciÃ³n
sensitiva con el fin de realizar el tratamiento sin dolor.

* Le enestesia consiste en proporcionar, mediante una inyecciÃ³n, sustancias que
provocan un bloqueo reversible de los impulsos nervioso, de tal manera que se
interrumpa transitoriamente la funciÃ³n sensitiva.

* El/la profesional me ha explicado que voy a tener la sensaciÃ³n de adormecimiento del
labio o de la cara, que normalmente van a desaparecer espontÃ¡neamente entre una y
cuatro horas, de acuerdo con la velocidad que mi organismo metabolice el anestÃ©sico,
durante este tiempo debo cuidarme de no morderme ni lastimarme, para no crear
lesiones traumÃ¡ticas por mordeduras ya que por el adormecimiento presente en los
tejidos puedo auto lastimarme sin darme cuenta. 

* TambiÃ©n me ha explicado que la administraciÃ³n de la anestesia puede provocar, en el
lugar o zona en que se administre la inyecciÃ³n, ulceraciÃ³n de la mucosa y dolor y con
menos frecuencia, limitaciones en el momento de apertura o cierre en la boca
(trismo) que puede requerir tratamiento ulterior, tambiÃ©n la anestesia puede provocar
Una baja en la presiÃ³n arterial o sensaciÃ³n de mareo Y en muy pocas ocasiones puede
provocar una parestesia prolongada (sensaciÃ³n de adormecimiento), que puede ir de
unos dÃ­as hasta varios meses, en caso de pincharse un nervio.

*Comprendo que, aunque segÃºn se me ha explicado, de mis antecedentes personales
no se deducen posibles alergias o hipersensibilidad al agente anestÃ©sico. La anestesia
puede provocar urticaria, dermatitis por contacto o generar, asma, edema
angioneurotico, que en caso extremos, puede fequerir tratamiento URGENTE ,

El/la profesional me ha explicado que de acuerdoa mis antecedentes personales



Aqui firman el paciente y el doctor!!</p>
                <p className={style.consen}>CONSENTIMIENTO INFORMADO PARA URGENCIAS ODONTOLOGICAS


Ciudad:__________________      fecha: _______________


Yo:___________________  identificado con  CC _______________ 
Actuando en nombre propio  o como represent legal del menor de edad o de la persona con
incapacidad mental para tomar decisiones cuyo nombre es: ___________________
con documento de identidad No_______________________.

DECLARO QUE SE ME HA INFORMADO

*Mi responsabilidad como usuario de asistir cumplidamente a las citas de remisiÃ³n y/o
control posteriores a la atencion de urgencias.

*En caso de requirir anestesia, la recomendaciones para evitar morderme el labio o
carrillo del (las) Ã¡reas(s) anestestada(s). 

*Solicitar cita en caso de presentarse signos o sÃ­ntomas posteriores a la realizaciÃ³n del
tratamiento.

*Necesidad de informar al odontÃ³logo, en caso de ser alÃ©rgico(a) a algÃºn medicamento o 
teniendo antecedentes de alergia a la anestesia local.

* La necesidad de presentar la informaciÃ³n verÃ­dica y real sobre antecedentes mÃ©dicos,
odontolÃ³gicos y cualquier cambio en el estado de la salud.

* Seguir recomendaciones pre quirÃºrgicas, suspensiÃ³n o tomas de medicamentos,
exÃ¡menes de laboratorio, dietas recomendadas etc. En caso de ser remitido a una
intervenciÃ³n quirÃºrgica o procedimiento programado posteriormente.

* - Asistir cumplidamente a las citas de control

ATENCION DE URGENCIAS

AtenciÃ³n de urgencias: atenciÃ³n clÃ­nica que requiere y recibe un paciente por presentar una
condiciÃ³n clÃ­nica aguda, o de apariciÃ³n sÃºbita, que no da espera a la consulta programada o
electiva como soluciÃ³n de procesos agudos, dolorosos, hemorrÃ¡gicos, traumÃ¡ticos o
infecciosos. En esta atenciÃ³n se brinda la soluciÃ³n preliminar del caso clÃ­nico sin practicar el
tratamiento definitivo, salvo cuando la condiciÃ³n clÃ­nica permite practicar el mismo.

Urgencia no accidental: entendido como la atenciÃ³n urgida por causa de un dolor, edema,
sangrado o situaciÃ³n que amerite atenciÃ³n inmediata, siendo eliminado el dolor o el factor
inicial del evento sin realizar tratamiento definitivo.

Urgencia accidental: entendida esta por la lesiÃ³n causada por un accidente sobre los tejidos
propios del paciente.

RIESGOS Y/O COMPLICACIONES

*Hemorragias, infecciÃ³n, alveoltis, edemas, perdida de la sensibilidad dental o de zonas
de cavidad oral y cara

*Fracturas Oseas, comunicaciÃ³n con seno, Paretesa, equimosis, rismos, ImitaciÃ³n de la apertura, fractura dental

*Desplazamiento de las piezas dentales al interior del tejido, laceracion de los tejidos. 

*IngestiÃ³n de piezas dentarias o de instrumentaria. </p>

<CanvasDraw
        // onChange={handleSave}
        lazyRadius={0}
        disabled
        // imgSrc={foto}
        brushRadius={1.5}
        hideInteenablePanAndZoom={true}
        ref={firma}
        brushColor="black"
        loadTimeOffset={0}
        style={{width:"400px", height:"180px", margin:"0 auto"}}
        />
        <button onClick={fn}>Volver</button>
        </>
    )
}

export default Consentimiento