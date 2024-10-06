import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../types';
import GeolocationWebView from './geolocation/webview-map';
import styles from '../../../../../assets/css/use-view-d-css';
import ViewOrders from './orders/view-orders';

const ViewDetails: React.FC<{ route: RouteProp<RootStackParamList, 'ViewDetails'> }> = ({ route }) => {
  const { orderDetails } = route.params;
  const navigation = useNavigation();
  const geolocationRef = useRef(null);

  // State for the status text
  const [status, setStatus] = useState('Pending');
  const [modalVisible, setModalVisible] = useState(false); 
  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    setModalVisible(false); 
  };

  const data = [
    { key: 'details', content: renderOrderDetails() },
    { key: 'orders', content: <ViewOrders /> },
    { key: 'map', content: <GeolocationWebView ref={geolocationRef} /> },
  ];

  function renderOrderDetails() {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Order Details</Text>
        <Text style={styles.detailText}>Order Number: {orderDetails.orderNumber}</Text>
        <Text style={styles.detailText}>Address: {"Address Here"}</Text>
        <Text style={styles.detailText}>
        Payment Method: {"COD"}{" "}
        <Text style={{ color: 'white',fontWeight: 'bold', backgroundColor: 'red',  borderRadius: 5 }}>
          Pending
        </Text>
      </Text>

        <Text style={styles.detailText}>Name: {orderDetails.name}</Text>

        <View style={localStyles.detailsRow}>
          <Text style={[styles.detailText, { flex: 1, fontWeight: 500}]}>Order Status--------------------------------</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={localStyles.statusButton}>
            <Text style={localStyles.statusText}>{status}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ot}>Ordered Items</Text>
      </>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <View style={styles.container}>{item.content}</View>} 
        keyExtractor={(item) => item.key}
      />

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={localStyles.modalContainer}>
          <View style={localStyles.modalContent}>
            <Text style={localStyles.modalTitle}>Select Status</Text>
            <TouchableOpacity onPress={() => handleStatusChange('Confirmed')}>
              <Text style={localStyles.modalOption}>Confirmed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStatusChange('Cancelled')}>
              <Text style={localStyles.modalOption}>Cancelled</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStatusChange('Processing')}>
              <Text style={localStyles.modalOption}>Processing</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={localStyles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Local styles for the status button and modal
const localStyles = StyleSheet.create({
  detailsRow: {
    flexDirection: 'row',  // Align text and button horizontally
    alignItems: 'center',  // Vertically center the items
    marginVertical: 10,    // Add some spacing between elements
  },
  statusButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end', // Align the button to the right
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  modalOption: {
    fontSize: 16,
    marginVertical: 10,
    color: 'blue',
  },
  modalCancel: {
    fontSize: 16,
    marginTop: 20,
    color: 'red',
  },
});

export default ViewDetails;
