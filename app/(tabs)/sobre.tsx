import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sobre o App</Text>
        <Text style={styles.version}>Versão 1.0.0</Text>
        
        <Text style={styles.description}>
          Este aplicativo foi desenvolvido para a disciplina de Programação Mobile. 
          O objetivo é facilitar o acesso dos alunos às informações acadêmicas.
        </Text>

        <Text style={styles.footer}>© 2024 UNDB - Centro Universitário</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { flex: 1, padding: 30, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFF', marginBottom: 5 },
  version: { color: '#007AFF', marginBottom: 20, fontWeight: '500' },
  description: { color: '#CCC', fontSize: 16, lineHeight: 24, textAlign: 'justify' },
  footer: { color: '#555', marginTop: 40, textAlign: 'center', fontSize: 12 }
});