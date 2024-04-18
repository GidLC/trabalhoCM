import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Botao from '../../components/Botao/Botao'
import Input from '../../components/Input/Input'
import { validaEmail } from '../../funcoes/ValidaEmail/ValidaEmail'
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

type UsuarioType = {
    email: string,
    senha: string
}

const Home = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const eventoSubmit = async () => {
        if (!email || !senha) {
            alert("Todos campos precisam ser preenchidos")
        } else {
            if (validaEmail({ email })) {
                try {
                    /*const querySnapshot = await getDocs(collection(db, "usuarios"))
                    querySnapshot.forEach((doc) => {
                        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
                    })*/

                    const usuariosRef = collection(db, "usuarios")

                    const querySnapshot = query(usuariosRef, where("email", "==", email))
                    if(querySnapshot) {
                        const usuarios = await getDocs(querySnapshot)
                        usuarios.forEach((usuario) => {
                            if(usuario.data().senha == senha) {
                                navigation.navigate('Chat')
                            } else {
                                alert("Senha Incorreta")
                            }
                        })
                    }

                } catch (error) {
                    console.error("Erro ao encontrar usuário")
                }
            } else {
                alert("Esse E-mail não é um domínio válido do IFPR")
            }
        }
    }

    return (
        <View style={style.page}>
            <View style={style.header}>
                <View style={style.imagemFundo}>
                    <Image
                        style={style.perfil}
                        source={require('../../../assets/icon.png')}
                    />
                </View>

                <View style={style.info}>
                    <Text style={style.textoGrande}>
                        Acesso ao Chat
                    </Text>
                    <Text style={style.textoPequeno}>
                        Use seu e-mail e senha cadastrados para acessar o painel de conversas
                    </Text>
                </View>
            </View>

            <View style={style.main}>
                <Input placeholder={'E-mail'} valor={email} onChange={(e) => setEmail(e.detail)} tipo="email-address" />
                <Input placeholder={'Senha'} valor={senha} onChange={(e) => setSenha(e.detail)} senha tipo="default" />
            </View>

            <View style={style.footer}>
                <Botao titulo={'Login'} onPress={eventoSubmit} cor={'#FEFEFE'} largura={300} />
                <Botao titulo={'Cadastrar'} onPress={() => navigation.navigate('Cadastro')} cor={'#219653'} largura={300} />
            </View>
        </View>
    )
}

export default Home

const style = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#052F0E',
        marginTop: 38
    },

    footer: {
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 50
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    header: {
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 50
    },

    textoPequeno: {
        color: "#FEFEFE"
    },

    textoGrande: {
        color: "#FEFEFE",
        fontSize: 30,
    },

    imagemFundo: {
        width: 400,
        height: 130,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    info: {
        width: 180,
    },

    perfil: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 50
    }
})
