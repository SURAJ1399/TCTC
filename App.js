import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button,Alert} from 'react-native';
import Card from './components/Card';

//const[loading,setloading]=useState(false)
const fetchData=()=>
{
       // setloading(true)
       
 
        fetch(`https://true-caller-clone.herokuapp.com/findByMobile/917278666854`)
    .then(res=>res.json())
    .then(data=>{console.log(data.items)
        
        //setloading(false)
        
    //   dispatch({type:"add",payload:data.items})
    

});
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontWeight:'bold',fontSize:14,fontFamily:'gotham'}}>Enter Your Number To Search</Text>
      <Card></Card>
      <Button
        title="Press me"
        style={{with:300}}
        onPress={() => fetchData()}
      />
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E07C24',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
