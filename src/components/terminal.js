import React from 'react'

const WindowButton = ({ theme }) => {
  const themeStyles = {
    close: {
      background: '#ee6a5f',
    },
    minimize: {
      background: '#f6be4f',
    },
    zoom: {
      background: '#60c655',
    },
  }[theme]

  return (
    <div
      style={{
        margin: '0px',
        marginRight: '9px',
        width: '12px',
        height: '12px',
        borderRadius: '7px',
        ...themeStyles,
      }}
    />
  )
}

const Output = ({ lines }) =>
  <div
    style={{
      background: 'black',
      borderRadius: '0px 0px 6px 6px',
      color: 'white',
      padding: '0 10px 20px 10px',
    }}
  >
    {lines}
  </div>

export const Prompt = ({ path, children }) =>
  <div>
    <span
      style={{
        padding: '0px 5px',
      }}
    >
      &gt;
    </span>
    {children}
  </div>

export const Line = ({ children }) =>
  <pre
    style={{
      margin: '0',
    }}
  >
    {children}
  </pre>

export const Terminal = ({ children }) => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '600px',
        borderRadius: '6px',
        background: 'rgba(0, 0, 0, 0)',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0 5px 30px',
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: '300',
        fontSize: '0.6em',
        lineHeight: '1.7em',
      }}
    >
      <header
        style={{
          padding: '12px',
          display: 'flex',
          borderRadius: '6px 6px 0px 0px',
          background: 'black',
        }}
      >
        <WindowButton theme="close" />
        <WindowButton theme="minimize" />
        <WindowButton theme="zoom" />
      </header>
      <Output lines={children} />
    </div>
  )
}
