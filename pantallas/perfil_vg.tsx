import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  
const perfil_vg = () =>{
    return (
        <SafeAreaView>
          <ScrollView
            contentContainerStyle={styles.svContenedor}
            contentInsetAdjustmentBehavior="automatic">
            <Text 
              style={styles.encabezado}>Victor Manuel Ramirez Escobar
            </Text>
            <Image 
              style={styles.fotoPerfil} 
              source={require('../imagenes/foto.jpg')}
            />
             <View style={styles.Seccion}>
              <Text style={styles.seccionheader}>Lugar de Nacimiento:</Text>
              <Text style={styles.seccionContent}>Honduras Tegucigalpa</Text>
            </View>
            <View style={styles.Seccion}>
              <Text style={styles.seccionheader}>Fecha de Nacimiento:</Text>
              <Text style={styles.seccionContent}>6 de octubre del 2001</Text>
            </View>
            <View style={styles.Seccion}>
              <Text style={styles.seccionheader}>Pasatiempos:</Text>
              <Text style={styles.seccionContent}>Jugar Videojuegos y gimnasio</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
      
}
const styles = StyleSheet.create({
    encabezado:{
      fontSize:30,
      fontWeight: 'bold',
      color: 'black'
    },
    svContenedor:{
        alignItems: 'center'
    },
    fotoPerfil:{
      width:  200,
      height: 220,
    },
    Seccion: {
      flexDirection: 'row',
      marginTop: 10,
    },
    seccionheader:{
      fontSize: 18,
      fontWeight: 'bold',
    },
  seccionContent:{
    fontSize:18,
    marginStart:5
  },
  });

  export default perfil_vg;