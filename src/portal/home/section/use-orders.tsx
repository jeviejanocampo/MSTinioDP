import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../types';

const Orders = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const scaleAnim = useRef<{ [key: number]: Animated.Value }>({}).current;
  const navigation = useNavigation<NavigationProps>(); // Type the navigation prop

  const cardData = [
    { orderNumber: '#23232', status: 'Pending', name: 'Default Name', price: '150 Pesos' },
    { orderNumber: '#23233', status: 'Pending', name: 'Default Name', price: '150 Pesos' },
    { orderNumber: '#23234', status: 'Pending', name: 'Default Name', price: '150 Pesos' },
    { orderNumber: '#23235', status: 'Pending', name: 'Default Name', price: '150 Pesos' },
  ];

  cardData.forEach((_, index: number) => {
    if (!scaleAnim[index]) {
      scaleAnim[index] = new Animated.Value(1);
    }
  });

  const handleCardClick = (index: number) => {
    cardData.forEach((_, i: number) => {
      Animated.timing(scaleAnim[i], { toValue: 1, duration: 300, useNativeDriver: true }).start();
    });
    Animated.timing(scaleAnim[index], { toValue: 1.1, duration: 300, useNativeDriver: true }).start();
    setSelectedCard(index);
  };

  return (
    <ScrollView contentContainerStyle={styles.bodyContainer}>
      {cardData.map((card, index) => (
        <TouchableOpacity key={index} onPress={() => handleCardClick(index)}>
          <Animated.View
            style={[
              styles.card,
              { transform: [{ scale: scaleAnim[index] }] },
              selectedCard === index && styles.selectedCardShadow,
            ]}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.orderNumber}>Order Nos: {card.orderNumber}</Text>
              <Text style={styles.status}>{card.status}</Text>
            </View>
            <Text style={styles.cardName}>{card.name}</Text>
            <Text style={styles.price}>Payment: {card.price}</Text>
            <TouchableOpacity 
              style={styles.viewDetailsButton} 
              onPress={() => navigation.navigate('ViewDetails', { orderDetails: card })} // Pass the card details
            >
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// Styles remain unchanged


const styles = StyleSheet.create({
  bodyContainer: {
    paddingBottom: 50,
    marginTop: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    marginBottom: 20,
    marginHorizontal: 20,
    width: 320,
  },
  selectedCardShadow: {
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNumber: {
    fontSize: 20,
    fontFamily: 'Roboto-SemiBold',
    color: 'black',
  },
  status: {
    backgroundColor: 'red',
    padding: 8,
    fontSize: 16,
    color: 'white',
    borderRadius: 30,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    position: 'absolute',
    bottom: 86,
    left: 22,
    color: '#666',
  },
  viewDetailsButton: {
    backgroundColor: '#03C85E80',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Orders;
