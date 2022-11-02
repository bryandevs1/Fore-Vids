import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

import ContaactList from './src/screens/contactScreen/index'
import CallingScreen from './src/screens/CallScreen';
import IncomingCall from './src/screens/IncomingCall';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style='dark' />
      <IncomingCall />
    </SafeAreaView>
  );
}
