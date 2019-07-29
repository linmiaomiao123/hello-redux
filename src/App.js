import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from './actions';
// import { bindActionCreators } from 'redux';

class App extends React.Component {
  render () {
    const { increment, decrement } = this.props
    return (
      <div className='container'>
        <h1 className='jumbotron-heading text-center'>{this.props.counter}</h1>
        <p className='text-center'>
          <button onClick={() => increment()} className='btn btn-primary mr-2'>Increase</button>
          <button onClick={() => decrement()} className='btn btn-danger mr-2'>Decrease</button>
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
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ increment}, dispatch)
// }

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

/** 方法2/3/4 */
// export default connect(mapStateToProps, mapDispatchToProps)(App);

/** 方法五， 最常用的 */
export default connect(mapStateToProps, { increment, decrement })(App);
