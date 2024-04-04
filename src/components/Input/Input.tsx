import React from 'react'
import { TextInput, StyleSheet } from 'react-native';

type InputType = {
  placeholder: string,
  valor: string,
  onChange: (e: { detail: string }) => void,
  tipo?: "ascii-capable" | "decimal-pad" | "default" | "email-address" | "name-phone-pad" | "number-pad" | "numbers-and-punctuation" |
  "numeric" | "phone-pad" | "twitter" | "url" | "visible-password" | "web-search",
  senha?: boolean
}

const Input = ({ placeholder, valor, onChange, tipo = 'default', senha = false }: InputType) => {
  return (
    <TextInput
      style={style.input}
      placeholder={placeholder}
      value={valor}
      onChangeText={(text) => onChange({ detail: text })}
      keyboardType={tipo}
      secureTextEntry={senha}
    />
  )
}

export default Input

const style = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000',
  }
})
