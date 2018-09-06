import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { children } = this.props;
    return (
      <div className='modal__container-background'>
        {children}
      </div>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.any
}

export default Modal;