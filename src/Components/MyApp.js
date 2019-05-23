import React from 'react'
import Draggable from 'react-draggable'

class MyApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      millis: 0,
      stopwatch_Started: false
    }
  }
  /** Begin the counting */
  startWatch () {
    if (!this.state.stopwatch_Started) {
      this.interval = setInterval(() => {
        this.clockTick()
      }, 100)

      this.setState({ stopwatch_Started: true })
    }
  }
  /** Stop the counting */
  stopWatch () {
    if (this.state.stopwatch_Started) {
      clearInterval(this.interval)
      this.setState({ stopwatch_Started: false })
    }
  }
  /** Reset the counting */
  resetWatch () {
    this.stopWatch()
    this.refreshValues(0, 0, 0, 0)
  }
  /** Stopwatch mechanism */
  clockTick () {
    let millis = this.state.millis + 1
    let seconds = this.state.seconds
    let minutes = this.state.minutes
    let hours = this.state.hours

    if (millis === 10) {
      millis = 0
      seconds = seconds + 1
    }

    if (seconds === 60) {
      millis = 0
      seconds = 0
      minutes = minutes + 1
    }

    if (minutes === 60) {
      millis = 0
      seconds = 0
      minutes = 0
      hours = hours + 1
    }

    this.refreshValues(millis, seconds, minutes, hours)
  }
  /** Showing the states */
  theShow (time) {
    if (time < 10) {
      return '0' + time
    } else return time
  }
  /** Changing of values */
  refreshValues (millis, seconds, minutes, hours) {
    this.setState({
      millis: millis,
      seconds: seconds,
      minutes: minutes,
      hours: hours
    })
  }

  render () {
    return (
      <Draggable enableUserSelectHack={false}>
        <div className='DragContainer' id={this.props.id} onClick={this.props.focus}>
          <div id='StopwatchApp'>
            <div id='TopLeftImageMyAppDiv' />
            <button id='CloseButton' onClick={this.props.close} />
            <header className='header'>
              <div id='StopwatchTitle'>Stopwatch</div>
            </header>
            <div className='Time'>
              <span id='hours'>{this.theShow(this.state.hours)}:</span>
              <span id='minutes'>{this.theShow(this.state.minutes)}:</span>
              <span id='seconds'>{this.theShow(this.state.seconds)}</span>
              <span id='millisecs'> .0{this.state.millis}</span>
            </div>
            <div className='TripleTrouble'>
              <button id={'StartStopwatchButton'} onClick={this.startWatch.bind(this)} />
              <button id={'StopStopwatchButton'} onClick={this.stopWatch.bind(this)} />
              <button id={'ResetStopwatchButton'} onClick={this.resetWatch.bind(this)} />
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default MyApp
