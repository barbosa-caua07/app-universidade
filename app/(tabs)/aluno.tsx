import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Aluno() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>FA</Text>
        </View>
        <Text style={styles.name}>Felipe</Text>
        <Text style={styles.course}>Engenharia de Software</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoLabel}>Matrícula: <Text style={styles.infoValue}>202401234</Text></Text>
        <Text style={styles.infoLabel}>Status: <Text style={styles.infoValue}>Regular</Text></Text>
        <Text style={styles.infoLabel}>Coeficiente: <Text style={styles.infoValue}>9.5</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  profileHeader: { alignItems: 'center', marginTop: 40, marginBottom: 40 },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { color: '#FFF', fontSize: 40, fontWeight: 'bold' },
  name: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  course: { color: '#888', fontSize: 16 },
  infoSection: { backgroundColor: '#1E1E1E', padding: 20, borderRadius: 12 },
  infoLabel: { color: '#888', fontSize: 16, marginBottom: 10 },
  infoValue: { color: '#FFF', fontWeight: 'bold' }
});