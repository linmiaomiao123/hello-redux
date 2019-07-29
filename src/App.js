import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from './actions';

class App extends React.Component {
  render () {
    const { dispatch } = this.props
    return (
      <div className='container'>
        <h1 className='jumbotron-heading text-center'>{this.props.counter}</h1>
        <p className='text-center'>
          <button onClick={() => dispatch(increment({id: 1, name: 'lin'}))} className='btn btn-primary mr-2'>Increase</button>
          <button className='btn btn-danger mr-2'>Decrease</button>
        </p>
      </div>
    )
  }
}

/** connect 连接Provider 的reducer数据，将state传过来，变成props 来使用 */
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(App);
