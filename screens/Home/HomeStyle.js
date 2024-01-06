import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#277DA1",
  },
  yourNotesHeading: {
    height: "8%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  yourNotesText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "yellow",
  },
  noDataFound: {
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  noDataFoundText: {
    fontWeight: "400",
    fontSize: 30,
    fontStyle: "italic",
    color: "#ffffff",
    textAlign: "center",
  },
});
