import {update_get_single_img_fail,update_get_single_img_success,get_single_img_fail,
    get_single_img_success,single_img_fail,single_img_success
} from "../Constant/Constant"
const initialState = {
    imgs:{}
}
export default (state = initialState,action)=>{
    switch(action.type){
        case update_get_single_img_success:
            return {
                ...state,
                imgs:action.payload

            }
        case update_get_single_img_fail:
            return {
              ...state,
            }
        case get_single_img_success:
            return {
              imgs:action.payload
            }
        case get_single_img_fail:
            return {
                imgs:{}

            }
        case single_img_success:
            return {
                imgs:action.payload

            }
        case single_img_fail:
            return {
           imgs:{}
            }

        default:
            return state;
    }
}