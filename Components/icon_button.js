import React, {Component} from 'react'
import Tools from '../tools.js'

class IconButton extends Component {
  constructor(prop) {
    super()
    this.state = {
      isMenuOpen: false,
      id: prop.id
    }
  }
  
  render() {
    if (this.state.style === 'heh')
    return (<div></div>)
    
    else return (<DefaultIconButton id={this.state.id} />)
  }
}


let st_defBtn = {
  background: 'none',
  border: 'none',
  height: Tools.btn_ht,
  width: Tools.btn_ht,
  position: 'absolute',
  right: Tools.def_inner_paddding,
  top: Tools.def_inner_paddding
}

let st_defIcon = {
  fontSize: '20px'
}

function DefaultIconButton(prop) {
  return (<button id={prop.id} style={st_defBtn}><i style={st_defIcon} className='fa fa-bars'></i></button>)
}

export default IconButton