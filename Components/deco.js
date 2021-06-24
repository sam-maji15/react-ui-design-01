import React from 'react'
import Tools from '../tools.js'

let divider_style = {
  height: '1px',
  width: '70vw',
  background: 'rgba(0,0,0,0.5)',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

function Divider(prop) {
  if (divider_style != undefined)
  divider_style = Tools.setStyle(prop.custom_style, divider_style)
  
  return (<div style={divider_style}></div>)
}

export default Divider