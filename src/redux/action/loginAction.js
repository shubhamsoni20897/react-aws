import axios from "axios"
import { BASE_URL } from "src/global/constants";

export const loginAction = (data,onSuccess) => {
    return async (dispatch) => {

        await axios.post(`${BASE_URL}/login`, data).then((response) => {

            dispatch({
                    type: 'LOGIN_SUCCESS',
                    data:response.data,

                }
            )
            onSuccess(response)
        }).catch((err) => {
            console.log('err', err.response)
            dispatch({
                type: 'LOGIN_ERROR',
                data:err
            }
        )
        })
    }

}


export const logoutAction = (onSuccess) => {
    return async (dispatch) => {
console.log('hi')
        dispatch({

                type: 'LOGOUT_SUCCESS',
                data:[],

            }
        )
        
        onSuccess()
    }

}