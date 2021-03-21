import React from 'react'
import Key from '../Key/Key'
import classes from './Keyboard.module.css'

const Keyboard = props => {
  return (
    <div className={classes.Keyboard}>
      <div className={classes.Keyboard__Main}>
        <Key className={classes.Keyboard__Backspace} />
      </div>
    </div>
  )
}

export default Keyboard
