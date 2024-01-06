import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Header from "../SharedComp/Header";
import styles from "./HomeStyle";
import { AntDesign } from "@expo/vector-icons";
import Notecard from "../SharedComp/Notecard";
import { useEffect, useState } from "react";
import SearchBar from "../SharedComp/SearchBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ColorSet from "../SharedComp/ColorTab";
import { useIsFocused } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [backupList, setBackhupList] = useState([]);
  const [noDataFound, setNoDataFound] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const isFocused = useIsFocused();

  useEffect(() => {
    getData();
  }, [isFocused]);

  useEffect(() => {
    setSearchPhrase("");
    setNotes(backupList);
  }, [backupList]);

  let getData = async () => {
    let dataFromStorgae = await getMyObject();
    if (dataFromStorgae != null) {
      setNotes(dataFromStorgae);
      setBackhupList(dataFromStorgae);
    } else {
      setNotes([]);
      setBackhupList([]);
      setNoDataFound(True);
    }
  };

  getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("myNotes");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
      console.log("error :->  ", e);
    }
  };

  useEffect(() => {
    if (searchPhrase.length > 0) {
      let newData = backupList.filter((e) => {
        return (
          e.noteTitle.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1 ||
          e.noteDescription.toLowerCase().indexOf(searchPhrase.toLowerCase()) >
            -1
        );
      });
      setNotes(newData);
    } else {
      setNotes(backupList);
    }
  }, [searchPhrase]);

  useEffect(() => {
    if (searchPhrase.length > 0) {
      setClicked(true);
    }
  }, [searchPhrase]);

  let setColorCode = (value) => {
    setSelectedColor(value);
  };

  useEffect(() => {
    let newData = backupList.filter((e) => {
      return (
        e.noteColor.toLowerCase().indexOf(selectedColor.toLowerCase()) > -1
      );
    });
    setNotes(newData);
  }, [selectedColor]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.yourNotesHeading}>
        <Text style={styles.yourNotesText}>Your Notes</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("addNote", {
              allNotes: backupList,
              currentNote: {
                id: Date.now(),
                noteTitle: "",
                noteDescription: "",
                noteColor: "",
              },
            });
          }}
        >
          <AntDesign name="plussquare" size={30} color="yellow" />
        </TouchableOpacity>
      </View>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <View style={{ height: 50 }}>
        <ColorSet
          setSelectedColor={setColorCode}
          selectedColor={selectedColor}
        />
      </View>

      {notes.length == 0 ? (
        noDataFound ? (
          <View style={styles.noDataFound}>
            <Text style={styles.noDataFoundText}>
              No Note Found!{"\n"}Create a new Note
            </Text>
            <MaterialCommunityIcons
              name="emoticon-sad"
              size={40}
              color="#FFFFFF"
            />
          </View>
        ) : (
          <View>
            <ActivityIndicator />
          </View>
        )
      ) : (
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <Notecard
              noteDetail={item}
              backupList={backupList}
              setBackhupList={setBackhupList}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

export default HomeScreen;
