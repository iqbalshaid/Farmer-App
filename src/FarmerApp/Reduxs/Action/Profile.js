import AsyncStorage from "@react-native-async-storage/async-storage";
import * as type from "../Constant/Constant"
import axios from "axios";
export const PostProfile = async (prof)=>{

    try{
        const token = await AsyncStorage.getItem("token");
        const {data} = await axios.post("http://10.0.2.2:8000/profile/postprofile",prof,
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
              }}
        ); 
        return {
            type:type.Product_Success,
            payload:data.result
        }
    }
    catch(error){
        return {
            type:type.Product_Fail,
            payload:error.response.data.message
        }
    }
};
export const getProfile = async ()=>{
    try{
        const token = await AsyncStorage.getItem("token");
        const {data} = await axios.post("http://10.0.2.2:8000/profile/getProfile",
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
              }}
        ); 
      
        return {
            type:type.get_product_success,
            payload:data.result
        }
    }
    catch(error){
        return {
            type:type.get_product_fail,
            payload:error.response.data.message
        }
    }
}
export const putProfile = async ({id,prof})=>{
    try{
        const token = await AsyncStorage.getItem("token");
        const {data} = await axios.post(`http://10.0.2.2:8000/profile/updateProfile/${id}`,prof,
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
              }}
        ); 
       
        return {
            type:type.update_product_success_id,
            payload:data.result
        }
    }
    catch(error){
        return {
            type:type.update_product_fail_id,
            payload:error.response.data.message
        }
    }
};
export const getSingleProfile = async (id)=>{
    try{
        const token = await AsyncStorage.getItem("token");
        const {data} = await axios.post(`http://10.0.2.2:8000/profile/getParticular/${id}`,
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
              }}
        ); 
       
    return {
        type:type.get_product_success_id,
        payload:data.result
    }
    }
    catch(error){
        return {
            type:type.get_product_fail_id,
            payload:error.response.data.message
        }

    }
}