import React from 'react';
import { Alert, TouchableOpacity, Text, StyleSheet, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../../types';

interface LogoutButtonProps {
  onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const navigation = useNavigation<NavigationProps>(); 

  const confirmLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            onLogout();
            navigation.navigate('Login'); 
            ToastAndroid.show('You have been logged out successfully!', ToastAndroid.SHORT);
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={confirmLogout}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#213A57',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LogoutButton;
