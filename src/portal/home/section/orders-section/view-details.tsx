import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../types';
import GeolocationWebView from './geolocation/webview-map';

const ViewDetails: React.FC<{ route: RouteProp<RootStackParamList, 'ViewDetails'> }> = ({ route }) => {
  const { orderDetails } = route.params; // Access orderDetails
  const navigation = useNavigation(); // Hook to access navigation
  const geolocationRef = useRef(null); // Create a ref for GeolocationWebView

  return (
    <View style={styles.container}>
      {/* Back text */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Order Details</Text>
      <Text style={styles.detailText}>Order Number: {orderDetails.orderNumber}</Text>
      <Text style={styles.detailText}>Status: {orderDetails.status}</Text>
      <Text style={styles.detailText}>Name: {orderDetails.name}</Text>
      <Text style={styles.detailText}>Price: {orderDetails.price}</Text>

      <GeolocationWebView ref={geolocationRef} />
    </View>
  );
};

// Styles for ViewDetails
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1, // Make sure the container takes full height
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Ensure title color is black
  },
  backText: {
    color: 'black', // Set the color of the back text to black
    fontSize: 16,
    marginBottom: 20, // Add some space below the back text
  },
  detailText: {
    color: 'black', // Set the color of detail texts to black
    fontSize: 16,
  },
});

export default ViewDetails;
