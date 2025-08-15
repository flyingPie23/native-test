import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput , ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faCat } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.nav}>
        <Text style={styles.title}>  <FontAwesomeIcon icon={faCat} /> Cat Herder</Text>
        <FontAwesomeIcon icon={faBars} />
      </View>

      <ScrollView style={styles.scrollView}>
        {Array.from({ length: 1000 }, (_, i) => (
          <Text key={i}>test</Text>
        ))}
      </ScrollView>



      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.footer}>
          <TextInput style={{height: 40, padding: 5}} placeholder="Name your new cat !"/>
        </View>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: '#20232a',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 8,
  },

  scrollView: {
    padding: 8
  },

  footer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
    borderTopWidth: 1,
    paddingBottom: 15,
    borderColor: '#20232a',
  }
});
