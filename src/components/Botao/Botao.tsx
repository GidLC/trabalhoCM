import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

type BotaoType = {
    titulo: string,
    onPress: () => void,
    cor: string,
    largura: number
}

const Botao = ({titulo, onPress, cor, largura}: BotaoType) => {
  return (
    <TouchableOpacity style={[styles.botao, {backgroundColor: cor, margin: 10, width: largura}]} onPress={onPress}>
        <Text>{titulo}</Text>
    </TouchableOpacity>
  )
}

export default Botao

const styles = StyleSheet.create({
    botao: {
        height: 50,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})