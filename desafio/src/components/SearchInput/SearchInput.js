import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons';

const styles = theme => ({
  textField: {
    flexBasis: 200,
    width: '100%',
    borderRadius: 0,
    boxShadow: '0px 5px 2px 0px rgba(158,158,158,1)',
  },
});

class SearchInput extends Component {
  static defaultProps = {
    onChangeValue: () => {},
    placeholder: '',
    value: '',
  }
  static propTypes = {
    placeholder: PropTypes.string,
    onChangeValue: PropTypes.func,
  }
  state = {
    value: this.props.value,
  }
  handleOnChange = (e) => {
    this.setState({ value: e.target.value})
    this.props.onChangeValue(e.target.value)
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value.length) return;
    alert('asa')
  }

  render() {
    const { classes, value, ...restProps} = this.props;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <TextField
              id="input-with-icon-textfield"
              variant="outlined"
              className={classNames(classes.textField)}
              value={this.state.value}
              onSubmit={this.handleOnSubmit}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleOnSubmit}
                    >
                    <Search />
                  </IconButton>
                    
                  </InputAdornment>
                ),
              }}
              onChange={this.handleOnChange}
              {...restProps}
            />
      </form>
    )
  }
}

export default withStyles(styles)(SearchInput);