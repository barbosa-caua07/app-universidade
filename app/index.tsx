import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default function Index() {
  const router = useRouter();

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    if (!cpf || !senha) {
      alert('Preencha CPF e senha');
      return;
    }

    // 👇 Simulação de usuário
    const nome = 'Felipe';

    router.replace({
      pathname: '/(tabs)/home',
      params: { nome }
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#888"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center'
  },
  content: {
    padding: 20
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#00A8FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});