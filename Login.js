import React, { Component } from 'react';
import { View, ImageBackground, Alert, StyleSheet } from 'react-native';
import { Button, Input, Icon } from '@rneui/base';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siono: 0,
      correo: "",
      password: "",
      nombre: "",
      direccion: "",
      telefono: "",
      backgroundImage: require('./imagenes/fondo1.jpg'),
      usuarioNombre: "", // Agrega estado para el nombre del usuario
    };
  }

  login = () => {
    this.setState({ siono: 1, backgroundImage: require('./imagenes/fondo3.jpg') });
  }

  alta = () => {
    this.setState({ siono: 2, backgroundImage: require('./imagenes/fondo2.jpg') });
  }

  entrar = () => {
    const { correo, password } = this.state;
  
    fetch(`https://protectopicucei.000webhostapp.com/login.php?correo=${correo}&password=${password}`)
    .then(response => response.text())
    .then(data => {
      console.log("Respuesta del servidor:", data); // Verificar la respuesta del servidor en la consola
      switch (data) {
        case "Usuario no encontrado":
          Alert.alert('Error', 'Usuario no dado de alta');
          break;
        case "Contraseña incorrecta":
          Alert.alert('Error', 'Contraseña incorrecta, intenta de nuevo');
          break;
        default:
          // Si el resultado no es un error, asumimos que es el ID del usuario
          const usuarioID = parseInt(data);
          // Si el ID del usuario es válido, navega a la pantalla del usuario
          if (usuarioID) {
            console.log("ID del usuario:", usuarioID); //desglosar JSON de data
             // Verificar el ID del usuario en la consola
            // Aquí se navega a la pantalla del usuario y se pasa el ID del usuario como parámetro
            this.props.navigation.navigate("Usuario", { usuarioID, usuarioNombre: data });

          }
          break;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={this.state.backgroundImage} style={styles.background}>
          <View style={styles.buttonsContainer}>
            <Button
              title="Login"
              icon={{
                name: 'user',
                type: 'font-awesome',
                size: 25,
                color: 'white',
              }}
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.loginButton}
              containerStyle={styles.buttonContainer}
              onPress={this.login}
            />
            <Button
              title="Alta"
              icon={{
                name: 'user-plus',
                type: 'font-awesome',
                size: 25,
                color: 'white',
              }}
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.signupButton}
              containerStyle={styles.buttonContainer}
              onPress={this.alta}
            />
          </View>
          {this.state.siono === 1 &&
            <View style={styles.formContainer}>
              <Input
                placeholder='Correo'
                onChangeText={correo => this.setState({ correo })}
                placeholderTextColor="white"
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: "white" }} // Cambia el color del icono y el texto a blanco
                inputStyle={{ color: "white" }} // Cambia el color del texto a blanco
                containerStyle={styles.inputContainer}
              />
              <Input
                placeholder='Contraseña'
                onChangeText={password => this.setState({ password })}
                secureTextEntry={true}
                placeholderTextColor="white"
                leftIcon={{ type: 'font-awesome', name: 'lock', color: "white" }} // Cambia el color del icono y el texto a blanco
                inputStyle={{ color: "white" }} // Cambia el color del texto a blanco
                containerStyle={styles.inputContainer}
              />
              <Button
                title="Entrar"
                icon={<Icon name="arrow-right" color="white" />}
                onPress={this.entrar}
                buttonStyle={styles.submitButton}
                containerStyle={styles.submitButtonContainer}
              />
            </View>
          }
          {this.state.siono === 2 &&
            <View style={styles.formContainer}>
              <Input
                placeholder='Correo'
                placeholderTextColor="white"
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: "white" }} // Cambia el color del icono y el texto a blanco
                inputStyle={{ color: "white" }} // Cambia el color del texto a blanco
                containerStyle={styles.inputContainer}
              />
              <Input
                placeholder='Contraseña'
                placeholderTextColor="white"
                secureTextEntry={true}
                leftIcon={{ type: 'font-awesome', name: 'lock', color: "white" }} // Cambia el color del icono y el texto a blanco
                inputStyle={{ color: "white" }} // Cambia el color del texto a blanco
                containerStyle={styles.inputContainer}
              />
              <Input
                placeholder='Nombre'
                placeholderTextColor="white"
                onChangeText={nombre => this.setState({ nombre })}
                leftIcon={{ type: 'font-awesome', name: 'user', color: "white" }} // Cambia el color del icono y el texto a blanco
                inputStyle={{ color: "white" }} // Cambia el color del texto a blanco
                containerStyle={styles.inputContainer}
              />
              <Input
                placeholder='Dirección'
                placeholderTextColor="white"
                onChangeText={direccion => this.setState({ direccion })}
                leftIcon={{ type: 'font-awesome', name: 'map', color: "white" }} // Cambia el color del icono y el texto a blanco
                inputStyle={{ color: "white" }} // Cambia el color del texto a blanco
                containerStyle={styles.inputContainer}
              />
              <Input
                placeholder='Teléfono'
                placeholderTextColor="white"
                onChangeText={telefono => this.setState({ telefono })}
                leftIcon={{ type: 'font-awesome', name: 'phone', color: "white" }} // Cambia el color del icono y el texto a blanco
                inputStyle={{ color: "white" }} // Cambia el color del texto a blanco
                containerStyle={styles.inputContainer}
              />
              {/* Agregar más inputs según sea necesario para el formulario de alta */}
            </View>
          }
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonTitle: {
    fontWeight: '700',
  },
  loginButton: {
    backgroundColor: 'rgba(90, 154, 230, 1)',
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: 'rgba(42, 86, 150, 1)',
    borderRadius: 30,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 20,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  submitButtonContainer: {
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: 'red',
    borderRadius: 30,
  },
});
