import {Product_Success,Product_Fail,get_product_success,get_product_fail,
    get_product_success_id,get_product_fail_id,update_product_success_id,update_product_fail_id
} from "../Constant/Constant";
const initialState = {
     products:[],
     single:{}
}
export default (state = initialState,action) =>{
    switch(action.type){
        case Product_Success:
            return {
                products:[action.payload]
            };
        case Product_Fail:
            return {
                products:[]
            };
        case get_product_success:
            return {
               products:[action.payload]
            };
        case get_product_fail:
            return {
            products:[]
            };
        case update_product_success_id:
            return {
                ...state,
                single:action.payload
            };
        case update_product_fail_id:
            return {
                ...state

            };
        case get_product_success_id:
            return {
                single:action.payload

            };
        case get_product_fail_id:
            return {
                single:{}
            };
        default:
            return state;
    }
}