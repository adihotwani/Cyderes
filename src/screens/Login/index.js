import React from "react";
import { View, Image, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { signInGoogle } from "../../utils/GoogleSignIn";
import { useDispatch,  } from "react-redux";
import { addUser } from "../../redux/userSlice";

const Login = ({navigation}) => {
    const disptach = useDispatch();
    const handlepress = async () => {
        const user =  await signInGoogle();
        const name = user.name;
        const surname = user.familyName;
        disptach(addUser({name: {name}, surname: {surname}}))
        if(user){
            navigation.replace("Home");
        }
    }
    return(
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignSelf:"center"}}>
            <Text>Welcome</Text>
            <Text>Sign In to Continue</Text>
            <TouchableOpacity onPress={()=>{
                handlepress();
            }} style={{flexDirection: "row", borderWidth: 1, borderRadius: 14, paddingRight:5, backgroundColor: '#fff'}}>
                <Image source={require("../../assets/google.png")} style={{width: 50, height: 50}}/>
                <Text style={{justifyContent: 'center', alignSelf: 'center', marginLeft: 5}}>Sign In with google</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login;