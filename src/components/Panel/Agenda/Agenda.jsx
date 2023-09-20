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

const Agenda = ({fn, newDate, date}) => {

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
        id:d.id,
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
      onSelectEvent={(e) => fn(e.id)}
      style={{ height: 400, width: 650 }}
    />
    <button className={style.button} onClick={newDate}>Nuevo evento</button>
      </div>
    </>
  )
};

export default Agenda