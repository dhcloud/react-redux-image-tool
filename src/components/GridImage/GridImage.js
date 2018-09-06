import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid'
import { addFavourite, removeFavourite } from '../../actions/favourites'
import Favourite from '../Favourite'
import './grid-image.scss'

class GridImage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFavourite: props.favourites.hasOwnProperty(`${props.item.id}`) ? true : false
    }
  }

  componentDidUpdate() {
    localStorage.setItem('favourites', JSON.stringify(this.props.favourites));
  }

  handleClick = () => {
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
          <div style={{ width: '350px', height: '200px', position: 'relative'}}>
            <img src={ webformatURL } onLoad={ onGridImageLoaded } style={{ width: '350px', height: '200px'}} />
            <Favourite  onClick={ this.handleClick } isFavourite={ this.state.isFavourite } />
          </div>
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