import * as type from "../Constant/Constant"
export const PostImage = async ({img})=>{
    try{
        const token = await AsyncStorage.getItem("token");
        const {data} = await axios.post("http://10.0.2.2:8000/image/singleimage",img,
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
              }}
        ); 
       
        return {
      type:type.single_img_success,
      payload:data.result}
    }
    catch(error){
        return {
     type:type.single_img_fail,
     payload:error.response.data.message}
    }
}
export const getImage = async (id)=>{
    try{
        const token = await AsyncStorage.getItem("token");
        const {data} = await axios.post(`http://10.0.2.2:8000/image/singlePhoto/${id}`,
            {headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
              }}
        ); 
      
        return {
        type:type.get_single_img_success,
        payload:data.result}

    }
    catch(error){
        return {
     type:type.get_single_img_fail,
     payload:error.response.data.message}
    }
};
export const UpdateImage = async ({id,img})=>{
   try{
    const token = await AsyncStorage.getItem("token");
    const {data} = await axios.post(`http://10.0.2.2:8000/image/singleupdatephoto/${id}`,img,
        {headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          }}
    ); 
    return {
        type:type.update_get_single_img_success,
        payload:data.result
    }
   }
   catch(error){
    return {
        type:type.update_get_single_img_fail,
        payload:error.response.data.message
    }
   }
}