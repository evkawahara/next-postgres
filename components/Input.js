import React from 'react';
import PropTypes from 'prop-types';
import Label from '../components/Label';

export default class Input extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    onKeyUp: () => {},
  };

  _handleKeyUp = e => {
    if (e.which === 13) {
      this.props.onSubmit(e);
      return;
    }

    this.props.onKeyUp(e);
  };

  componentDidMount = () => {
    if (this.props.autoFocus) {
      this.refs.input.focus();
    }
  };

  render() {
    return (
      <div className="container">
        <Label>{this.props.label}</Label>
        <input
          ref="input"
          autoComplete="off"
          className="input"
          onChange={this.props.onChange}
          onKeyUp={this._handleKeyUp}
          placeholder={this.props.placeholder}
          value={this.props.value}
          name={this.props.name}
          type={this.props.type}
        />
      </div>
    );
  }
}
