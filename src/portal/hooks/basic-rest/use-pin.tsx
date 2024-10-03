import { Alert } from 'react-native';

export const verifyPin = async (pin: string[]) => {
    const userPin = pin.join(''); // Combine the PIN array to a single string (e.g., '1234')

    try {
        const response = await fetch('http://192.168.1.32/capstone-template/basic-rest/use-pin.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_pin: userPin }), // Send the PIN to the backend
        });

        // Check if the response is OK (status 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text(); // Get the raw response text
        const cleanedText = text.replace(/^[^{\[]*/, ''); // Clean the response to remove any non-JSON text

        let result;
        try {
            // Use a similar method for cleaning as you suggested
            const jsonResponse = cleanedText; // Use the cleaned text directly for parsing
            result = JSON.parse(jsonResponse); // Parse the cleaned JSON text
        } catch (error) {
            console.error('Error parsing JSON:', error);
            Alert.alert('Error', 'Invalid response from the server');
            return false;
        }

        // Check if the response indicates success
        if (result.success) {
            Alert.alert('Welcome User', 'PIN verified successfully!');
            return true; // Return true to indicate successful verification
        } else {
            Alert.alert('Error', result.message || 'Incorrect PIN. Please try again.');
            return false;
        }
    } catch (error) {
        Alert.alert('Error', 'An error occurred while verifying the PIN: ');
        console.log('Error:', error);
        return false; // Return false to indicate failure
    }
};
