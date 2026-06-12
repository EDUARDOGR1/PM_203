import { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export function Perfil({ nombre, carrera, materia, cuatri }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Button
        title={mostrar ? "Ocultar" : "Ver info"}
        onPress={() => setMostrar(!mostrar)}
      />
      {mostrar && (
        <View>
          <Text>Carrera: {carrera}</Text>
          <Text>Materia: {materia}</Text>
          <Text>Cuatrimestre: {cuatri}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 300,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});