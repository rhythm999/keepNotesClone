import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Notecard({ noteDetail, backupList, setBackhupList }) {
  const navigation = useNavigation();
  let deletePopUp = () => {
    Alert.alert(
      "Are you sure, You want to delete this Note ?",
      `Note Priority : ${noteDetail.noteColor.toUpperCase()} \nYour Note Title : ${
        noteDetail.noteTitle
      } \nYour Description : ${noteDetail.noteDescription} `,

      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Delete", onPress: () => deleteNote(noteDetail.id) },
      ]
    );
  };

  let deleteNote = async (id) => {
    let newSetOfNotes = await backupList.filter((note) => {
      return note.id != id;
    });
    const jsonValue = JSON.stringify(newSetOfNotes);
    await AsyncStorage.setItem("myNotes", jsonValue);
    setBackhupList(newSetOfNotes);
  };

  return (
    <TouchableOpacity
      style={styles.cardCotainer}
      onLongPress={() => {
        deletePopUp(noteDetail);
      }}
      onPress={() => {
        navigation.navigate("addNote", {
          allNotes: backupList,
          currentNote: noteDetail,
        });
      }}
    >
      <View style={styles.noteTitleContainer}>
        <FontAwesome
          name="circle"
          size={24}
          color={noteDetail.noteColor}
          margin={5}
        />
        <Text numberOfLines={1} style={styles.noteTitleText}>
          {noteDetail.noteTitle}
        </Text>
      </View>
      <View>
        <Text numberOfLines={3} style={styles.descriptionText}>
          {noteDetail.noteDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardCotainer: {
    padding: 10,
    margin: "2.3%",
    backgroundColor: "#6DB9EF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  noteTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#F4F27E",
    marginBottom: "4%",
    flexDirection: "row",
    alignItems: "center",
  },
  noteTitleText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "italic",
    width: "80%",
  },
  descriptionText: {
    fontSize: 14,
    color: "#F4F27E",
    fontStyle: "italic",
    width: "80%",
  },
});

export default Notecard;
