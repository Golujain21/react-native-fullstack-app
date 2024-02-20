import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useContext, useState, useEffect, useCallback } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/Menus/FooterMenu";
import { PostContext } from "../context/postContext";
import PostCard from "../components/PostCard";

const Home = () => {
  //global state
  // const [state] = useContext(AuthContext);
  const [posts, getAllPosts] = useContext(PostContext);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {}, [getAllPosts]);
  //refresh controll
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAllPosts;
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Hoem</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
