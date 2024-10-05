// Orders.tsx
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationProps } from '../../../types';
import styles from '../../../../assets/css/use-orders-css';
const Orders = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date('2024-10-06')); // Default to today
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const scaleAnim = useRef<{ [key: number]: Animated.Value }>({}).current;
  const navigation = useNavigation<NavigationProps>();

  const cardData = [
    { orderNumber: '#23232', status: 'Pending', name: 'Default Name', price: '150 Pesos', date: '2024-10-06' },
    { orderNumber: '#23233', status: 'Pending', name: 'Default Name', price: '150 Pesos', date: '2024-10-05' },
    { orderNumber: '#23234', status: 'Pending', name: 'Default Name', price: '150 Pesos', date: '2024-10-04' },
    { orderNumber: '#23235', status: 'Pending', name: 'Default Name', price: '150 Pesos', date: '2024-10-03' },
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

  const filteredCardData = cardData.filter(card => card.date === selectedDate.toISOString().split('T')[0]);

  const showPicker = () => {
    setShowDatePicker(true);
  };

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.bodyContainer}>
      <View style={styles.dateFilterContainer}>
        <Text style={styles.todayText}>Orders Today</Text>
        
        <TouchableOpacity onPress={showPicker}>
          <Text style={styles.datePickerButton}>Pick a date</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
          />
        )}
      </View>

      {filteredCardData.length === 0 ? (
        <Text style={styles.noOrdersText}>No orders for today</Text>
      ) : (
        filteredCardData.map((card, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardClick(index)}>
            <Animated.View
              style={[styles.card, { transform: [{ scale: scaleAnim[index] }] }, selectedCard === index && styles.selectedCardShadow]}
            >
              <Text style={styles.dateText}>{card.date}</Text>

              <View style={styles.cardHeader}>
                <Text style={styles.orderNumber}>Order Nos: {card.orderNumber}</Text>
                <Text style={styles.status}>{card.status}</Text>
              </View>
              <Text style={styles.cardName}>{card.name}</Text>
              <Text style={styles.price}>Payment: {card.price}</Text>
              <TouchableOpacity 
                style={styles.viewDetailsButton} 
                onPress={() => navigation.navigate('ViewDetails', { orderDetails: card })} 
              >
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
            </Animated.View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default Orders;
