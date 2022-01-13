import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { StyleSheet, View } from 'react-native';

const Box = () => {
  const tw = useTailwind();
  return <View style={[styles.box, tw('bg-black h-[100px] w-[100-px]')]} />;
}

const styles = StyleSheet.create({
  box: {
    transform: { scale: 2 },
  }
});

export default Box;
