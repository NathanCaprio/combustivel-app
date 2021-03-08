import React from 'react'
import {View,Text,TextInput,StyleSheet,Image} from 'react-native'



     

const imgResultado = (props) => {
    return (
        <View style={Styles.bloco}>
            {
                props.comb == '' ?
                <Image
                source={require('../assets/images/questionmark.png')}
                style={Styles.image}
                /> 
                :

                props.comb == 'G' ?
                <Image
                source={require('../assets/images/gasolina.png')}
                style={Styles.image}
                />
               :
               <Image
                source={require('../assets/images/etanol.jpg')}
                style={Styles.image}
                /> 
              
                
            }
           
                

            
    
            
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
image:{
    justifyContent:'center',
    alignItems:'center',
    maxWidth:'90%',
    height:290
    
}

})

export default imgResultado
