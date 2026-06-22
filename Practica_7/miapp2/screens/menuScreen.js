import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './safeAreaScreen';
import PressableSwitchScreen from './PressableSwitchScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import FlatListSectionListScreen from './FlatListSectionListScreen';
import ImageBackgroundSplashScreen from './ImageBackgroundSplashScreen';
import ActivityKeyboardScreen from './ActivityKeyboardScreen';
import ModalBottomSheetScreen from './ModalBottomSheetScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;

    case 'safeArea':
      return <SafeAreaScreen />;

    case 'pressableSwitch':
      return <PressableSwitchScreen />;

    case 'textInputAlert':
      return <TextInputAlertScreen />;

    case 'flatListSectionList':
      return <FlatListSectionListScreen />;

    case 'imageBackgroundSplash':
      return <ImageBackgroundSplashScreen />;

    case 'activityKeyboard':
      return <ActivityKeyboardScreen />;

    case 'modalBottomSheet':
      return <ModalBottomSheetScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>

          <View style={styles.button}>
            <Button color="#8c2f52" title="Tarjetas" onPress={() => setScreen('tarjetas')} />
          </View>

          <View style={styles.button}>
            <Button color="#8c2f52" title="Safe Area" onPress={() => setScreen('safeArea')} />
          </View>

          <View style={styles.button}>
            <Button color="#8c2f52" title="Pressable & Switch" onPress={() => setScreen('pressableSwitch')} />
          </View>

          <View style={styles.button}>
            <Button color="#8c2f52" title="TextInput & Alert" onPress={() => setScreen('textInputAlert')} />
          </View>

          <View style={styles.button}>
            <Button color="#8c2f52" title="FlatList & SectionList" onPress={() => setScreen('flatListSectionList')} />
          </View>

          <View style={styles.button}>
            <Button color="#8c2f52" title="ImageBackground & SplashScreen" onPress={() => setScreen('imageBackgroundSplash')} />
          </View>

          <View style={styles.button}>
            <Button color="#8c2f52" title="ActivityIndicator & KeyboardAvoidingView" onPress={() => setScreen('activityKeyboard')} />
          </View>

          <View style={styles.button}>
            <Button color="#8c2f52" title="Modal & Bottom Sheet" onPress={() => setScreen('modalBottomSheet')} />
          </View>

          <StatusBar style="light" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d1126',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#e8c9a0',
  },
  button: {
    width: '100%',
    marginVertical: 6,
  },
});