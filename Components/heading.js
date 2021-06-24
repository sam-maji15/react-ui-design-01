import React, {Component} from 'react'
import Tools from '../tools.js'


let st_defHead= {
  marginBottom: '16px'
}




function DefaultHeading(prop) {
  
  st_defHead = (typeof prop.custom_style === 'undefined') ? Tools.setStyle(prop.custom_style, st_defHead) : st_defHead
  
  return (<h2 style={st_defHead}>{prop.text}</h2>)
}

class Heading extends Component {
  constructor(prop) {
    super();
    this.state = {
      style: prop.style,
      text: (prop.text == undefined)? "undef" : prop.text,
      custom_style: prop.custom_style
    }
  }
  
  render() {
  if (this.state.style == 'whs')
    return (<h2></h2>)
  else return (<DefaultHeading
    text={this.state.text}
    custom_style={this.state.custom_style}/>)
  }
}

export default Heading