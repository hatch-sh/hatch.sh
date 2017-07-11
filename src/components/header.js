import React from 'react'

import logo from '../../static/images/hatch-200x240.png'

export default () =>
  <div style={{
    textAlign: 'center'
  }}>
    <h1
      style={{
        fontWeight: 900,
        fontSize: '2em',
        padding: '1em 1em 0 1em',
      }}
    >
      Hatch.
    </h1>
    <div style={{
      marginTop: '10px',
      marginLeft: '-5px'
    }}>
      <img src={logo} alt="Hatch logo"/>
    </div>
  </div>
