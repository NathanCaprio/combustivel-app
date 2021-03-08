import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView, } from 'react-native';
import Gasolina from './components/Gasolina'
import Etanol from './components/Etanol'
import Button from './components/Button'
import Resultado from './components/Resultado'
import ImgResultado from './components/imgResultado'
export default function App() {
  const [gasolina,setGasolina] = useState(0)
  const [etanol,setEtanol] = useState(0)
  const [resultado,setResultado] = useState('')

  const calcular = () =>{
    if (!gasolina){
      alert("Informe o preço da Gasolina")
      return
    }
    if (!etanol){
      alert("Informe o preço do Etanol")
      return
    }

    let res
    let calc = ((etanol/gasolina)*100).toFixed(1)
    if (calc > 70){
      res = 'Gasolina'
    }
    else{
      res='Etanol'
    }
    alert('O Etanol está custando ' + calc + '% da Gasolina. é melhor abastecer com ' + res)
    setResultado(res)
  }

  const limpar = ()=>{
    setResultado('')
  }
  const setarGasolina = (v)=>{
    limpar()
    setGasolina(v)
  }
  const setarEtanol = (v)=>{
    limpar()
    setEtanol(v)
  }


  return (
   <SafeAreaView style={styles.container}>

    <Gasolina aoModificar={setarGasolina}/>
    <Etanol aoModificar={setarEtanol}/>
    <Button aoPressionar={calcular}/>
    <Resultado resultado={resultado}/>
    
    <ImgResultado comb={resultado.charAt(0)}/>
   
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10
  },
});
