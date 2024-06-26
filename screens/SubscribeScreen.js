import * as React from 'react';
import { View, Image, TextInput, StyleSheet, Text,Pressable, Alert} from 'react-native';
import { useState } from 'react';
import { validateEmail } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const alertmsg = ()=> Alert.alert('Subscribed','Thank you stay tuned!',[{text:'Dismiss'}])
const alertmsg2 = ()=> Alert.alert('Error','This is not an email',[{text:'Dismiss'}])
const SubscribeScreen = () => {
  const [showemail, setshowemail]=useState('');

  
  return(
    <View style={substyles.container}>
      <Image 
      source={require('../assets/little-lemon-logo-grey.png')}
      style={substyles.img}/>
      <Text style={substyles.outertext}>
        Subscribe to our Newsletter for our latest delicious recipes!
      </Text>
      <TextInput
      placeholder='Type your email'
      value={showemail}
      onChangeText={setshowemail}
      style={substyles.input}
      keyboardAppearance='dark'
      />
      <Pressable 
      onPress={showemail.includes('@')?alertmsg:alertmsg2}
      style={showemail===''?substyles.buttondisabled:substyles.button}
      disabled={showemail===''?true:false}>
        <Text style={substyles.buttontxt}>Subscribe</Text>
      </Pressable>
    </View>
  )
};

export default SubscribeScreen;

const substyles=StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'space-around',
  },
  img:{
    alignSelf:'center',
    resizeMode:'contain',
    width:200,
    height:200,
    marginTop:20
  },
  outertext:{
    alignSelf:'center',
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10,
    marginHorizontal:20
  },
  input:{
    alignSelf:'center',
    borderColor:'black',
    borderWidth:2,
    marginTop:20,
    borderRadius:5,
    padding:10,
    paddingVertical:5,
    width:380,
    height:40
  },
  button:{
    marginTop:15,
    width:380,
    height:40,
    alignSelf:'center',
    backgroundColor:'olive',
    borderRadius:5,
    alignContent:'center',
    justifyContent:'center',

  },
  buttondisabled:{
    marginTop:15,
    width:380,
    height:40,
    alignSelf:'center',
    backgroundColor:'olive',
    borderRadius:5,
    alignContent:'center',
    justifyContent:'center',
    opacity:.5
  },
  buttontxt:{
    alignSelf:'center',
    color:'white',
    fontSize:15,
    fontWeight:'bold'
  }
})