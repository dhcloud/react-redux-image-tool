// react, redux
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import Pagination from "react-js-pagination"

// @material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

// actions
import { getImagesFromSearch } from '../../actions/'

// containers
import Modal from '../Modal'

// components
import TextInputWithCta from '../../components/TextInputWithCta'
import GridImage from '../../components/GridImage'
import { SvgLoader, loaderBackgroundStyle, loaderIconStyle } from '../../components/Loader'

// constants
import { MAX_IMAGES_PER_PAGE, MODAL_BTN_TEXT } from '../../constants'

// styles
import styles from './HomePageStyles.js'
import '../../assets/styles/sass/main.scss'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 1,
      searchTerm: '',
      loading: false,
      isPageLoaded: false,
      openModal: false,
      toggleModal: false
    }
    this.imagesLoaded = 0
  }
 
  static getDerivedStateFromProps(props, prevState) {
  // TODO DOUBLE CHECK AS CHANGES MADE ON TRAIN USING iOS Working Copy
    if(props.totalHits === 0 && prevState.openModal) {
      return { openModal: true }
    }
    return { openModal: props.totalHits === null ? null : false };
  }

  makeApiRequest = (activePage = 1) => {
    this.imagesLoaded = 0
    this.setState({ loading: true, isPageLoaded: false, activePage }, () => this.props.getImagesFromSearch(this.state.searchTerm, this.state.activePage))
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handlePageChange = activePage => {
    this.makeApiRequest(activePage)
  }

  isImagesRequestComplete = () => {
    const noOfImagesForThisPage = this.props.totalHits > MAX_IMAGES_PER_PAGE ? MAX_IMAGES_PER_PAGE : this.props.totalHits
    if(this.imagesLoaded === noOfImagesForThisPage) {
      this.setState({ isPageLoaded: true, loading: false })
    }
  }

  onGridImageLoaded = event => {
    event.persist()
    this.imagesLoaded++
    this.isImagesRequestComplete()
  }

  renderHeader = () => {
    return (
      <TextInputWithCta
        inputLabel={`Type the subject name for images`}
        buttonLabel='Search'
        makeApiRequest={this.makeApiRequest}
        handleChange={this.handleChange}
      />
    )
  }

  renderSearchResults = () => {
    const { classes, searchResults } = this.props
    return ( 
      <div className={classes.imagesContainer}>
        <Grid container spacing={16}>
          { searchResults.map((item, index) =>  <GridImage
                                                  item={ item }
                                                  { ...this.props }
                                                  index={index}
                                                  isPageLoaded={ this.state.isPageLoaded }
                                                  onGridImageLoaded={ this.onGridImageLoaded }
                                                  key={ item.id }
                                                />
          )}
        </Grid>
      </div>
    )
  }

  renderFooter = classes => {
    return (
      <Pagination
        activePage={ this.state.activePage }
        innerClass={ classes.pagination }
        itemsCountPerPage={ MAX_IMAGES_PER_PAGE }
        totalItemsCount={ this.props.totalHits }
        pageRangeDisplayed={ 5 }
        onChange={page => this.handlePageChange(page)}
      />
    )
  }

  handleModalClick = event => {
    // trigger getDerivedStatefromProps 
    this.setState(prevState => ({toggleModal: !prevState.toggleModal}));
  }

  render() {
    const { classes, searchResults, totalHits } = this.props
    const { loading, openModal, searchTerm } = this.state
    return (
      <React.Fragment>
        <header>
          { this.renderHeader() }
        </header>
        <section>
          { searchResults.length > 0 && this.renderSearchResults() }
          { loading && totalHits > 0 && <div style={ loaderBackgroundStyle }><SvgLoader { ...loaderIconStyle } /></div> }
          { /* openModal &&  <Modal>
                            <div className='modal__body'>
                              {`No search results for '${searchTerm}'. Click ${MODAL_BTN_TEXT} to continue`}
                              <button className='modal__button' onClick={e => this.handleModalClick(e)}>{MODAL_BTN_TEXT}</button>
                            </div>
                          </Modal> */ }
        </section>
        <footer>
          { totalHits > MAX_IMAGES_PER_PAGE && !loading && this.renderFooter(classes) }
        </footer>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getImagesFromSearch
  }, dispatch)
}

const mapStateToProps = state => ({
  searchResults: state.search.hits,
  totalHits: state.search.totalHits
})

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  searchResults: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))
