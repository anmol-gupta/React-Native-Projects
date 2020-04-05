import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deletePost } = useContext(BlogContext);
  return (
    <View>
      {/* <Button title="Add Blog Post" onPress = {() => {addBlogPost()}}/> */}
      {/* <Button title="Add Blog Post" onPress={addBlogPost} /> */}
      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    deletePost(item.id);
                  }}
                >
                  <AntDesign style={styles.icon} name="delete" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <MaterialIcons name="add-box" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 20
  },
  icon: {
    fontSize: 28
  }
});

export default IndexScreen;
