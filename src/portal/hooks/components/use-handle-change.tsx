import { useRef } from 'react';
import { TextInput } from 'react-native';

const useHandleChange = (pin: string[], setPin: (pin: string[]) => void) => {
  const inputRefs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];

  const handleChange = (text: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = text.replace(/[^0-9]/g, ''); // Allow only numeric input
    setPin(newPin);

    // Move to the next input field
    if (text.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus(); // Focus on the next input
    }
    // Move to the previous input field
    if (text.length === 0 && index > 0) {
      inputRefs[index - 1].current?.focus(); // Focus on the previous input
    }
  };

  return { handleChange, inputRefs };
};

export default useHandleChange;
