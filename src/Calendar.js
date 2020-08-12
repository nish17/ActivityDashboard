import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = ({ events }) => {
  console.log('inside calendar events', events);
  return (
    <div className='main-calendar'>
      {events.length > 0 && (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView='dayGridMonth'
          initialEvents={events}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          height='580px'
        />
      )}
    </div>
  );
};

export default Calendar;
