import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1 className='jumbotron-heading text-center'>{this.props.store.getState()}</h1>
        <p className='text-center'>
          <button className='btn btn-primary mr-2'>Increase</button>
          <button className='btn btn-danger mr-2'>Decrease</button>
        </p>
      </div>
    )
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default App;
