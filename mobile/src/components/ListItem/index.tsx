import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ItemProps {
  data:{
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  }
}

export function ListItem({}: ItemProps) {
  return(
    <View style={styles.container}>
      <Text>ITEM DA LISTA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#101026',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});