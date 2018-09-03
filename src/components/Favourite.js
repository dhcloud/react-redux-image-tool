import React from 'react'
import Icon from './Icon'
// import PropTypes from 'prop-types'

const Favourite = props => {
  return (
    <div className='icon__container-favourite' onClick={e => props.onClick(e)}>
      <Icon name='favourite' color={props.isSelected ? '#FC0' :'#fff'} size={30} />
    </div>
  )
}

export default Favourite