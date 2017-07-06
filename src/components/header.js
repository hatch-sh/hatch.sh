import React from 'react'
import logo from '../../static/hatch-logo-400.png'

export const HatchName = () =>
  <h1
    style={{
      fontWeight: 900,
      textAlign: 'center',
      fontSize: '2em',
      padding: '1em',
    }}
  >
    Hatch.
  </h1>

export default () =>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div style={{ flexGrow: 1 }}>
      <HatchName />
      <h2
        style={{
          fontSize: '2.9rem',
          fontWeight: 'normal',
          lineHeight: '3.2rem',
          marginBottom: '1rem',
          marginTop: 0,
          paddingBottom: '1.5rem',
          textAlign: 'center',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>Easy</span> deployment of static websites to
        Amazon Web Services
      </h2>
    </div>
    <div style={{ flex: 1 }}>
      <img src={logo} alt="Hatch" width="200px" height="240px" />
    </div>
  </div>
