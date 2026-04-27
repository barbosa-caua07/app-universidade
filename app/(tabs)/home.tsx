import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

const width = Dimensions.get('window').width;

const images = [
  require('../../assets/carrossel/banner.png'),
  require('../../assets/carrossel/undb.png'),
  require('../../assets/carrossel/gamejam.png'),
  require('../../assets/carrossel/undb1.png')
];

export default function Home() {
  const { nome } = useLocalSearchParams();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔴 LOGOUT
  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* 🔵 HEADER */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          
          <View>
            <Text style={styles.headerTitle}>UNDB App</Text>
            <Text style={styles.headerSubtitle}>
              Bem-vindo, {nome || 'Aluno'} 👋
            </Text>
          </View>

          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>

        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* 🎞️ CARROSSEL */}
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            autoPlay
            width={width - 40}
            height={200}
            data={images}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item }) => (
              <View style={styles.imageWrapper}>
                <Image source={item} style={styles.carouselImage} />
              </View>
            )}
          />
        </View>

        {/* 🔵 DOTS */}
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index && styles.activeDot
              ]}
            />
          ))}
        </View>

        {/* ⚡ AÇÕES */}
        <Text style={styles.sectionTitle}>Acesso rápido</Text>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/(tabs)/aluno')}
          >
            <Text style={styles.actionText}>Aluno</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => alert('Notas em breve')}
          >
            <Text style={styles.actionText}>Notas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => alert('Horário em breve')}
          >
            <Text style={styles.actionText}>Horário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => alert('Perfil em breve')}
          >
            <Text style={styles.actionText}>Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* 📢 AVISOS */}
        <Text style={styles.sectionTitle}>Avisos</Text>

        <TouchableOpacity
          style={[styles.newsCard, styles.importantCard]}
          onPress={() => alert('Detalhes do aviso')}
        >
          <Text style={styles.newsTitle}>🔴 Matrículas Abertas</Text>
          <Text style={styles.newsBody}>
            As matrículas começam na próxima segunda-feira.
          </Text>
        </TouchableOpacity>

        {/* 📅 EVENTOS */}
        <Text style={styles.sectionTitle}>Eventos</Text>

        <TouchableOpacity
          style={styles.eventCard}
          onPress={() => alert('Detalhes do evento')}
        >
          <View style={styles.dateBox}>
            <Text style={styles.dateDay}>10</Text>
            <Text style={styles.dateMonth}>JUN</Text>
          </View>

          <View style={styles.eventContent}>
            <Text style={styles.newsTitle}>Semana de Tecnologia</Text>
            <Text style={styles.newsBody}>
              Palestras e workshops.
            </Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },

  header: {
    padding: 20,
    backgroundColor: '#1E1E1E'
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },

  headerSubtitle: {
    color: '#AAA',
    marginTop: 4
  },

  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8
  },

  logoutText: {
    color: '#FFF',
    fontWeight: 'bold'
  },

  scrollContent: {
    padding: 20
  },

  carouselContainer: {
    alignItems: 'center'
  },

  imageWrapper: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    overflow: 'hidden'
  },

  carouselImage: {
    width: '100%',
    height: '100%'
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },

  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#555',
    margin: 4,
    borderRadius: 4
  },

  activeDot: {
    backgroundColor: '#00A8FF'
  },

  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  actionButton: {
    width: '48%',
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center'
  },

  actionText: {
    color: '#00A8FF',
    fontWeight: 'bold'
  },

  newsCard: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#00A8FF'
  },

  importantCard: {
    borderLeftColor: '#FF3B30'
  },

  newsTitle: {
    color: '#00A8FF',
    fontWeight: 'bold',
    marginBottom: 5
  },

  newsBody: {
    color: '#CCC'
  },

  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center'
  },

  dateBox: {
    backgroundColor: '#00A8FF',
    padding: 10,
    borderRadius: 8,
    marginRight: 10
  },

  dateDay: {
    color: '#FFF',
    fontWeight: 'bold'
  },

  dateMonth: {
    color: '#FFF',
    fontSize: 12
  },

  eventContent: {
    flex: 1
  }
});