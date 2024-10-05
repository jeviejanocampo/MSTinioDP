
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bodyContainer: {
    paddingBottom: 50,
    marginTop: 20,
  },
  dateFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 16,
  },
  todayText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  datePickerButton: {
    fontSize: 16,
    color: 'blue', 
  },
  noOrdersText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    marginVertical: 20,
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
  dateText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
});

export default styles;
