import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
const Resultado = (props) => {
    return (
        <View style={Styles.bloco}>
            <Text>Melhor combustível:{props.resultado}</Text>
            
          
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
}

})

export default Resultado
