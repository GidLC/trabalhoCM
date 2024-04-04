import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from '../../components/Input/Input';
import Botao from '../../components/Botao/Botao';
import Select from '../../components/Select/Select';
import { validaEmail } from '../../funcoes/ValidaEmail/ValidaEmail';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoConta, setTipoConta] = useState('')

  const eventoSubmit = () => {
    if (!email || !nome || !senha || !tipoConta) {
      alert("Todos campos precisam ser preenchidos")
    } else {
      if (validaEmail({ email })) {
        alert("Cadastro realizado com sucesso")
        console.log({
          nome,
          email,
          senha
        })
        setEmail('')
        setNome('')
        setSenha('')

        navigation.navigate('Home')
      } else {
        alert("Esse E-mail não é um domínio válido do IFPR")
      }
    }

  }

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.titulo}>CADASTRE-SE</Text>
      </View>

      <View style={styles.main}>
        <Input
          placeholder="Nome"
          valor={nome}
          onChange={(e) => setNome(e.detail)}
        />
        <Input
          placeholder="E-mail"
          valor={email}
          onChange={(e) => setEmail(e.detail)}
          tipo="email-address"
        />
        <Input
          placeholder="Senha"
          valor={senha}
          onChange={(e) => setSenha(e.detail)}
          senha
        />
        <Text>Tipo de Conta:</Text>
        <Select valor={tipoConta} onChange={(e) => setTipoConta(e)} />
        <Botao titulo={'Cadastrar'} onPress={eventoSubmit} cor={"#219653"} largura={100} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 38
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#052F0E'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEFEFE'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FEFEFE'
  },
});

export default Cadastro;
