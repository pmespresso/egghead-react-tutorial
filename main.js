import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

App.propTypes = {
  txt: React.PropTypes.string
}

App.defaultProps = {
  txt: 'default text'
}

ReactDOM.render(<App/>, document.getElementById('app'));