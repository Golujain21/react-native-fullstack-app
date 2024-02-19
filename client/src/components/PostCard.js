import { View, Text, StyleSheet } from "react-native";
import React from "react";
import moment from "moment/moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EditModal from "./EditModal";

const PostCard = ({ posts, myPostScreen }) => {
  return (
    <View>
      <Text style={styles.heading}>Total Posts {posts?.length}</Text>
      {myPostScreen && <EditModal />}
      {posts?.map((post, i) => {
        return (
          <View style={styles.card} key={i}>
            {myPostScreen && (
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <Text style={{ marginHorizontal: 20 }}>
                  <FontAwesome5
                    name="pen"
                    size={16}
                    color={"darkblue"}
                    // onPress={() => {
                    //   setPost(post), setModalVisible(true);
                    // }}
                  />
                </Text>
                <Text>
                  <FontAwesome5
                    name="trash"
                    size={16}
                    color={"red"}
                    // onPress={() => handleDeletePropmt(post?._id)}
                  />
                </Text>
              </View>
            )}
            <Text style={styles.title}>Title : {post?.title}</Text>
            <Text style={styles.desc}> {post?.description}</Text>
            <View style={styles.footer}>
              {post?.postedBy?.name && (
                <Text>
                  {" "}
                  <FontAwesome5 name="user" color={"orange"} />{" "}
                  {post?.postedBy?.name}
                </Text>
              )}
              <Text>
                {" "}
                <FontAwesome5 name="clock" color={"orange"} />{" "}
                {moment(post?.createdAt).format("DD:MM:YYYY")}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    color: "green",
    textAlign: "center",
  },
  card: {
    width: "97%",
    backgroundColor: "#ffffff",
    borderWidth: 0.2,
    borderColor: "gray",
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 10,
    borderBottomWidth: 0.3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  desc: {
    marginTop: 10,
  },
});
export default PostCard;
