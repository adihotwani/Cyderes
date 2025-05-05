import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const signInGoogle = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = (await GoogleSignin.signIn()).data.user;
        return userInfo;
    } catch (error) {
        console.log(error)
    }
}