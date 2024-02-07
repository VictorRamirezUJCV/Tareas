import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Evaluacion from './Evaluacion';

const famoso_hc = () => {
  const [calificacion, setCalificacion] = useState(0);
  const handleCalificacionChange = (valor: number) => {
    setCalificacion(valor);
  };
  
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.svContenedor} contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.encabezado}>Henry Cavill</Text>
        <Image style={styles.fotoPerfil} source={require('../imagenes/henry_cavill.jpeg')}/>
        {}
        <Evaluacion calificacion={calificacion} onCalificacionChange={handleCalificacionChange} />
        <View style={styles.Seccion}>
          <Text style={styles.seccionheader}>Lugar de Nacimiento:</Text>
          <Text style={styles.seccionContent}>Jersey, Islas del Canal</Text>
        </View>
        <View style={styles.Seccion}>
          <Text style={styles.seccionheader}>Fecha de Nacimiento:</Text>
          <Text style={styles.seccionContent}>5 de mayo de 1983</Text>
        </View>
        <View style={styles.Seccion}>
          <Text style={styles.seccionheader}>Pasatiempos:</Text>
          <Text style={styles.seccionContent}>Actuar, hacer ejercicio</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  svContenedor: {
    alignItems: 'center'
  },
  fotoPerfil: {
    width: 200,
    height: 220,
  },
  Seccion: {
    flexDirection: 'row',
    marginTop: 10,
  },
  seccionheader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seccionContent: {
    fontSize: 18,
    marginStart: 5
  },
});

export default famoso_hc;
