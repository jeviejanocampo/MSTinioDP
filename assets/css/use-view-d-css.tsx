import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container fills the available space
    paddingHorizontal: 20, // Adds horizontal padding inside the container
    paddingVertical: 10,  // Optional: Add vertical padding for spacing
  },
  title: {
    top: 6,
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    color: 'black',
  },
  headerb: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 16,
  },
  subtitle: {
    marginTop: 14,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: 'gray',
    bottom: 20,
  },
  
  backText: {
    fontFamily: 'Roboto-Bold',
    color: 'white', 
    fontSize: 16,
    marginBottom: 20, 
  },
  backTextb: {
    fontFamily: 'Roboto-Medium',
    color: 'white', 
    fontSize: 20,
    marginBottom: 20, 
    textAlign: 'center',
  },
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
  detailText: {
    marginTop: 4,
    color: '#003D60', 
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  detailTexts: {
    color: 'black', 
    fontSize: 16,
  },
  ot: {
    fontFamily: 'Roboto-SemiBold',
    top: 10,
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default styles;
