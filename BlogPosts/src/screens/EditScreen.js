import React,{useContext,useState} from "react";
import {View,Text,StyleSheet,Button,TextInput} from "react-native";
import {Context} from "../context/BlogContext";
const EditScreen = ({navigation}) => {
    const {state,editPost} = useContext(Context);
    const blogPost = state.find((post)=>post.id===navigation.getParam("id"));
    const [title,setTitle] = useState(blogPost.title);
    const [content,setContent] = useState(blogPost.content);
    return (
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
          title="Save Blog Post"
          onPress={() => {
            editPost(blogPost.id,title, content);
            navigation.navigate("Index");
          }}
        />
      </View>
    )
}

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

export default EditScreen;