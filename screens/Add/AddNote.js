import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../SharedComp/Header";
import styles from "./AddNoteStyle";
import { Entypo } from "@expo/vector-icons";
import ColorSet from "../SharedComp/ColorTab";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

function AddNote({ route, navigation }) {
  const [noteData, setNoteData] = useState(route.params.currentNote);

  let setColorCode = (color) => {
    setNoteData({
      ...noteData,
      noteColor: color,
    });
  };

  let saveNoteToStorage = () => {
    if (
      noteData.noteColor.length > 0 &&
      noteData.noteTitle.length > 0 &&
      noteData.noteDescription.length > 0
    ) {
      storeData();
    } else {
      Alert.alert(
        "Data Missing",
        "One or more property is missing. Please fill all the details to save your note",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }
  };

  const storeData = async () => {
    try {
      let allNoteData = [];
      let alreadyPresent = route.params.allNotes.filter((e) => {
        return e.id != noteData.id;
      });

      if (alreadyPresent.length < route.params.allNotes.length) {
        alreadyPresent.unshift(noteData);
        allNoteData = alreadyPresent;
      } else {
        route.params.allNotes.unshift(noteData);
        allNoteData = route.params.allNotes;
      }
      const jsonValue = JSON.stringify(allNoteData);
      await AsyncStorage.setItem("myNotes", jsonValue);
      navigation.navigate("homeScreen");
    } catch (e) {
      // saving error
      console.log("error :->  ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.yourNotesHeading}>
        <View style={styles.backBtn}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="caret-back-circle" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.yourNotesText}>Create Your New Note</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            saveNoteToStorage();
          }}
        >
          <Entypo name="save" size={30} color="yellow" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <ColorSet
          setSelectedColor={setColorCode}
          selectedColor={noteData.noteColor}
        />
        <TextInput
          style={styles.noteTitleInput}
          multiline
          placeholder="Enter Your Title Here"
          value={noteData.noteTitle}
          onChange={(title) => {
            setNoteData({
              ...noteData,
              noteTitle: title.nativeEvent.text,
            });
          }}
        />
        <TextInput
          style={styles.noteDescriptionInput}
          multiline
          placeholder="Enter your Note Description Here"
          numberOfLines={5}
          value={noteData.noteDescription}
          onChange={(description) => {
            setNoteData({
              ...noteData,
              noteDescription: description.nativeEvent.text,
            });
          }}
        />
      </View>
    </View>
  );
}

export default AddNote;
