import React, { useEffect, useState } from 'react'
import { Button, TextInput, StyleSheet, View } from 'react-native'
import Botao from '../Botao/Botao'

const MessageBox = () => {
    const [mensagem, setMensagem] = useState<string>()
    const [nome, setNome] = useState<string>()

    useEffect(() => {
        setNome('Admin')
    },[])

    const enviaMensagem = () => {
        const data = new Date()
        const dataEnvio = data.toLocaleTimeString()
        console.log({nome, mensagem, dataEnvio})
    }
    return (
        <View style={estilo.componente}>
            <TextInput style={estilo.input} placeholder="Digite sua Mensagem" onChangeText={(text) => setMensagem(text)}></TextInput>
            <Botao titulo={'ENVIAR'} onPress={enviaMensagem} cor={'#219653'} largura={60} />
        </View>
    )
}

export default MessageBox

const estilo = StyleSheet.create({
    componente: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEFEFE',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        padding: 5,
        marginBottom: 2,
        width: '80%',
        minHeight: 50,
        marginRight: -8
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
