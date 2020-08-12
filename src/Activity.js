import React from 'react';

const Activity = ({ data }) => {
  return (
    <div>
      <div>
        <h1 id='heading'>{data.real_name}'s Activity</h1>
        <div id='full_description'>
          <p>ID: {data.id}</p>
          <p>TimeZone: {data.tz}</p>
          <div id="calendar"></div>
          {data.activity_periods.map((activity, index) => (
            <div key={index}>
              <p>
                Start Time: <strong>{activity.start_time}</strong>
              </p>
              <p>
                End Time: <strong>{activity.end_time}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
