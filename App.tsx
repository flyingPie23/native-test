import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, TextInput, ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [cats, setCats] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const HandleSubmit = () => {
    if (input.trim() !== "") {
      setCats([...cats, input.trim()]);
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.nav}>
        <Text style={styles.title}>
          <FontAwesomeIcon icon={faNoteSticky as any} /> Sticky-Notes
        </Text>
        <FontAwesomeIcon icon={faBars as any} />
      </View>

      <ScrollView style={styles.scrollView}>
        {cats.map((cat: string, idx: number) => (
          <NoteCard key={idx} content={cat} />
        ))}
      </ScrollView>

      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.footer}>
          <TextInput
            style={{ height: 40, padding: 5, flex: 1 }}
            placeholder="Name your new cat !"
            value={input}
            onChangeText={setInput}
          />
          <TouchableHighlight onPress={HandleSubmit} style={styles.submitBtn} underlayColor="#ddd">
            <Text>Submit</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

type NoteProps = {
  content: string
}

function NoteCard(props: NoteProps) {
  return(
    <View style={styles.notesCard}>
      <Text>{props.content}</Text>
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
    marginBottom: 16,
    borderTopWidth: 1,
    paddingBottom: 16,
    borderColor: '#20232a',
  },

  submitBtn:{

  },

  notesCard:{
    borderWidth: 1,
    borderColor: '#20232a',
    marginBottom: 18,
    padding: 18,
  }
});
