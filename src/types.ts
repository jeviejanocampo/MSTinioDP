// types.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined; // Define any other screens you have
  Orders: undefined; // No parameters for Orders screen
  ViewDetails: { orderDetails: { orderNumber: string; status: string; name: string; price: string; } }; 
  
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
