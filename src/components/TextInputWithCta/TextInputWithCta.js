import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import styles from './TextInputWithCtaStyles'

class TextInputWithCta extends React.Component {

  render() {
    const { classes, makeApiRequest, handleChange } = this.props;
    return (
      <div className={classes.container}>
        <FormControl className={classes.margin}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="custom-css-input"
          >
            {this.props.inputLabel}
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            id="custom-css-input"
            onChange={handleChange('searchTerm')}
          />
        </FormControl>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => makeApiRequest()}
        >
          {this.props.buttonLabel}
        </Button>
      </div>
    )
  }
}

TextInputWithCta.propTypes = {
  classes: PropTypes.object.isRequired,
  inputLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default (withStyles(styles)(TextInputWithCta));