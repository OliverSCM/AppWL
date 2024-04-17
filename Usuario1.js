import React, { Component } from 'react';
import { View, ImageBackground, Alert, StyleSheet, Text } from 'react-native';

export default class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreUsuario: ""
    };
  }

  componentDidMount() {
    // Recuperar el nombre del usuario utilizando el ID almacenado en el estado
    const { usuarioID } = this.props.route.params;
    // Aquí deberías realizar una solicitud a la base de datos para obtener el nombre del usuario
    // Reemplaza esta lógica con tu propia implementación
    fetch(`https://protectopicucei.000webhostapp.com/getUserName.php?usuarioID=${usuarioID}`)
      .then(response => response.text())
      .then(data => {
        console.log("Datos recibidos:", data); // Imprimir datos recibidos en la consola
        // Actualizar el estado con el nombre del usuario
        this.setState({ nombreUsuario: data });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Bienvenido, {this.state.nombreUsuario}</Text>
      </View>
    );
  }
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
