import * as type from "../Constant/Constant"
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Sign_In = async({email})=>{
    try{
        const {data} = await axios.post("http://10.0.2.2:8000/register/signin");
        return {
      type:type.SendEmail,
      payload:data.result}
    }
    catch(error){
        return {
        type:type.SendEmailFail,
        payload:error.response.data.message}

    }
};
export const Sign_Success = async ({Otp})=>{
    try{
        const {data} = await axios.post("http://10.0.2.2:8000/register/otpverify");
     await AsyncStorage.setItem("login",data.result.userId);
     await AsyncStorage.setItem("token",data.result.token);
        return {
        type:type.SignSuccess,
        payload:data.result}

    }
    catch(error){
        return {
        type:type.SigninFail,
        payload:error.response.data.message}

    }
};
export const Sign_Out = async ()=>{
    try{
        await AsyncStorage.clear();
        return {
        type:type.SignOut}
    }
    catch(error){
        return {
        type:type.SignOutFail,
        payload:error.response.data.message}
    }
};