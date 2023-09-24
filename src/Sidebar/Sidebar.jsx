import React, { useState, useEffect } from 'react';
import Row from './Row/Row';
import './sidebar.css';
import logo from './logo-prakruti.png';

export default function Sidebar() {
  const [activeRow, setActiveRow] = useState("Assessment");

  // Function to handle row click
  const handleRowClick = (text) => {
    setActiveRow(text);
  };

  useEffect(() => {
    // When the component loads, trigger the Assessment row click
    handleRowClick("Assessment");
  }, []);

  return (
    <div id='sidebar'>
      <div id='logo-container'>
        <img src={logo} alt="Logo" />
        <p>Prakruti</p>
      </div>
      <div className='lr lr-1'></div>
      <Row text={"Assessment"} isActive={activeRow === "Assessment"} onClick={handleRowClick} />
      <Row text={"Ask"} isActive={activeRow === "Ask"} onClick={handleRowClick} />
      <div className='lr lr-2'></div>
      <Row text={"Settings"} isActive={activeRow === "Settings"} onClick={handleRowClick} />
      <Row text={"Account"} isActive={activeRow === "Account"} onClick={handleRowClick} />
      <div id='team-name'>
        <p>Made with <span id='H'>❤</span> by Team<br></br>
          VedicVoyagers
        </p>
        <div id='line-with-diamonds'>
          <div id='diamond-1'></div>
          <div id='line'></div>
          <div id='diamond-2'></div>
        </div>
      </div>
    </div>
  );
}
