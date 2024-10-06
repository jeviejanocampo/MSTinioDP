import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#f5f5f5',
      paddingTop: 50,
    },
    profilePicture: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#ccc',
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    phoneNumber: {
      fontSize: 14,
      color: '#666',
      marginBottom: 20,
      bottom: 10,
    },
    optionButton: {
      backgroundColor: '#213A57',
      padding: 15,
      borderRadius: 5,
      width: '80%',
      alignItems: 'center',
      marginBottom: 10,
    },
    optionText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  
  export default styles;
  