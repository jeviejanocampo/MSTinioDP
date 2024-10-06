import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native';

const AcceptOrders: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [status, setStatus] = useState('Pending');

  const orders = [
    { id: 1212, image: require('../../../../../assets/png/new-order.png') },
    { id: 1213, image: require('../../../../../assets/png/new-order.png') },
    { id: 1214, image: require('../../../../../assets/png/new-order.png') },
    { id: 1215, image: require('../../../../../assets/png/new-order.png') },
    { id: 1216, image: require('../../../../../assets/png/new-order.png') },
    { id: 1217, image: require('../../../../../assets/png/new-order.png') },
  ];

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    setModalVisible(false);
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.orderText}>Order No: #{item.id}</Text>
        <TouchableOpacity onPress={() => { setSelectedOrder(item.id); setModalVisible(true); }}>
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.acceptButton} onPress={() => { setSelectedOrder(item.id); setModalVisible(true); }}>
        <Text style={styles.acceptText}>Accept Order</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>New Orders</Text> 
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }} 
      />

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={localStyles.modalContainer}>
          <View style={localStyles.modalContent}>
            <TouchableOpacity 
              style={localStyles.closeButton} 
              onPress={() => setModalVisible(false)} 
            >
              <Text style={localStyles.closeButtonText}>X</Text> 
            </TouchableOpacity>
            <Text style={localStyles.modalTitle}>Accept Order? {selectedOrder}</Text>
            <TouchableOpacity onPress={() => handleStatusChange('Confirmed')}>
              <Text style={localStyles.modalOption}>Confirmed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStatusChange('Cancelled')}>
              <Text style={localStyles.modalOption}>Cancelled</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    backgroundColor: 'green',
    justifyContent: 'center',
    margin: 24,
    textAlign: 'center',
    color: 'white',
    padding: 6,
    borderRadius: 10,
    fontSize: 20,
  },
  card: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  orderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewDetailsText: {
    color: 'white',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    bottom: 12,
  },
  acceptButton: {
    marginLeft: 10,
  },
  acceptText: {
    color: '#28A745',
    fontWeight: 'bold',
  },
});

// Local styles for the status modal
const localStyles = StyleSheet.create({
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
    width: '80%', // Set a width for the modal content
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
  closeButton: {
    alignSelf: 'flex-end', // Align close button to the top right
  },
  closeButtonText: {
    fontSize: 20,
    color: 'red', // Color of the close button
    fontWeight: 'bold',
  },
});

export default AcceptOrders;
