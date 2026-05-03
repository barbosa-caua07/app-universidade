import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

export default function Login() {
  const router = useRouter();

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  // 🔧 FORMATA CPF EM TEMPO REAL
  const formatarCPF = (value: string) => {
    // Remove tudo que não for número
    const cleanValue = value.replace(/\D/g, '');
    
    // Aplica a máscara progressivamente
    return cleanValue
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .substring(0, 14); // Limite de caracteres com máscara
  };

  // 🔐 VALIDAÇÃO SIMPLES DE ESTRUTURA
  const validarCampos = () => {
    const cpfLimpo = cpf.replace(/\D/g, '');

    if (cpfLimpo.length !== 11) {
      Alert.alert('Erro', 'O CPF deve conter exatamente 11 números.');
      return false;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres.');
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    if (!cpf || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (validarCampos()) {
      // Simulação de login
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      
      router.replace({
        pathname: '/(tabs)/home',
        params: { nome: 'Felipe' }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* KeyboardAvoidingView evita que o teclado cubra os inputs no iOS */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <Text style={styles.title}>Login</Text>

            <TextInput
              style={styles.input}
              placeholder="CPF (000.000.000-00)"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={cpf}
              maxLength={14}
              onChangeText={(text) => setCpf(formatarCPF(text))}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#888"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity 
              style={styles.button} 
              onPress={handleLogin}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/auth/esqueceu-senha')}>
                <text style={styles.forgotPassword}>Esqueceu sua senha?
                </text>
              </TouchableOpacity>

            <TouchableOpacity
              style={styles.link}
              onPress={() => router.push('/auth/cadastro')}
            >
              <Text style={styles.linkText}>
                Não tem conta? <Text style={{ fontWeight: 'bold' }}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#00A8FF',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#00A8FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginTop: 25,
    alignItems: 'center',
  },
  linkText: {
    color: '#00A8FF',
    fontSize: 15,
  },
  forgotPassword: {
  color: '#00A8FF',
  textAlign: 'right',
  marginBottom: 15,
  fontSize: 14
},
});