import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Botao from '../../components/Botao/Botao'
import MessageBox from '../../components/MessageBox/MessageBox'

const Chat = () => {

    const [togle, setTogle] = useState<0 | 1 | 2>(0)

    const defineTogle = (tipo: 0 | 1 | 2) => {
        console.log(tipo)
        setTogle(tipo)
    }
    return (
        <View style={estilo.page}>
            <View style={estilo.header}>
                <Botao titulo={'Todos'} onPress={() => defineTogle(0)} cor={togle == 0 ? '#219653' : '#FEFEFE'} largura={100} />
                <Botao titulo={'Alunos'} onPress={() => defineTogle(1)} cor={togle == 1 ? '#219653' : '#FEFEFE'} largura={100} />
                <Botao titulo={'Professores'} onPress={() => defineTogle(2)} cor={togle == 2 ? '#219653' : '#FEFEFE'} largura={100} />
            </View>


            <View style={estilo.main}>

            </View>


            <View style={estilo.footer}>
                <MessageBox/>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 38
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    main: {
        flex: 1,
        backgroundColor: '#FEFEFE'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEFEFE',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    mensagemContainer: {
        backgroundColor: '#ECEAEA',
        borderRadius: 15,
        marginBottom: 20,
        height: 40
    },
    enviada: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
    },
    recebida: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5E5EA',
    },

})

export default Chat
