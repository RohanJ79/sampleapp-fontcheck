import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HomeScreen;
