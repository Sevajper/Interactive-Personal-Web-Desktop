import React from 'react'
import Draggable from 'react-draggable'

class Chat extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      usernameEntered: false,
      checkUser: false,
      message: '',
      previousMessages: [],
      serverConnected: false,
      messageSent: false,
      currentMessage: '',
      server: new window.WebSocket('ws://vhost3.lnu.se:20080/socket/'),
      true: true
    }
  }

  /** Executed the moment the chat opens */
  componentDidMount () {
    try {
      // eslint-disable-next-line
      this.state.server.onopen = () => {
        console.log('Server connection established')
      }
      // eslint-disable-next-line
      this.state.server.onerror = error => {
        console.log(error)
      }
      // eslint-disable-next-line
      this.state.server.onmessage = response => {
        let msg = JSON.parse(response.data)
        if (msg.type !== 'heartbeat' && msg.username !== 'The Server') {
          this.setState(previousState => ({
            previousMessages: [...previousState.previousMessages, msg]
          }))
          this.setState({
            serverConnected: true
          })
        }
      }
    } catch (err) {
      console.log('Server error')
    }
  }
  /** Setting Username */
  clickConfirmUser () {
    window.localStorage.setItem('Username', this.state.username)
    this.setState({
      usernameEntered: true
    })
  }
  /** Checking if username already exists */
  checkUsername () {
    if (window.localStorage.getItem('Username') !== null) {
      this.setState({
        usernameEntered: true,
        checkUser: true
      })
      this.setState({
        username: window.localStorage.getItem('Username')
      })
    }
  }
  /** Save the username */
  saveUsername (event) {
    this.setState({
      username: event.target.value
    })
  }
  /** Send a message to the server */
  clickSendMessage () {
    let promise = new Promise(resolve => {
      resolve(
        this.setState({
          messageSent: true,
          currentMessage: this.state.message
        })
      )
    })

    promise.then(() =>
      this.state.server.send(
        JSON.stringify({
          type: 'message',
          data: this.state.currentMessage,
          username: window.localStorage.getItem('Username'),
          key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
        })
      )
    )

    let messageArea = document.getElementById('UserMessageArea')
    messageArea.value = ''

    this.setState({
      message: ''
    })
  }
  /** Take the message from the textarea */
  takeMessage (event) {
    this.setState({
      message: event.target.value
    })
  }
  /** Change the local storage username */
  changeUsername () {
    var temp = document.getElementById('ChangeUser').value
    if (temp === '') {
      temp = 'default'
    }
    window.localStorage.removeItem('Username')
    window.localStorage.setItem('Username', temp)
  }
  /** Press enter to submit message */
  enterSubmit () {
    document.getElementById('UserMessageArea').onkeydown = function (e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault()
        document.getElementById('SendMessageButton').click()
      }
    }
  }

  render () {
    return (
      <Draggable enableUserSelectHack={false} >
        <div className='DragContainer' id={this.props.id} onClick={this.props.focus}>
          <div className='Chat' id='Chat'>
            <div id='TopLeftImageChatDiv' />
            <button id='CloseButton' onClick={this.props.close} />
            {this.state.checkUser === false && <div className='CheckUserContainer'>
              {this.checkUsername()}
            </div>}
            <div id='Chaterino'>
              <h2 id='ChatTitle'>Chaterino</h2>
            </div>
            {this.state.usernameEntered && <div id='MessageContainer'>
              {this.state.previousMessages.map((msg, i) =>
                <span className='UserClassTyping' key={i}> {msg.username === this.state.username && <span id='UserChange' onClick={this.changeUsername.bind(this)}> {msg.username} </span>}
                  {msg.username !== this.state.username && <span> {msg.username}</span>} : {msg.data} <br />
                </span>)}
            </div>}
            {!this.state.usernameEntered && <div className='UsernameForms'>
              <input type='text' id='UserText' placeholder='Enter your name' onChange={this.saveUsername.bind(this)} />
              <button title='Confirm' id='ConfirmUserButton' onClick={this.clickConfirmUser.bind(this)}>Confirm</button>
            </div>}
            {this.state.usernameEntered && <div className='UserMessageForms'>
              <textarea type='submit' id='UserMessageArea' placeholder='Enter your message' onClick={this.enterSubmit.bind(this)} onChange={this.takeMessage.bind(this)} />
              <label id='UserLabel'>Name</label>
              <textarea draggable='false' type='text' id='ChangeUser' placeholder='Username' defaultValue={this.state.username} onChange={this.changeUsername.bind(this)} />
              <button title='Send' id='SendMessageButton' onClick={this.state.message !== '' ? this.clickSendMessage.bind(this) : undefined}>Send</button>
            </div>}
          </div>
        </div>
      </Draggable>
    )
  }
}

export default Chat
