import React, {useState} from "react";

import {
    Text,
    TextInput,
    View,
    Pressable,
    Switch,
    Alert,
} from 'react-native'

export default function registroDeEventoUniversitario(){
    const [nombre, setNombre] = useState('');
    const [apellidoPaterno, setapellidoPaterno] = useState('');
    const [apellidoMaterno, setapellidoMaterno] = useState('');
    const [carrera, setCarrera] = useState('');
    const [cuatrimestre, setCuatrimestre] = useState('');
    const [taller, setTaller] = useState(false);
    const [deportes, setDeportes] = useState(false);
    const [constancia, setConstancia] = useState(false);
    
    const registroEnviado = () => {
        if (!nombre.trim() || !apellidoPaterno.trim() || !apellidoMaterno.trim() || !carrera.trim() || !cuatrimestre.trim()){
            confirmar();
        } else {
            Alert.alert(
                'Registro',
                `Nombre: ${nombre}\nApellido Paterno: ${apellidoPaterno}\nApellido Materno: ${apellidoMaterno}\nCarrera: ${carrera}\nCuatrimestre: ${cuatrimestre}\nTaller: ${taller ? 'Si' : 'No'}\nConstancia: ${constancia ? 'Si' : 'No'}\nDeportes: ${deportes ? 'Si' : 'No'}`,
                [
                    {
                        text: 'aceptar',
                        onPress: () => console.log('Se preciono aceptar'),
                    },
                ]
            );
        }
    }

    const confirmar = () => {
        Alert.alert(
            'Campos incompletos',
            'Debes llenar todos los campos',
            [
                {
                    text: 'aceptar',
                    onPress: () => console.log('Se preciono aceptar'),
                },
            ]
        );
    }

    return (
        <View>
            <TextInput 
            placeholder = "Escribe tu nombre"
            value = {nombre}
            onChangeText = {setNombre}>
            </TextInput>

            <TextInput 
            placeholder = "Escribe tu apellido Paterno"
            value = {apellidoPaterno}
            onChangeText = {setapellidoPaterno}>
            </TextInput>

            <TextInput 
            placeholder = "Escribe tu apellido Materno"
            value = {apellidoMaterno}
            onChangeText = {setapellidoMaterno}>
            </TextInput>

            <TextInput 
            placeholder = "Escribe tu carrera"
            value = {carrera}
            onChangeText = {setCarrera}>
            </TextInput>

            <TextInput 
            placeholder = "Escribe tu cuatrimestre actual"
            value = {cuatrimestre}
            keyboardType="numeric"
            onChangeText = {setCuatrimestre}>
            </TextInput>

            <Text> Asistira a taller? {taller ? 'Si' : 'No'}</Text>
            <Switch
            value = {taller}
            onValueChange={setTaller}
            trackColor={{false: '#ccc', true: '#81c784'}}
            thumbColor={taller ? '#2e7d32' : '#f4f3f4'}
            >
            </Switch>

            <Text> Requiere constancia? {constancia ? 'Si' : 'No'}</Text>
            <Switch
            value = {constancia}
            onValueChange={setConstancia}
            trackColor={{false: '#ccc', true: '#81c784'}}
            thumbColor={constancia ? '#2e7d32' : '#f4f3f4'}
            >
            </Switch>

            <Text> Participa en deportes? {deportes ? 'Si' : 'No'}</Text>
            <Switch
            value = {deportes}
            onValueChange={setDeportes}
            trackColor={{false: '#ccc', true: '#81c784'}}
            thumbColor={deportes ? '#2e7d32' : '#f4f3f4'}
            >
            </Switch>

            <Pressable onPress={registroEnviado}>
                <Text>Enviar Registro</Text>
            </Pressable>            

        </View>
    );
}