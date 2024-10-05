import React, { useState } from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import styles from '../../../assets/css/use-home-css';
import Dashboard from './section/use-dashboard'; 
import Orders from './section/use-orders'; 
import Me from './me';
import { NavigationProps } from '../../types';
import { useHomeAnimations } from '../hooks/components/use-home-animation';

const Home: React.FC<{ navigation: NavigationProps }> = ({ navigation }) => {
  const [showDashboard, setShowDashboard] = useState(false); 
  const [showOrders, setShowOrders] = useState(false); 
  const [showProfile, setShowProfile] = useState(false); 
  const [selectedItem, setSelectedItem] = useState<string | null>(null); 

  const {
    slideAnim,
    scaleDashboard,
    scaleOrders,
    scaleInventory,
    animateText,
    handleHamburgerClick,
    closeProfile,
  } = useHomeAnimations();

  const handleDashboardClick = () => {
    setShowDashboard((prev) => !prev);
    setShowOrders(false);
    closeProfile(setShowProfile);
    setSelectedItem('dashboard');
    animateText('dashboard');
  };

  const handleOrdersClick = () => {
    setShowOrders((prev) => !prev);
    setShowDashboard(false);
    closeProfile(setShowProfile);
    setSelectedItem('orders');
    animateText('orders');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleHamburgerClick(showProfile, setShowProfile)} style={styles.hamburgerContainer}>
        <Image
          source={require('../../../assets/png/hambuger-nav.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.headerc}>
        {/* <Text style={styles.headerText}>Portal</Text> */}
        <View style={styles.textRow}>
          <TouchableOpacity 
            onPress={handleDashboardClick} 
            style={[styles.textContainer, selectedItem === 'dashboard' && { backgroundColor: 'green' }]} // Change background color when selected
          >
            <Animated.Text 
              style={[styles.textItem, { transform: [{ scale: scaleDashboard }] }]}
            >
              Dashboard
            </Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={handleOrdersClick} 
            style={[styles.textContainer, selectedItem === 'orders' && { backgroundColor: 'green' }]} // Change background color when selected
          >
            <Animated.Text 
              style={[styles.textItem, { transform: [{ scale: scaleOrders }] }]}
            >
              Orders
            </Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {
              setSelectedItem('inventory');
              animateText('inventory');
            }} 
            style={[styles.textContainer, selectedItem === 'inventory' && { backgroundColor: 'green' }]} // Change background color when selected
          >
            <Animated.Text 
              style={[styles.textItem, { transform: [{ scale: scaleInventory }] }]}
            >
              Inventory
            </Animated.Text>
          </TouchableOpacity>
        </View>
      </View>

      {showDashboard && <Dashboard />}
      {showOrders && <Orders />}

      {showProfile && (
        <Animated.View 
          style={[styles.profileContainer, { position: 'absolute', top: 0, bottom: 0, left: 0, transform: [{ translateX: slideAnim }] }]}
        >
          <Me closeProfile={() => closeProfile(setShowProfile)} />
        </Animated.View>
      )}
    </View>
  );
};

export default Home;
