export default theme => ({
  imagesContainer: {
    flexGrow: 1,
    overflow: 'hidden',
    position: 'absolute',
    top: '70px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    overflowY: 'scroll',
  },
  btnSelect: {
    fontFamily: 'sans-serif',
    fontWeight: '800',
    position: 'absolute',
    top: '1.6rem',
    right: '1.6rem',
    background: 'white'
  },
  pagination: {
    position: 'fixed',
    bottom: '1rem',
    left: '50%',
    transform: 'translate(-50%)',
    display: 'flex',
    justifyContent: 'center',
    background: 'transparent',
    '& .active': {
      background: '#339',
      '& a': {
        fontWeight: '400',
        color: '#fff'
      }
    },
    '& li': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '35px',
      height: '40px',
      border: '1px solid #AAA',
      background: '#fffd',
      cursor: 'pointer',
      '& a': {
        color: '#666',
        fontSize: '1rem',
        fontWeight: 'normal',
        fontFamily: 'Roboto, sans-serif'
      },
      '&:not(:last-child)': {
        borderRight: 'none'
      },
      '&:first-child': {
        borderRadius: '.5rem 0 0 .5rem'
      },
      '&:last-child': {
        borderRadius: '0 .5rem .5rem 0'
      }
    },
  },
})