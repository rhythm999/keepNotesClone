import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#277DA1",
  },
  yourNotesHeading: {
    flex: 0.06,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  yourNotesText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "yellow",
    paddingHorizontal: 10,
  },
  inputContainer: {
    flex: 0.9,
  },
  noteTitleInput: {
    flex: 0.08,
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    backgroundColor: "#FAF5EF",
  },
  noteDescriptionInput: {
    flex: 0.9,
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    backgroundColor: "#FAF5EF",
  },
  backBtn: {
    flexDirection: "row",
    alignItems:"center"
  },
});
