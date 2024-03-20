import { Text,View,FlatList,ActivityIndicator,StyleSheet} from "react-native";
import { useEffect,useState } from "react";
import menuList from "../menuItems.json"

export default function ViewMenu2 () {

    const result = menuList.menu

    return (
    <View style={menuStyles.container}>
        <FlatList style={menuStyles.list}
        data={result}
        renderItem={({item}) => (
        <View style={menuStyles.innerContainer}> 
            <Text style={menuStyles.listText}>
                {item.title}
            </Text>
            <Text style={menuStyles.listText}>
                {item.price}
            </Text>
        </View>)
        }
        />
    </View>
)

}

const menuStyles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center'
        },
        list:{
            backgroundColor:'olive',
        },
        innerContainer:{
            justifyContent:'space-between',
            flexDirection:'row',
            marginHorizontal:20,
            marginTop:80

        },
        listText:{
            fontSize:25,
            color:'white'
        }
    }
)