import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Heading from './Components/heading.js'
import Tools from './tools.js'
import Input from './Components/input.js'
import FlexDiv from './Components/div.js'
import Divider from './Components/deco.js'
import IconButton from './Components/icon_button.js'
import Menu from './Components/menu.js'

let style_flex = {
  height: '30vh',
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'column',
  paddingLeft: '7.5vw',
}

function TopBar() {
  return (
  <div>
  <div style={style_flex}>
    <Heading text = 'TieTail'
      style='default'/>
    <IconButton id='btn-open-menu'/>
    <p>{Tools.lorem_ipsum}</p>
  </div>
    <FlexDiv
      custom_style={{height: '10vh'}}
      child={<Input/>}/>
    <Divider custom_style={{marginTop: '30px', width: '40px'}} />
  </div>
    )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      isMenuOpen: true
    }
  }
  
  changeState = (value) => {
    this.setState({isMenuOpen: value})
  }
  
  componentDidMount() {
    let btn_open_menu = document.getElementById('btn-open-menu')
    btn_open_menu.onclick = () => {
      if (this.state.isMenuOpen) {
        // open menu
        $('.menu-main').css('transform', 'translateX(0%)')
        this.state.isMenuOpen = false
      } else {
        // close menu
        $('.menu-main').css('transform', 'translateX(-100%)')
        this.state.isMenuOpen = true
      }
    }
  }
  
  render() {
    return(
      <div>
      <Menu className='menu-main'/>
      <TopBar/>
      </div>
      )
  }
}


const root = document.getElementById('react-app');
ReactDOM.render(<App/>, root);