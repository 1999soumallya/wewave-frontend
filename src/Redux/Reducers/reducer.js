import { GET_BANNER_CONTENT_FAILS, GET_BANNER_CONTENT_REQUEST, GET_BANNER_CONTENT_SUCCESS } from "../Constants/constants";

export const bannercontentReducer = (state = { bannerdetails: {} }, action) => {
    switch (action.type) {
        case GET_BANNER_CONTENT_REQUEST:
            return { bannerdetailsloading: true, ...state }

        case GET_BANNER_CONTENT_SUCCESS:
            return { bannerdetailsloading: false, bannerdetails: action.payload }

        case GET_BANNER_CONTENT_FAILS:
            return { bannerdetailsloading: false, bannerdetailserror: action.payload }

        default:
            return state;
    }
}