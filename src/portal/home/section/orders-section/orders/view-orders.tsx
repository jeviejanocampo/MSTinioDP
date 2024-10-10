import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

// Sample data for 5 orders
const orders = [
  {
    id: '1',
    title: 'Product 1',
    price: '$10.00',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    title: 'Product 2',
    price: '$15.00',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    title: 'Product 3',
    price: '$20.00',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '4',
    title: 'Product 4',
    price: '$25.00',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '5',
    title: 'Product 5',
    price: '$30.00',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '6',
    title: 'Product 6',
    price: '$35.00',
    imageUrl: 'https://via.placeholder.com/100',
  },
];

// OrderCard component
const OrderCard: React.FC<{ title: string; price: string; imageUrl: string }> = ({ title, price, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const ViewOrders: React.FC = () => {
  // Calculate total items and total amount
  const totalItems = orders.length;
  const totalAmount = orders.reduce((acc, order) => {
    // Remove '$' and convert to number
    const price = parseFloat(order.price.replace('$', '').replace(',', ''));
    return acc + price;
  }, 0);
  
  // Define static fees
  const deliveryFee = 5.00; // Example delivery fee
  const otherFees = 2.00;    // Example other fees
  const totalToPay = totalAmount + deliveryFee + otherFees;

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard title={item.title} price={item.price} imageUrl={item.imageUrl} />}
        contentContainerStyle={{ paddingBottom: 12 }} 
      />
      
      <View style={styles.summaryContainer}>
      <Text style={styles.summary}>Summary</Text>
        <Text style={styles.summaryText}>Total Items: {totalItems}</Text>
        <Text style={styles.summaryText}>Total Amount: ${totalAmount.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Delivery Fee: ${deliveryFee.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Other Fees: ${otherFees.toFixed(2)}</Text>
        <View style={styles.separator} />
        <Text style={styles.totalText}>Total Amount to Pay: ${totalToPay.toFixed(2)} pesos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    flex: 1, // Make sure it takes the full height
  },
  card: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  summary: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  summaryContainer: {
    padding: 6,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingBottom: 70,
    elevation: 2,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ViewOrders;
