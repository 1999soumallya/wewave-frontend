import axios from "axios"
import { GET_BANNER_CONTENT_FAILS, GET_BANNER_CONTENT_REQUEST, GET_BANNER_CONTENT_SUCCESS } from "../Constants/constants"

export const bannercontentAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_BANNER_CONTENT_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.get(`http://localhost:4000/api/banner_containt`, config)
        dispatch({ type: GET_BANNER_CONTENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_BANNER_CONTENT_FAILS, payload: error.response && error.response.data })
    }
}