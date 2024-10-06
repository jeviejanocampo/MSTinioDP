import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerc: {
    marginTop: 80,
    left: 4,
  },
  rightImageContainer: {
    position: 'absolute',
    right: 26, 
    top: 24, 
  },
  rightImage: {
    width: 30, // Adjust the width of the image
    height: 30, // Adjust the height of the image
    resizeMode: 'contain', // Ensure the image scales correctly
  },
   profileContainer: {
    position: 'absolute',
    top: 0,
    left: 1,
    width: '80%', // Adjust to your liking
    height: '100%',
    backgroundColor: '#fff', // Background color for the profile curtain
    borderRightWidth: 1,
    borderRightColor: '#ccc', // Optional: border for separation
    zIndex: 1, // Ensure it's above other content
  },
  hamburgerContainer: {
    padding: 15, // Increased padding for easier tapping
    position: 'absolute', // Position it at the top left
    top: 4, // Adjust top position as needed
    left: 20, // Adjust left position as needed
    zIndex: 1, // Ensure it’s above other elements
  },
  container: {
    flex: 1,
    alignItems: 'center', // Center the content horizontally
    backgroundColor: '#f5f5f5', // Light gray background
  },
  logo: {
    width: 36, // Set the desired width of the image
    height: 36, // Set the desired height of the image
    right: 10,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    color: '#333', // Darker text color for contrast
    marginBottom: 20, // Space between header and text row
    textAlign: 'center',
  },
  textRow: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-around', // Space items evenly
    width: '100%', // Full width for row
    paddingHorizontal: 20, // Horizontal padding
    right: 6,
  },
  textContainer: {
    backgroundColor: '#03C85E99',
    padding: 12,
    borderRadius: 30,
  },
  textItem: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#fff', // White text color
    textAlign: 'center', // Center text
  },
  bodyContainer: {
    flexDirection: 'row', // Arrange cards in a row
    justifyContent: 'space-between', // Space cards evenly
    width: '100%', // Full width for container
    paddingHorizontal: 20, // Horizontal padding
    marginTop: 20, // Space between header and body
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Darker text color for contrast
    marginTop: 20, // Space between the text row and welcome message
  },
});

export default styles;
