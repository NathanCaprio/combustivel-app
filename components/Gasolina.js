import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
const Gasolina = (props) => {
    return (
        <View style={Styles.bloco}>
            <Text>Valor da Gasolina</Text>
            <TextInput
            onChangeText={text=>props.aoModificar(text)}
            style={Styles.txt}
            keyboardType="number-pad"
            
            />
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

export default Gasolina
