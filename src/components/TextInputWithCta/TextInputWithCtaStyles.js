const styles = theme => ({
  container: {
    display: 'flex',
    background: '#0003',
    borderBottom: '1px solid #00E3',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
  },
  margin: {
    margin: theme.spacing.unit,
    flex: '1'
  },
  button: {
    margin: theme.spacing.unit,
    flex: '.25',
    border: '1px solid #999',
    background: '#FFF',
    color: '#999',
    boxSizing: 'borderBox',
    '&:hover, &:focus': {
      border: '2px solid #999'
    }
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#999',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#999',
    },
  },
});

export default styles;