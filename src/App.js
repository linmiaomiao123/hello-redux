import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from './actions';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  render () {
    const { increment } = this.props
    return (
      <div className='container'>
        <h1 className='jumbotron-heading text-center'>{this.props.counter}</h1>
        <p className='text-center'>
          <button onClick={() => increment({id: 1, name: 'lin'})} className='btn btn-primary mr-2'>Increase</button>
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

/** 方法二 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (name) => dispatch(increment(name))
//   }
// }

/** 方法三 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: bindActionCreators(increment, dispatch)
//   }
// }

/** 方法四 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment}, dispatch)
}

App.propTypes = {
  counter: PropTypes.number.isRequired
}

/** 方法2/3/4 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
