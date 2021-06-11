import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image,Dimensions,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
//wimport{useNavigation,useTheme} from  '@react-navigation/native'

const Card=(props)=>{
 //const navigation=useNavigation()
 //const {colors}=useTheme()
 //const textcolor=colors. iconColor


    return(

        <TouchableOpacity
        onPress={()=>{
           // navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})
        }}
        >
        <View style={{marginBottom:10}}> 
        <TextInput  style={{ height: 40, marginTop:10,width:300, borderColor: 'black', borderWidth: 2,textAlign:'center' }}/>

    </View>

     </TouchableOpacity>
    )
}

export default Card