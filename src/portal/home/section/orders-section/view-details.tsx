import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList, ImageBackground } from 'react-native';
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
        <Text style={styles.detailText}>Address: {"Address Here"}</Text>
        <Text style={styles.detailText}>
          Payment Method: {"COD"}{" "}
          <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'red', borderRadius: 5 }}>
            Pending
          </Text>
        </Text>
        <Text style={styles.detailText}>Name: {orderDetails.name}</Text>

        <View style={styles.detailsRow}>
          <Text style={[styles.detailText, { flex: 1, fontWeight: 500 }]}>
            Order Status--------------------------------
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.statusButton}>
            <Text style={styles.statusText}>{status}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ot}>Ordered Items</Text>
      </>
    );
  }

  return (
    <ImageBackground
      source={require('../../../../../assets/backgroundimg/order-background.png')}
      style={{ flex: 1 }} 
    >
      <View style={{ padding: 20, paddingBottom: 0 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.backTextb}>Order Details</Text>
        
        <View style={styles.headerb}>
        <Text style={styles.title}>Order No : 23232</Text>
        <Text style={styles.subtitle}>December 26, 2024</Text>
        </View>

      </View>

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
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Status</Text>
            <TouchableOpacity onPress={() => handleStatusChange('Confirmed')}>
              <Text style={styles.modalOption}>Confirmed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStatusChange('Cancelled')}>
              <Text style={styles.modalOption}>Cancelled</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStatusChange('Processing')}>
              <Text style={styles.modalOption}>Processing</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default ViewDetails;
