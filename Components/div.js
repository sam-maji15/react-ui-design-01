import React, {Component} from 'react'
import Tools from '../tools.js'

function FlexDiv(prop) {
  let style1 = {
    width: '100vw',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }  
  style1 = (typeof prop.custom_style !== 'undefined')? Tools.setStyle(prop.custom_style, style1) : style1
  
  return (
    <div style={style1}>{prop.child}</div>)
}

export default FlexDiv
