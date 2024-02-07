import React from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Inicio = ({ navigation }) => {
  const handlePressVictor = () => {
    navigation.navigate('vg');
  };

  const handlePressPersonaFamosa = () => {
    navigation.navigate('hc');
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.contenedor}> 
        <Text style={styles.encabezado}>Mi Perfil</Text>
        <Button title="Victor Ramirez" onPress={handlePressVictor}/>
        <Text style={styles.encabezado}>Henry</Text>
        <Button title="Persona Famosa" onPress={handlePressPersonaFamosa}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center'
  },
  encabezado: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Inicio;
