import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';


export default class ForgotPasswordScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            email:"",
        };
    
    }

    onResetPasswordpress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(() => {
            Alert.alert("Password reset email has been sent");
    }, (error) => {
        Alert.alert(error.message);
    });

    }


    onBackToLoginPress = () => {
        this.props.navigation.navigate("Login")

    }
    render() {
        return (
            <View style={{paddingTop:200, alignItems: "center"}}>

            <Text>Forgot Password </Text>
            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={this.state.email}
                onChangeText= {(text) => { this.setState({email: text}) }}
                />
    
                <Button title="Reset Password" onPress={this.onResetPasswordpress} />
    
                <Button title="Back to Login" onPress={this.onBackToLoginPress} />    
            </View>
            );
    }
}

const styles = StyleSheet.create({

});
