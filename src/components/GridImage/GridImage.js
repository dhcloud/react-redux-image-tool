import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid'
import {addFavourite, removeFavourite} from '../../actions/favourites'
import Favourite from '../Favourite'
import './grid-image.scss'

const imageSelection = event => {
  console.log('imageSelection');
}

class GridImage extends React.Component {
  
  state = {
    isFavourite: false
  }

  handleClick = event => {
    this.setState(prevState => ({ isFavourite: !prevState.isFavourite }), () => {
      this.dispatchFavourite();
    })
  }

  dispatchFavourite() {
    if(this.state.isFavourite) {
      this.props.addFavourite(this.props.item)
    } else {
      this.props.removeFavourite(this.props.item)
    }
  }
  
  render() {
    const { item: { webformatURL }, onGridImageLoaded, isPageLoaded, index } = this.props
    return (
      <Grid item xs={12} sm={6} md={4}>
        <div className={`image-container ${isPageLoaded ? 'animateImage' : ''}`} style={{animationDelay: `${index/15}s`}}>
          <img src={ webformatURL } onLoad={ onGridImageLoaded } style={{ width: '350px', height: '200px'}} />
          <Favourite onClick={this.handleClick} isSelected={this.state.isFavourite} />
        </div>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    favourites: state.favourites
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addFavourite,
    removeFavourite
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GridImage)