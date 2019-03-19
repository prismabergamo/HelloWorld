/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text,TextInput, View} from 'react-native';

type Props = {};
export default class App extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      altura: 0,
      peso: 0,
      resultado: 0,
      resultadoTexto: "" 
    }
    this.calcula = this.calcula.bind(this)
  }
  calcula(){
    let imc = this.state.peso/(this.state.altura*this.state.altura)
    let s = this.state
    s.resultado = imc
    this.setState(s)
    if(s.resultado<16){
      s.resultadoTexto = "magreza leve"
    }
    else if(s.resultado<17){
        s.resultadoTexto = "Magreza moderada"
    }
    else if(s.resultado<18.5){
      s.resultadoTexto = "Magreza leve"
    }
    else if(s.resultado<25){
      s.resultadoTexto = "Saudavel"
    }
    else if(s.resultado<30){
      s.resultadoTexto = "Sobrepeso"
    }
    else if(s.resultado<35){
      s.resultadoTexto = "Obesidade grau 1"
    }
    else if(s.resultado<40){
      s.resultadoTexto = "Obesidade grau 2"
    }
    else{
      s.resultadoTexto = "Obesidade grau 3"
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.entradas}>
         <TextInput placeholder="Altura" keyboardType="numeric" underlineColorAndroid="transparent" style= {styles.input} onChangeText={(altura) => this.setState({altura})}></TextInput>
         <TextInput placeholder="Massa" keyboardType="numeric" underlineColorAndroid="transparent" style= {styles.input} onChangeText={(peso) => this.setState({peso})}></TextInput>
         </View>
        <TouchableOpacity onPress={this.calcula} style={styles.button}><Text style={styles.buttonText}>CALCULAR</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.input,{fontSize:35}]}>{this.state.resultadoTexto}</Text>
        </View>   
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: "#F5FCFF"
   
  },
  entradas:{
    flexDirection: 'row',
  },
  input:{
    height: 80,
    textAlign: 'center',
    width: "50%",
    fontSize:50,
    marginTop:24,
    color:"lightgray"
  },
  resultado:{
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 65,
    padding:15
  },
  button:{
    backgroundColor: "#89ffa5",
    alignSelf: 'center'
  },
  buttonText:{
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color:"#6dc4a4",
    fontWeight: 'normal',    
  }
});
