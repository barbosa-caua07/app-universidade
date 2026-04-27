import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState('');
  const [curso, setCurso] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  async function buscarCEP(value: string) {
    setCep(value);
    if (value.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setRua(data.logradouro);
          setCidade(data.localidade);
          setEstado(data.uf);
        }
      } catch (error) {
        console.log('Erro ao buscar CEP');
      }
    }
  }

  function handleCadastro() {
    console.log({ nome, cpf, idade, curso, cep, rua, cidade, estado });
    router.back(); // Volta para a tela de login após cadastrar
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Cadastro</Text>

        <View style={styles.form}>
          <TextInput placeholder="Nome Completo" placeholderTextColor="#888" onChangeText={setNome} style={styles.input} />
          <TextInput placeholder="CPF" placeholderTextColor="#888" onChangeText={setCpf} keyboardType="numeric" style={styles.input} />
          <TextInput placeholder="Idade" placeholderTextColor="#888" onChangeText={setIdade} keyboardType="numeric" style={styles.input} />
          <TextInput placeholder="Curso" placeholderTextColor="#888" onChangeText={setCurso} style={styles.input} />
          
          <TextInput 
            placeholder="CEP (apenas números)" 
            placeholderTextColor="#888" 
            value={cep} 
            onChangeText={buscarCEP} 
            keyboardType="numeric" 
            style={styles.input} 
          />
          
          <TextInput placeholder="Rua" placeholderTextColor="#888" value={rua} onChangeText={setRua} style={styles.input} />
          <TextInput placeholder="Cidade" placeholderTextColor="#888" value={cidade} onChangeText={setCidade} style={styles.input} />
          <TextInput placeholder="Estado" placeholderTextColor="#888" value={estado} onChangeText={setEstado} style={styles.input} />

          <TouchableOpacity style={styles.buttonPrimary} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Finalizar Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.linkText}>Voltar para o Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  scrollContent: { padding: 30, justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginBottom: 30, marginTop: 20 },
  form: { width: '100%' },
  input: { 
    backgroundColor: '#1E1E1E', color: '#FFF', borderWidth: 1, borderColor: '#333', 
    borderRadius: 8, padding: 15, marginBottom: 12, fontSize: 16 
  },
  buttonPrimary: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10, marginBottom: 20 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
  linkText: { color: '#007AFF', textAlign: 'center', fontSize: 14 }
});