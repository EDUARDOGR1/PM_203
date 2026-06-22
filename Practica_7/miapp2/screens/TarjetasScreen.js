import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Saludo } from '../components/Saludo';
import { Saludo2 } from '../components/Saludo2';
import { Perfil } from '../components/Perfil';

export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      <Text>------------ Componente Simple -----------</Text>
      <Saludo />

      <Text>------------ Componente Compuesto -----------</Text>
      <Saludo2 />

      <Text>------------ Componente Perfil -----------</Text>

      <Perfil
        nombre="Eduardo Gutierrez Rodriguez"
        carrera="Ingeniería en Sistemas"
        materia="Programación Móvil"
        cuatri="9"
      />

      <Perfil
        nombre="Amparo Rodriguez Arrendondo"
        carrera="Ingeniería en Sistemas"
        materia="Programación Móvil"
        cuatri="9"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});