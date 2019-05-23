import React, { Component } from 'react'
import './Assets/App.css'
import Navigation from './Components/Navigation'
import Chat from './Components/Chat'
import MemoryGame from './Components/MemoryGame'
import MyApp from './Components/MyApp'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chat: '',
      chatOpened: true,
      memoryGame: '',
      memoryGameOpened: true,
      myApp: '',
      myAppOpened: true,
      chatWindowArray: [],
      memoryWindowArray: [],
      myAppWindowArray: [],
      z: 10,
      temp: 1
    }
  }

  /** Open Chat Component */
  openChat () {
    let id = Math.floor(Math.random() * 1000000 - 1 + 5) /* Randomize id */
    let array = <Chat id={id} close={this.closeApp.bind(this, id)} /* Chat has unique id. Easier closing of correct chat with unique id. Easier focus */
      focus={this.windowFocus.bind(this, id)} />

    this.setState({
      chatWindowArray: [...this.state.chatWindowArray, array] /* Spread Operator */
    })
  }

  /* Open MemoryGame Component */
  openMemoryGame () {
    let myid = this.state.temp
    let id = Math.floor(Math.random() * 1000000 - 1 + 5)
    let array = <MemoryGame myid={myid} id={id} close={this.closeApp.bind(this, id)}
      focus={this.windowFocus.bind(this, id)} />
    this.setState({
      memoryWindowArray: [...this.state.memoryWindowArray, array],
      temp: this.state.temp + 1
    })
  }

  /* Open MyApp Component */
  openMyApp () {
    let id = Math.floor(Math.random() * 1000000 - 1 + 5)
    let array = <MyApp id={id} close={this.closeApp.bind(this, id)}
      focus={this.windowFocus.bind(this, id)} />

    this.setState({
      myAppWindowArray: [...this.state.myAppWindowArray, array]
    })
  }

  /* Close for all three components */
  closeApp (cid, event) {
    let temp = cid.toString() /* Get unique id */
    var apps = document.body.getElementsByTagName('*')
    for (let i = 0; i < apps.length; i++) { /* Iterate through all tags */
      if (apps[i].id === temp) { /* If unique id matches the tag id */
        document.getElementById(temp).remove() /* Close window */
      }
    }
  }

  /* Focus for all three components */
  windowFocus (id) {
    this.setState({
      // eslint-disable-next-line
      z: ++this.state.z /* z-index used for depth, changing focus */
    })
    let z = this.state.z
    if (document.getElementById(id) !== null) {
      document.getElementById(id).setAttribute('style', document.getElementById(id).getAttribute('style') + ' z-index: ' + z + ';') /* Increasing depth by 1 in css */
    }
  }

  render () {
    let chatW = this.state.chatWindowArray.length > 0 ? this.state.chatWindowArray.map((cw, i) => <div key={i}> {cw} </div>) : null
    let memoryW = this.state.memoryWindowArray.length > 0 ? this.state.memoryWindowArray.map((cw, i) => <div key={i}> {cw} </div>) : null
    let myAppW = this.state.myAppWindowArray.length > 0 ? this.state.myAppWindowArray.map((cw, i) => <div key={i}> {cw} </div>) : null
    return (
      <div className='App'>
        <Navigation chatClicked={this.openChat.bind(this)}
          memoryGameClicked={this.openMemoryGame.bind(this)}
          myAppClicked={this.openMyApp.bind(this)} />
        {chatW}
        {memoryW}
        {myAppW}
      </div>
    )
  }
}

export default App
