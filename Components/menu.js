import React, {Component} from 'react'
import Tools from '../tools.js'

const menu_data = [
  {
    name: 'Home',
    iconClass: 'fa fa-home',
    key: 0
  },
  {
     name: 'Explore',
     iconClass: 'fa fa-link',
     key: 1
  },
  {
    name: 'Search',
    iconClass: 'fa fa-search',
    key: 2
  }]


let st_defMenuItem = {
  height: '40px',
  wiidth: '100%',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '16px',
  paddingRight: '16px'
}

function MenuItem(prop) {
  return (<div style={st_defMenuItem}>
  <i className={prop.icon_class_name}></i>
  <a href='#'>{prop.text}</a>
  </div>)
}

let st_defMenu = {
  background: 'whitesmoke',
  position: 'absolute',
  top: 0,
  left: 0,
  minWidth: '70vw',
  width: 'fit-content',
  height: '100vh',
  transform: 'translateX(-100%)',
  transitionDuration: '0.5s'
}

class Menu extends Component {
  constructor(prop) {
    super()
    this.state = {
      className: prop.className,
      custom_style: (typeof prop.custom_style !== 'undefined') ? Tools.setStyle(prop.custom_style, st_defMenu): st_defMenu
    }
  }
  
  render() {
    const menuItem = menu_data.map(item => <li key={item.key}><MenuItem icon_class_name={item.iconClass} text={item.name}/></li>)
    
    return (
    <div className={this.state.className} style={this.state.custom_style}>
    <ul style={{marginTop: 16}}>
    {menuItem}
    </ul>
    </div>
      )
  }
}

export default Menu