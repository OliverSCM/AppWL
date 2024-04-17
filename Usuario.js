import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreUsuario: ""
    };
  }
//manejo de JSON
  componentDidMount() {
    // Recuperar el nombre de usuario desde las propiedades de la navegación
    const { route } = this.props;
    const { usuarioNombre } = route.params.usuarioNombre; // Nombre de variable
    // Actualizar el estado con el nombre de usuario recibido
    this.setState({ nombreUsuario: usuarioNombre });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Bienvenido, {this.state.nombreUsuario}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
