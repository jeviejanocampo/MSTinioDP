import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Button, Alert, Modal, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { WebView } from 'react-native-webview';
import MapIcon from '../../../../../../assets/png/map-icon.png';

interface GeolocationWebViewProps {
  // Define any props that you expect to pass to this component
}

const GeolocationWebView = forwardRef((props: GeolocationWebViewProps, ref) => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted.');
        getCurrentLocation();
      } else {
        console.log('Location permission denied.');
        Alert.alert(
          'Location Permission Denied',
          'Please enable location services to use this feature.',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        console.log('Current Latitude:', latitude);
        console.log('Current Longitude:', longitude);
      },
      error => {
        console.error('Error getting current location:', error);
        Alert.alert('Error', 'Failed to get your current location.');
      },
      { enableHighAccuracy: false, timeout: 40000, maximumAge: 1000 }
    );
  };

  useImperativeHandle(ref, () => ({
    getCurrentLocation,
    latitude,
    longitude,
  }));

  const openGoogleMaps = () => {
    if (latitude !== null && longitude !== null) {
      setModalVisible(true);
    } else {
      Alert.alert('Error Fetching Location, Retrying.....');
    }
  };

  const renderMap = () => {
    if (latitude !== null && longitude !== null) {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      return (
        <WebView 
          source={{ uri: mapUrl }} 
          style={{ flex: 1 }} 
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      );
    }
    return <Text>Loading map...</Text>;
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.webViewContainer}>
            <Button title="Close Map" onPress={() => setModalVisible(false)} />
            {renderMap()}
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.mapButton} onPress={openGoogleMaps}>
        <Image source={MapIcon} style={styles.mapIcon} />
        <Text style={styles.mapButtonText}>View My Map</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  webViewContainer: {
    width: '100%',
    height: '94%',
    backgroundColor: 'white',
  },
  mapButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3, 
  },
  mapIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  mapButtonText: {
    fontSize: 16,
    color: '#007BFF',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default GeolocationWebView;
