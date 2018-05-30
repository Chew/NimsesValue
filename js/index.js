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
        roundpls(3500 / 63115200 * this.state.name, 4),
        '!'
      ),
      React.createElement(
        'p',
        null,
        'You have ',
        roundpls(this.state.name / 63115200, 5),
        ' infinims! That\'s ',
        roundpls(this.state.name / 63115200 * 100, 5),
        '% of the way there!'
      )
    );
  }
});

ReactDOM.render(React.createElement(Hello, null), document.getElementById('app'));
