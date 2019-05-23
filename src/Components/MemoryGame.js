import React from 'react'
import Draggable from 'react-draggable'

class MemoryGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      gameStarted: false,
      chekaroniMakaroni: false,
      gameCounter: 1,
      gamePlayable: false,
      buttonArray: [],
      gameChecker: 0,
      /* Buttons as props in order to shuffle them in an array */
      button1: (
        <button
          onClick={this.checkAnswer.bind(this, 1, this.props.myid)}
          className='MemoryButton1'
          myid={this.props.myid}
        />
      ),
      button2: (
        <button
          onClick={this.checkAnswer.bind(this, 2, this.props.myid)}
          className='MemoryButton2'
          myid={this.props.myid}
        />
      ),
      button3: (
        <button
          onClick={this.checkAnswer.bind(this, 3, this.props.myid)}
          className='MemoryButton3'
          myid={this.props.myid}
        />
      ),
      button4: (
        <button
          onClick={this.checkAnswer.bind(this, 4, this.props.myid)}
          className='MemoryButton4'
          myid={this.props.myid}
        />
      ),
      button5: (
        <button
          onClick={this.checkAnswer.bind(this, 5, this.props.myid)}
          className='MemoryButton5'
          myid={this.props.myid}
        />
      ),
      button6: (
        <button
          onClick={this.checkAnswer.bind(this, 6, this.props.myid)}
          className='MemoryButton6'
          myid={this.props.myid}
        />
      ),
      button7: (
        <button
          onClick={this.checkAnswer.bind(this, 7, this.props.myid)}
          className='MemoryButton7'
          myid={this.props.myid}
        />
      ),
      button8: (
        <button
          onClick={this.checkAnswer.bind(this, 8, this.props.myid)}
          className='MemoryButton8'
          myid={this.props.myid}
        />
      ),
      button9: (
        <button
          onClick={this.checkAnswer.bind(this, 9, this.props.myid)}
          className='MemoryButton9'
          myid={this.props.myid}
        />
      )

    }
  }
  /** Executed the moment the chat opens */
  componentDidMount () {
    let btnArray = []
    btnArray.push(
      this.state.button1,
      this.state.button2,
      this.state.button3,
      this.state.button4,
      this.state.button5,
      this.state.button6,
      this.state.button7,
      this.state.button8,
      this.state.button9
    )

    btnArray.sort(() => Math.random() - 0.5)

    this.setState({
      buttonArray: btnArray,
      gameChecker: this.state.gameChecker + 1
    })
  }
  /** Executed after updating occurs, keyboard memorygame accessibility */
  componentDidUpdate (e) {
    if (this.state.chekaroniMakaroni === false) {
      window.document.querySelector('#oneone').childNodes[0].focus()
      this.setState({
        chekaroniMakaroni: true
      })
    }

    if (e.key === 'ArrowRight') {
      if (window.document.activeElement.parentNode.id === 'oneone') {
        window.document.querySelector('#onetwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'onetwo') {
        window.document.querySelector('#onethree').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twoone') {
        window.document.querySelector('#twotwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twotwo') {
        window.document.querySelector('#twothree').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'threeone') {
        window.document.querySelector('#threetwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'threetwo') {
        window.document.querySelector('#threethree').childNodes[0].focus()
      }
    } else if (e.key === 'ArrowLeft') {
      if (window.document.activeElement.parentNode.id === 'onethree') {
        window.document.querySelector('#onetwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'onetwo') {
        window.document.querySelector('#oneone').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twothree') {
        window.document.querySelector('#twotwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twotwo') {
        window.document.querySelector('#twoone').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'threethree') {
        window.document.querySelector('#threetwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'threetwo') {
        window.document.querySelector('#threeone').childNodes[0].focus()
      }
    } else if (e.key === 'ArrowDown') {
      if (window.document.activeElement.parentNode.id === 'oneone') {
        window.document.querySelector('#twoone').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'onetwo') {
        window.document.querySelector('#twotwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'onethree') {
        window.document.querySelector('#twothree').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twoone') {
        window.document.querySelector('#threeone').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twotwo') {
        window.document.querySelector('#threetwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twothree') {
        window.document.querySelector('#threethree').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'MemoryGame') {
        window.document.querySelector('#oneone').childNodes[0].focus()
      }
    } else if (e.key === 'ArrowUp') {
      if (window.document.activeElement.parentNode.id === 'threeone') {
        window.document.querySelector('#twoone').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'threetwo') {
        window.document.querySelector('#twotwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'threethree') {
        window.document.querySelector('#twothree').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twoone') {
        window.document.querySelector('#oneone').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twotwo') {
        window.document.querySelector('#onetwo').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'twothree') {
        window.document.querySelector('#onethree').childNodes[0].focus()
      } else if (window.document.activeElement.parentNode.id === 'oneone') {
        window.document.querySelector('.MemoryGame').childNodes[2].focus()
      } else if (window.document.activeElement.parentNode.id === 'MemoryGame') {
        window.document.querySelector('.MemoryGame').childNodes[1].focus()
      }
    }
  }
  /** Hide the buttons, start the game */
  startMemoryGame (theid) {
    let theRealID = theid.toString()
    let membut1 = document.querySelectorAll('.MemoryButton1[myid]')
    let membut2 = document.querySelectorAll('.MemoryButton2[myid]')
    let membut3 = document.querySelectorAll('.MemoryButton3[myid]')
    let membut4 = document.querySelectorAll('.MemoryButton4[myid]')
    let membut5 = document.querySelectorAll('.MemoryButton5[myid]')
    let membut6 = document.querySelectorAll('.MemoryButton6[myid]')
    let membut7 = document.querySelectorAll('.MemoryButton7[myid]')
    let membut8 = document.querySelectorAll('.MemoryButton8[myid]')
    let membut9 = document.querySelectorAll('.MemoryButton9[myid]')
    console.log(membut2)

    for (let i = 0; i < membut1.length; i++) { /* Iterate through all tags */
      if (membut1[i].getAttribute('myid') === theRealID) { /* If unique id matches the tag id */
        membut1[i].style.backgroundSize = '0'
      }
    }
    for (let i = 0; i < membut2.length; i++) { /* Iterate through all tags */
      if (membut2[i].getAttribute('myid') === theRealID) { /* If unique id matches the tag id */
        membut2[i].style.backgroundSize = '0'
      }
    }
    for (let i = 0; i < membut3.length; i++) { /* Iterate through all tags */
      if (membut3[i].getAttribute('myid') === theRealID) { /* If unique id matches the tag id */
        membut3[i].style.backgroundSize = '0'
      }
    }
    for (let i = 0; i < membut4.length; i++) { /* Iterate through all tags */
      if (membut4[i].getAttribute('myid') === theRealID) { /* If unique id matches the tag id */
        membut4[i].style.backgroundSize = '0'
      }
    }
    for (let i = 0; i < membut5.length; i++) { /* Iterate through all tags */
      if (membut5[i].getAttribute('myid') === theRealID) { /* If unique id matches the tag id */
        membut5[i].style.backgroundSize = '0'
      }
    }
    for (let i = 0; i < membut6.length; i++) { /* Iterate through all tags */
      if (membut6[i].getAttribute('myid') === theRealID) { /* If unique id matches the tag id */
        membut6[i].style.backgroundSize = '0'
      }
    }
    for (let i = 0; i < membut7.length; i++) { /* Iterate through all tags */
      if (membut7[i].getAttribute('myid') === theRealID) { /* If unique id matches the tag id */
        membut7[i].style.backgroundSize = '0'
      }
    }
    for (let i = 0; i < membut8.length; i++) { /* Iterate through all tags */
      if (membut8[i].getAttribute('myid') === theRealID) { /* If unique id matches the tag id */
        membut8[i].style.backgroundSize = '0'
      }
    }
    for (let i = 0; i < membut9.length; i++) { /* Iterate through all tags */
      if (membut9[i].getAttribute('myid') === theRealID) { /* If unique id matches the tag id */
        membut9[i].style.backgroundSize = '0'
      }
    }

    this.setState({
      gameStarted: true,
      gamePlayable: true
    })
  }
  /** Check if the image click is the correct answer */
  checkAnswer (numberValue, theid) {
    console.log(theid)
    var theRealID = theid.toString()

    if (this.state.gamePlayable === true) {
      if (this.state.gameCounter === 9) {
        this.victory(this.props.myid)
      }

      if (numberValue === this.state.gameCounter && this.state.gameCounter !== 9) {
        var membut = document.querySelectorAll('.MemoryButton' + numberValue + '[myid]')
        for (let i = 0; i < membut.length; i++) {
          if (membut[i].getAttribute('myid') === theRealID) {
            membut[i].style.backgroundSize = '180px'
          }
        }
      } else if (numberValue !== this.state.gameCounter) {
        this.defeat(this.props.myid)
      }

      this.setState({
        gameCounter: this.state.gameCounter + 1
      })
    }
  }
  /** Victory window */
  victory (theid) {
    var theRealID = theid.toString()

    var removeOld = document.querySelectorAll('#AllRowButtons[myid]')
    for (let i = 0; i < removeOld.length; i++) {
      if (removeOld[i].getAttribute('myid') === theRealID) {
        removeOld[i].parentNode.removeChild(removeOld[i])
      }
    }

    removeOld = document.querySelectorAll('.MemoryGame[myid]')
    for (let i = 0; i < removeOld.length; i++) {
      if (removeOld[i].getAttribute('myid') === theRealID) {
        var newOld = removeOld[i].childNodes[1]
        newOld.parentNode.removeChild(newOld)
      }
    }

    var mkNew = document.querySelectorAll('.MemoryGame[myid]')
    for (let i = 0; i < mkNew.length; i++) {
      if (mkNew[i].getAttribute('myid') === theRealID) {
        var nwElement = document.createElement('div')
        nwElement.setAttribute('id', 'Victory')
        mkNew[i].appendChild(nwElement)
      }
    }
  }

  /** Defeat window */
  defeat (theid) {
    var theRealID = theid.toString()

    var removeOld = document.querySelectorAll('#AllRowButtons[myid]')
    for (let i = 0; i < removeOld.length; i++) {
      if (removeOld[i].getAttribute('myid') === theRealID) {
        removeOld[i].parentNode.removeChild(removeOld[i])
      }
    }

    removeOld = document.querySelectorAll('.MemoryGame[myid]')
    for (let i = 0; i < removeOld.length; i++) {
      if (removeOld[i].getAttribute('myid') === theRealID) {
        var newOld = removeOld[i].childNodes[1]
        newOld.parentNode.removeChild(newOld)
      }
    }

    var makeNew = document.querySelectorAll('.MemoryGame[myid]')
    for (let i = 0; i < makeNew.length; i++) {
      if (makeNew[i].getAttribute('myid') === theRealID) {
        var newElement = document.createElement('div')
        newElement.setAttribute('id', 'Defeat')
        makeNew[i].appendChild(newElement)
      }
    }
  }

  render () {
    return (
      <Draggable enableUserSelectHack={false}>
        <div className='DragContainer' id={this.props.id} onClick={this.props.focus}>
          <div className='MemoryGame' myid={this.props.myid} onKeyDown={this.componentDidUpdate.bind(this)}>
            <div id='TopLeftImageMemoryDiv' />
            <button className='StartButton' onClick={this.startMemoryGame.bind(this, this.props.myid)} />
            <button id='CloseButton' onClick={this.props.close} />
            <div id='AllRowButtons' myid={this.props.myid}>
              <div id='oneone' >
                {this.state.buttonArray[0]}
              </div>
              <div id='onetwo' >
                {this.state.buttonArray[1]}
              </div>
              <div id='onethree' >
                {this.state.buttonArray[2]}
              </div>
              <div id='twoone' >
                {this.state.buttonArray[3]}
              </div>
              <div id='twotwo' >
                {this.state.buttonArray[4]}
              </div>
              <div id='twothree' >
                {this.state.buttonArray[5]}
              </div>
              <div id='threeone' >
                {this.state.buttonArray[6]}
              </div>
              <div id='threetwo' >
                {this.state.buttonArray[7]}
              </div>
              <div id='threethree' >
                {this.state.buttonArray[8]}
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default MemoryGame
