import React, { useEffect, useState } from 'react';
import Calendar from './Calendar';
import getDateInRequiredFormat from './date';
import './App.css';

const Activity = ({ data }) => {
  const [events, setEvents] = useState([]);
  const eventsArray = [];

  function getEvents() {
    const firstName = data.real_name.split(' ')[0];
    data.activity_periods.map((activity, index) => {
      const EventObj = {};
      EventObj['id'] = `${data.id}-${index}`;
      EventObj['title'] = `${firstName}'s Activity ${index + 1}`;
      EventObj['start'] = getDateInRequiredFormat(activity.start_time);
      EventObj['end'] = getDateInRequiredFormat(activity.end_time);
      return eventsArray.push(EventObj);
    });
    setEvents(eventsArray);
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <div>
        <h1 id='heading'>{data.real_name}'s Activity</h1>
        <div id='full_description'>
          <p>ID: {data.id}</p>
          <p>TimeZone: {data.tz}</p>
          <div id='calendar'>
            <Calendar events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
