// src/styles/useLoginCss.tsx

import { StyleSheet } from 'react-native';

const useLoginCss = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pinContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      top: 130,
    },
    pinInput: {
      borderWidth: 2,
      borderColor: '#ccc',
      borderRadius: 10,
      paddingVertical: 15,
      fontSize: 24,
      width: 50,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      color: 'black',
    },
    submitButton: {
      backgroundColor: 'skyblue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      top: 110,
    },
    submitButtonText: {
      color: 'white',
      fontSize: 18,
    },
    forgotPinContainer: {
      alignItems: 'center',
      top: 120,
    },
    forgotPinText: {
      color: 'skyblue',
      fontSize: 16,
    },
  });
};

export default useLoginCss;
