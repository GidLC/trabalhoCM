import { Picker } from '@react-native-picker/picker'
import { StyleSheet, View } from 'react-native'
import React from 'react'

type PropsType = {
    valor: string,
    onChange: (e: any) => void
}

const Select = ({ valor, onChange }: PropsType) => {
    return (
        <View style={style.select}>
            <Picker
                selectedValue={valor}
                onValueChange={onChange}
                placeholder='Tipo da conta'>
                <Picker.Item label="Aluno" value="aluno" />
                <Picker.Item label="Professor" value="professor" />
            </Picker>
        </View>
    )
}

export default Select

const style = StyleSheet.create({
    select: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingBottom: 50,
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#fff',
        color: '#000',
    }
})
