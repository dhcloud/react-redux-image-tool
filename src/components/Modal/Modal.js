import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

const Modal = props => (
  <div className='modal__container-background'>
    {props.children}
  </div>
)

Modal.propTypes = {
  children: PropTypes.any
}

export default Modal;