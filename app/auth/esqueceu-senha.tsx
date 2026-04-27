import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function EsqueceuSenha() {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  function handleRecuperar() {
    console.log('Recuperar:', email, cpf);
    alert('Se os dados estiverem corretos, você receberá um e-mail de recuperação.');
    router.back();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Recuperar Senha</Text>
        <Text style={styles.subtitle}>Digite seus dados para receber as instruções.</Text>

        <View style={styles.form}>
          <TextInput 
            placeholder="E-mail Acadêmico" 
            placeholderTextColor="#888" 
            value={email} 
            onChangeText={setEmail} 
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input} 
          />
          
          <TextInput 
            placeholder="CPF" 
            placeholderTextColor="#888" 
            value={cpf} 
            onChangeText={setCpf} 
            keyboardType="numeric" 
            style={styles.input} 
          />

          <TouchableOpacity style={styles.buttonPrimary} onPress={handleRecuperar}>
            <Text style={styles.buttonText}>Enviar E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.linkText}>Cancelar e Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { flex: 1, justifyContent: 'center', paddingHorizontal: 30 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#888', textAlign: 'center', marginBottom: 30 },
  form: { width: '100%' },
  input: { 
    backgroundColor: '#1E1E1E', color: '#FFF', borderWidth: 1, borderColor: '#333', 
    borderRadius: 8, padding: 15, marginBottom: 15, fontSize: 16 
  },
  buttonPrimary: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10, marginBottom: 20 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
  linkText: { color: '#007AFF', textAlign: 'center', fontSize: 14 }
});