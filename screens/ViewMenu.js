import { Text,View,FlatList,ActivityIndicator,StyleSheet} from "react-native";
import { useEffect,useState } from "react";


export default function ViewMenu () {
    const [data,setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMenu = async () => {
        try {
            const reponse = await fetch (
                'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
            );
            const json = await reponse.json()
            setData(json.menu)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    } 

    useEffect (()=>{
        getMenu()
    },[]);

    return (
    <View style={menuStyles.container}>
        {isLoading ? <ActivityIndicator size={'large'} color={'black'}/> :
        <FlatList style={menuStyles.list}
        data={data}
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
        />}
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