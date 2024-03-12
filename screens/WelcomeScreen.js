import * as React from 'react';
import { View, Image, Pressable, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={welcomestyles.container}>
      <Image 
      source={require('../assets/little-lemon-logo.png')}
      style={welcomestyles.logo} />
      <Text style={welcomestyles.welcometext}>
        Little lemon your local Mediterranean Bistro
      </Text>
      <Pressable style={welcomestyles.button}
      onPress={()=>navigation.navigate('Subscribe')}>
        <Text style={welcomestyles.buttontxt}>
          Newsletter
        </Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const welcomestyles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1
  },
  logo:{
    resizeMode: 'contain',
    height:300,
    width:400,
    alignSelf:'center',
    marginTop:100
  },
  welcometext:{
    alignSelf:'center',
    fontSize:32,
    marginTop:50,
    fontWeight:"bold",
    textAlign:'center'
  },
  button:{
    alignSelf:'center',
    backgroundColor:'olive',
    paddingHorizontal:100,
    paddingVertical:10,
    borderRadius:8,
    marginTop:50
  },
  buttontxt:{
    fontSize:20,
    color:'white'
  }
})
