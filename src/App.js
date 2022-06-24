import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import {Github} from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';
import Card from './components/card'

const App = () => {


  function handleRedeSocial(redes_social){
    switch(rede_social){
      case 'linkedin' : 
      Alert.alert('Meu linkedin', 'https://linkedin.com/in/nathassiaalmeida')
      break
      case 'github' : 
      Alert.alert('Meu GitHub', 'https://github.com/nathassiaalmeida')
      break
      case 'facebook' : 
      Alert.alert('Meu Facebook', 'https://facebook.com/nathassiaalmeida')
      break
    }
  }


  return (
    <>
      <View style={style.page}>

        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>Nathássia Almeida</Text>
          <Text style={style.funcao}>Desenvolvedora Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiência Profissional</Text>
            </View>
              <View style={style.card_content}>
              <Text style={style.card_content_text}>Psicóloga clínica- consultório</Text>
              <Text style={style.card_content_text}>Pedal Shop - Vendedora</Text>
              <Text style={style.card_content_text}>Pimenta e Associados -RH</Text>
              </View>
          </View>
        </View>

        <Card titulo="Formação Acadêmica"/>
        <Card titulo="Experiência Profissional"/>

      </View>
    </>

  );
};

const style = StyleSheet.create({

  page:{
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,

  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,

  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },

 
});


export default App;