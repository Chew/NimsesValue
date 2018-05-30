'use strict';

var Hello = React.createClass({
  displayName: 'Hello',

  getInitialState: function getInitialState() {
    return {
      name: '0'
    };
  },
  changeName: function changeName(e) {
    this.setState({
      name: e.target.value
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        null,
        React.createElement('input', {
          onChange: this.changeName,
          value: this.state.name })
      ),
      React.createElement(
        'p',
        null,
        'You have $',
        3500 / 63115200 * this.state.name,
        '!'
      )
    );
  }
});

ReactDOM.render(React.createElement(Hello, null), document.getElementById('app'));
