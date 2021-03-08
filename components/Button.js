import React from 'react'
import {View,TouchableHighlight,Text,StyleSheet} from 'react-native'
const Button = (props) => {
    return (
     <View style={Styles.bloco}>
         <TouchableHighlight 
         style={Styles.btn}
         onPress={props.aoPressionar}
         >
             <Text style={Styles.txtBtn}>Calcular</Text>
         </TouchableHighlight>

     </View>
    )
}

const Styles = StyleSheet.create({
    txt:{
        borderColor:"#000",
        borderWidth:1,
        borderRadius:4,
    },
    bloco:{
        marginBottom:10
    },
    btn:{
        backgroundColor: '#800',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 7,
        padding:15
    },
    txtBtn:{
      textTransform:'uppercase',
      color:'#ffff',
      
    }
    
    })
    
export default Button
