import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../types'; 
import useHandleChange from './hooks/components/use-handle-change';
import { verifyPin } from './hooks/basic-rest/use-pin';
import useLoginCss from '../../assets/css/use-login-css';

const Login = () => {
  const navigation = useNavigation<NavigationProps>(); // Use typed navigation
  const [pin, setPin] = useState(['', '', '', '']);
  const [dpId, setDpId] = useState('');

  const { handleChange, inputRefs } = useHandleChange(pin, setPin);
  const styles = useLoginCss(); 

  const handleSubmit = async () => {
    const isVerified = await verifyPin(pin); 
    if (isVerified) {
      console.log('PIN verification successful');
      Alert.alert('Welcome User', 'PIN verified successfully!');
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Error', 'PIN verification failed. Please try again.');
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/backgroundimg/loginbackground.png')} 
      style={styles.background}>
      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]} 
            style={styles.pinInput}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            maxLength={1}  
            keyboardType="numeric"
            textAlign="center"
          />
        ))}
      </View>

      <TextInput
        // style={styles.dpInput} 
        value={dpId}
        onChangeText={setDpId}
        keyboardType="default"
        textAlign="center" 
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit PIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('Forgot PIN pressed')} style={styles.forgotPinContainer}>
        <Text style={styles.forgotPinText}>Forgot PIN?</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
