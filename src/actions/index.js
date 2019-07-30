import axios from 'axios'
import { INCREMENT, DECREMENT } from '../constants'
/** user */
import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST } from '../constants'
/** user-promise */
import { LOAD_USER } from '../constants'

/** 异步处理--需要引入redux-thunk中间件  */
export const increment = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 2000)
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

/** user */
// export const get_user = () => {
//   return dispatch => {
//     dispatch(fetch_user_request())
//     axios.get("https://randomuser.me/api")
//       .then(res => {
//         dispatch(fetch_user(res.data.results[0]))
//       })
//       .catch(error => {
//         console.dir(error)
//         dispatch(fetch_user_failure(error.response.data))
//       })
//   }
// }

// export const fetch_user = (user) => {
//   return {
//     type: FETCH_USER_SUCCESS,
//     user
//   }
// }

// export const fetch_user_request = () => {
//   return {
//     type: FETCH_USER_REQUEST
//   }
// }

// export const fetch_user_failure = (error) => {
//   return {
//     type: FETCH_USER_FAILURE,
//     error
//   }
// }

/** user-promise */
export const get_user = () => {
  return {
    type: LOAD_USER,
    // payload: axios.get("https://randomuser.me/api")
    payload: {
      promise: axios.get("https://randomuser.me/api")
    }
  }
}