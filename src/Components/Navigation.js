import React from 'react'

const navigation = (props) => {
  return (
    <div className='navigationBar'>
      <button id='ChatButton' value='Chat' onClick={props.chatClicked} />
      <button id='MemoryGameButton' value='MemoryGame' onClick={props.memoryGameClicked} />
      <button id='MyAppButton' value='MyApp' onClick={props.myAppClicked} />
    </div>
  )
}

export default navigation
