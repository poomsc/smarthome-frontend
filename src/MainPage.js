// import React, { useState, useEffect } from "react";
// import { fetcher } from "./services/fetcher";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThermometerHalf, faLightbulb, faWindowClose } from '@fortawesome/free-solid-svg-icons';
// import { Tooltip as ReactTooltip } from 'react-tooltip'


// export const MainPage = () => {
//   const [roomInfo, setRoomInfo] = useState();
//   useEffect(() => {
//     fetcher.roomInfo().then((res) => setRoomInfo(res));
//   }, []);
//   return (
   
// <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
//   {[
//     { id: 'smoke', label: 'Smoke level', value: roomInfo?.smoke.smokeLevel, icon: faThermometerHalf },
//     { id: 'temperature', label: 'Temperature', value: roomInfo?.temperature.temperature, icon: faThermometerHalf },
//     { id: 'room1', label: 'Room1 Light', value: roomInfo?.light.room1 ? 'ON' : 'OFF', icon: faLightbulb, bgOn: '#ffee58' },
//     { id: 'room2', label: 'Room2 Light', value: roomInfo?.light.room2 ? 'ON' : 'OFF', icon: faLightbulb, bgOn: '#ffee58' },
//     { id: 'room3', label: 'Room3 Light', value: roomInfo?.light.room3 ? 'ON' : 'OFF', icon: faLightbulb, bgOn: '#ffee58' },
//     { id: 'curtain', label: 'Curtain', value: roomInfo?.curtain.curtain ? 'ON' : 'OFF', icon: faWindowClose, bgOn: '#a5d6a7' },
//   ].map((item) => (
//     <div
//       key={item.id}
//       data-tip
//       data-for={item.id}
//       style={{
//         backgroundColor: item.bgOn && item.value === 'ON' ? item.bgOn : '#f0f0f0',
//         borderRadius: '10px',
//         padding: '20px',
//         margin: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         transition: 'all 0.3s ease',
//         cursor: 'pointer',
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = 'scale(1.05)';
//         e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = 'scale(1)';
//         e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
//       }}
//     >
//       <FontAwesomeIcon icon={item.icon} />
//       {' '}
//       {item.label}: {item.value}
//       <ReactTooltip id={item.id} place="top" effect="solid" backgroundColor="#555">
//         {item.label}
//       </ReactTooltip>
//     </div>
//   ))}
// </div>
//   );
// };

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faWindowMaximize, faThermometer, faSmog } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from "react";
import { fetcher } from "./services/fetcher";

const Card = ({ icon, title, value, color }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    backgroundColor: color,
    color: '#fff',
    marginBottom: '1rem',
    width: '200px'
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon icon={icon} style={{ marginRight: '0.5rem' }} />
      <span>{title}</span>
    </div>
    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
      {value}
    </div>
  </div>
);

export const MainPage = () => {

  const [roomInfo, setRoomInfo] = useState();
  useEffect(() => {
    fetcher.roomInfo().then((res) => setRoomInfo(res));
  }, []);

return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4'
  }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '1rem',
      padding: '1rem',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
      backgroundColor: '#fff'
    }}>
      <Card
        icon={faSmog}
        title="Smoke level"
        value={roomInfo?.smoke.smokeLevel}
        color="#ff9800"
      />
      <Card
        icon={faThermometer}
        title="Temperature"
        value={roomInfo?.temperature.temperature}
        color="#f44336"
      />
      <Card
        icon={faLightbulb}
        title="Room 1 Light"
        value={roomInfo?.light.room1 ? 'ON' : 'OFF'}
        color="#4caf50"
      />
      <Card
        icon={faLightbulb}
        title="Room 2 Light"
        value={roomInfo?.light.room2 ? 'ON' : 'OFF'}
        color="#2196f3"
      />
      <Card
        icon={faLightbulb}
        title="Room 3 Light"
        value={roomInfo?.light.room3 ? 'ON' : 'OFF'}
        color="#9c27b0"
      />
      <Card
        icon={faWindowMaximize}
        title="Curtain"
        value={roomInfo?.curtain.curtain ? 'OPEN' : 'CLOSED'}
        color="#607d8b"
      />
    </div>
  </div>
}
