import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { TextInput } from "react-native-gesture-handler";
const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);
  return (
    <>
      <View style={styles.layout}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        ></TextInput>
        <Text style={styles.label}>Content</Text>
        <TextInput
          style={styles.input}
          value={content}
          multiline={true}
          onChangeText={text => setContent(text)}
        ></TextInput>
        <Button
          title="Add Blog Post"
          onPress={() => {
            addBlogPost(title, content);
            navigation.navigate("Index");
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    margin: 2,
    padding: 3
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2
  }
});

export default CreateScreen;
