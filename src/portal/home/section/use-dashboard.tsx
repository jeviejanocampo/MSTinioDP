import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AcceptOrders from './new-orders/use-accept-orders';

const Dashboard = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}> 
      <View style={styles.bodyContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card 1</Text>
          <Text style={styles.cardContent}>Content for Card 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card 2</Text>
          <Text style={styles.cardContent}>Content for Card 2</Text>
        </View>
      </View>
      
      <AcceptOrders />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flexDirection: 'row', // Arrange cards in a row
    justifyContent: 'space-between', // Space cards evenly
    width: '100%', // Full width for container
    marginTop: 10, // Space between header and body
  },
  card: {
    backgroundColor: '#fff', // White background for the card
    borderRadius: 10, // Rounded corners
    padding: 20, // Padding inside the card
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    elevation: 2, // For Android shadow
    flex: 1, // Allow cards to take equal space
    marginHorizontal: 10, // Space between cards
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Space between title and content
    color: 'black',
  },
  cardContent: {
    fontSize: 14,
    color: '#666', // Dark gray text color
  },
});

export default Dashboard;
