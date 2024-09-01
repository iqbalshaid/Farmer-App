
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { Sign_In } from "../Reduxs/Action/Auth";
import {useSelector,useDispatch} from "react-redux"
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
    const {user} = useSelector((state)=>state.Auth);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    
    const [load, setLoad] = useState(false)



    const Signup = async () => {
        setLoad(true)
        dispatch(Sign_In(email));
        if(user.length>0){
            setLoad(false);
            setEmail('');
            navigation.navigate("otp");
        }
        else{
            setLoad(false);
        }
       
    }
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                flex: 1,
                backgroundColor: "#2cbfe6",
                justifyContent: "center",
                alignItems: "center",
                borderBottomEndRadius: 20,
                borderBottomLeftRadius: 20
            }}>
                <Text style={{
                    fontSize: 50,
                    color: "#fff",
                    fontWeight: "bold"

                }}>Welcome</Text>
                <Text style={{
                    fontSize: 15,
                    color: "#fff",
                    fontWeight: "bold"
                }}>Nice to see you again</Text>

            </View>
            <View style={{
                flex: 4,
                backgroundColor: "#d6d9d9",
                borderTopEndRadius: 30,
                borderTopLeftRadius: 30,
                elevation: 30
            }}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 30,
                    marginTop: 150,
                    fontWeight:"bold",
                    color: "black"
                }}>Resister</Text>
               
                <TextInput style={{
                    borderWidth: 0.9,
                    width: 350,
                    alignSelf: "center",
                    paddingLeft: 20,
                    fontSize: 20,
                    marginTop: 10,
                    borderRadius: 5
                }} placeholder="Enter Email" value={email} onChangeText={(text) => setEmail(text)}></TextInput>
               
                
                <TouchableOpacity style={{
                    width: 200,
                    padding: 10,
                    backgroundColor: '#2cbfe6',
                    alignSelf: "center",
                    marginTop: 25,
                    borderRadius: 17
                }}>
                    {
                        load ? <ActivityIndicator size={44}></ActivityIndicator> : <Text style={{
                            textAlign: "center",
                            fontSize: 22,
                            color: "#fff",
                            fontWeight: "bold",
                           
                        }} onPress={() => Signup()}>Send OTP on Email</Text>
                    }

                </TouchableOpacity>
             

            </View>
        </View>
    )
}

export default Signup;
