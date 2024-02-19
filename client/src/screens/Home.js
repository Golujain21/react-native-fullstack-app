import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/Menus/FooterMenu";
import { PostContext } from "../context/postContext";
import PostCard from "../components/PostCard";

const Home = () => {
  const [state] = useContext(AuthContext);
  const [posts] = useContext(PostContext);
  return (
    <View style={styles.container}>
      <Text>Hoem</Text>
      <ScrollView>
        <PostCard posts={posts} />
        <Text>{JSON.stringify(posts, null, 4)}</Text>
      </ScrollView>
      <View>
        <FooterMenu />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "space-between",
  },
});
export default Home;
