import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import MeuEstilo from "../meuestilo";
import { auth, firestore } from "../firebase";

const Escrever = () => {
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [cor, setCor] = useState("");
  const [instrument, setInstrument] = useState("");

  const enviarDados = () => {
    firestore
      .collection("Instrumento")
      .add({
        modelo: modelo,
        marca: marca,
        cor: cor,
        instrument: instrument,
      })
      .then(() => {
        alert("Instrumento " + instrument + " Adicionado com Sucesso");
      });
  };

  const limparFormulario = () => {};

  return (
    <KeyboardAvoidingView style={MeuEstilo.containerlistar} behavior="padding">
      <View style={MeuEstilo.inputcontainerlistar}>
        <TextInput
          placeholder="Modelo"
          value={modelo}
          onChangeText={(text) => setModelo(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Marca"
          value={marca}
          onChangeText={(text) => setMarca(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Cor"
          value={cor}
          onChangeText={(text) => setCor(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Instrumento"
          value={instrument}
          onChangeText={(text) => setInstrument(text)}
          style={MeuEstilo.input}
        />
      </View>

      <View style={MeuEstilo.buttoncontainerlistar}>
        <TouchableOpacity onPress={enviarDados} style={MeuEstilo.button}>
          <Text style={MeuEstilo.buttonText}>Enviar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limparFormulario}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Limpar Formulario</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Escrever;
