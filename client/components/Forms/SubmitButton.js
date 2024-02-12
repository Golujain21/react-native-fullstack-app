import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
      <Text style={styles.btnText}>
        {loading ? "Please Wait..." : btnTitle}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: "#0067cb",
    marginHorizontal: 15,
    borderRadius: 20,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
    padding: 15,
    fontWeight: "400",
  },
});

export default SubmitButton;
