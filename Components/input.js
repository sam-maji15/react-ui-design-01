import React, {Component} from 'react'
import Tools from '../tools.js'


let st_defInput = {
  height: Tools.btn_ht,
  width: '75vw',
  padding: '0 16px',
  border: Tools.border_thin_black,
  outline: 'none',
  borderRadius: '4px'
}

function DefaultInput(prop) {
  if (prop.style != undefined)
    st_defInput = Tools.setStyle(prop.custom_style, st_defInput)
  
  return (<input
    style={st_defInput}
    placeholder='Search' type='search'/>)
}


class Input extends Component {
  constructor(prop) {
    super()
    this.state = {
      style: prop.style,
      placeholder: (prop.placeholder != undefined) ? prop.placeholder: 'Search',
      
    }
  }
  
  
  render() {
    if (this.state.style == 'he')
    return (<div></div>)
    else return (
      <DefaultInput/>
      )
  }
}


export default Input