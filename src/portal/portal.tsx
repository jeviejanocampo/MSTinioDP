import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';  

const Portal = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ImageBackground 
      source={require('../../assets/backgroundimg/portalbackground.png')} 
      style={styles.background}>


    <View style={styles.portalcontainer}>
      <Text style={styles.h2Text}>Go Deliver Now!</Text>
      
      <Text style={styles.descriptionText}>Join the team and start delivering orders quickly and efficiently. Be part of our growing community of delivery professionals.</Text>

    </View>
    
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')} // Navigation works now
        >
          <Text style={styles.buttonText}>Go Online</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portalcontainer: {
    position: 'absolute',
    bottom: 220,
    alignItems: 'center',
  },
  h2Text: {
    fontSize: 28,
    color: '#fff',
    marginTop: 50,
    fontFamily: 'Roboto-SemiBold',
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Roboto-Light', 
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50, 
  },
  button: {
    backgroundColor: 'skyblue',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,  
    width: 350,         
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Portal;
