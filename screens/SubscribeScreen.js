import * as React from 'react';
import { View, Image, TextInput, StyleSheet, Text} from 'react-native';

const SubscribeScreen = () => {
  return(
    <View style={substyles.container}>
      <Image 
      source={require('../assets/little-lemon-logo-grey.png')}
      style={substyles.img}/>
      <Text style={substyles.outertext}>
        Subscribe to our Newsletter for our latest delicious recipes!
      </Text>
    </View>
  )
};

export default SubscribeScreen;

const substyles=StyleSheet.create({
  container:{
    display:'flex',
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
  }
})