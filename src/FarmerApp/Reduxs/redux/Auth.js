import {SendEmail,SendEmailFail,SignSuccess,SigninFail,SignOut,SignOutFail} from "../Constant/Constant";
const initialState = {
    user:{}
}
export default (state =initialState ,action)=>{
    switch(action.type){
        case SendEmail:
        case SignSuccess:
            return {
                ...state,
               user:action.payload
            }
        case SendEmailFail:
            return {
                user:{}
            };
        
        case SigninFail:
            return {
             ...state
            }
        case SignOut:
            return initialState;
        case SignOutFail:
            return {
                 ...state
            }
     default:
        return state;
    }
}