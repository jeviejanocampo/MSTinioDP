import React, { useRef } from 'react';
import { View, Text, Animated, PanResponder, TouchableOpacity } from 'react-native';
import styles from '../../../assets/css/use-me-css';
import LogoutButton from './section/section-components/use-logout-button';

interface MeProps {
  closeProfile: () => void; 
}

const Me: React.FC<MeProps> = ({ closeProfile }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 10;
      },
      onPanResponderMove: (evt, gestureState) => {
        pan.setValue({ x: gestureState.dx, y: 0 });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -100) {
          closeProfile();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const handleLogout = () => {
    // console.log("User logged out");
    // You can add any additional logout logic here (e.g., clearing user session)
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.container, { transform: pan.getTranslateTransform() }]}
    >
      <View style={styles.profilePicture} />
      <Text style={styles.name}>Jevie A. Ocampo</Text>
      <Text style={styles.phoneNumber}>0932332322</Text>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Notifications</Text>
      </TouchableOpacity>
      <LogoutButton onLogout={handleLogout} />
    </Animated.View>
  );
};

export default Me;
