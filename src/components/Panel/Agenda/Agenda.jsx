import style from './Agenda.module.css'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/es";
import dayjs from 'dayjs'
import { useState } from 'react';

dayjs.locale("es");
dayjs.extend(localizedFormat);
const localizer = dayjsLocalizer(dayjs)

const Agenda = () => {

  const [date, setDate] = useState([{
    title:"Hola",
    start:new Date(),
    end:new Date(),
    resourceId:1,
  }])

  const formats = {
    timeGutterFormat: (date, culture, localizer) =>
      localizer.format(date, "h:mm A", culture), // Formato de 12 horas AM-PM
    eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
      `${localizer.format(start, "h:mm A", culture)} - ${localizer.format(
        end,
        "h:mm A",
        culture
      )}`, // Formato de 12 horas AM-PM para eventos
  };

  return(
    <>
      <div className={style.agenda}>
        <h1>Agenda</h1>
        <Calendar
        className={style.calendario}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          noEventsInRange: "No hay eventos en el rango de fecha seleccionado",
          showMore: function showMore(total) {
            return "+".concat(total, " mas");
          }
        }}
      localizer={localizer}
      events={date?.map(d => {
        return{
        title:d.title,
        start:d.start,
        end:d.end,
        resourceId:d.resourceId,
        color:"grey"
        }
    })}
      startAccessor="start"
      endAccessor="end"
      formats={formats}
      style={{ height: 400, width: 650 }}
    />
      </div>
    </>
  )
};

export default Agenda