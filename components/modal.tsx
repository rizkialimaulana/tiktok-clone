import React from 'react'
import { auth } from '../firebase'

const Modal = () => {
  return (
    <div className=''>
        <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  )
}

export default Modal