// use-home-animations.ts
import { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

export const useHomeAnimations = () => {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current; // Start off-screen right

  // Animated scales for text items
  const scaleDashboard = useRef(new Animated.Value(1)).current;
  const scaleOrders = useRef(new Animated.Value(1)).current;
  const scaleInventory = useRef(new Animated.Value(1)).current;

  const animateText = (selected: string) => {
    // Reset all to default size
    Animated.timing(scaleDashboard, { toValue: 1, duration: 300, useNativeDriver: true }).start();
    Animated.timing(scaleOrders, { toValue: 1, duration: 300, useNativeDriver: true }).start();
    Animated.timing(scaleInventory, { toValue: 1, duration: 300, useNativeDriver: true }).start();

    // Animate the selected item
    if (selected === 'dashboard') {
      Animated.timing(scaleDashboard, { toValue: 1.2, duration: 300, useNativeDriver: true }).start();
    } else if (selected === 'orders') {
      Animated.timing(scaleOrders, { toValue: 1.2, duration: 300, useNativeDriver: true }).start();
    } else if (selected === 'inventory') {
      Animated.timing(scaleInventory, { toValue: 1.2, duration: 300, useNativeDriver: true }).start();
    }
  };

  const handleHamburgerClick = (showProfile: boolean, setShowProfile: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (showProfile) {
      closeProfile(setShowProfile);
    } else {
      setShowProfile(true);
      Animated.timing(slideAnim, {
        toValue: 0, // Slide in from right
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const closeProfile = (setShowProfile: React.Dispatch<React.SetStateAction<boolean>>) => {
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get('window').width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowProfile(false);
    });
  };

  return {
    slideAnim,
    scaleDashboard,
    scaleOrders,
    scaleInventory,
    animateText,
    handleHamburgerClick,
    closeProfile,
  };
};
