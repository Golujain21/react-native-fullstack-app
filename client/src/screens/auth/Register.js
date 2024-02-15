import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
// import axios from "axios";
const Register = ({ navigation }) => {
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      // console.log("Register Data =>", { name, email, password });
      setLoading(false);
      // const { data } = await axios.post(
      //   "http://localhost:8080/api/v1/auth/register",
      //   {
      //     name,
      //     email,
      //     password,
      //   }
      // );
      // Method 2
      let result = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log("Register Data =>", result);
      alert(result && result.message ? result.message : "something went wrong");
      navigation.navigate("Login");
      // setData();
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register Api</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTitle={"Name"} value={name} setValue={setName} />
        <InputBox
          inputTitle={"Email"}
          keyboardType={"email-address"}
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
        {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
      </View>
      <SubmitButton
        btnTitle="Register"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        ALready Register Please{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          LOGIN
        </Text>{" "}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
  },
  linkText: {
    textAlign: "center",
  },
  link: {
    color: "red",
  },
});

export default Register;

// import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
// import React, { useState } from "react";
// import InputBox from "../../Forms/InputBox";
// import SubmitButton from "../../Forms/SubmitButton";
// import axios from "axios";
// const Register = ({ navigation }) => {
//   // states
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   //function
//   // btn funcn
//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       if (!name || !email || !password) {
//         Alert.alert("Please Fill All Fields");
//         setLoading(false);
//         return;
//       }
//       setLoading(false);
//       const { data } = await axios.post(
//         "http://localhost:8080/api/v1/auth/register",
//         {
//           name,
//           email,
//           password,
//         }
//       );
//       alert(data && data.message);
//       navigation.navigate("Login");
//       console.log("Register Data==> ", { name, email, password });
//     } catch (error) {
//       alert(error.response.data.message);
//       setLoading(false);
//       console.log(error);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.pageTitle}>Register</Text>
//       <View style={{ marginHorizontal: 20 }}>
//         <InputBox inputTitle={"Name"} value={name} setValue={setName} />
//         <InputBox
//           inputTitle={"Email"}
//           keyboardType="email-address"
//           autoComplete="email"
//           value={email}
//           setValue={setEmail}
//         />
//         <InputBox
//           inputTitle={"Password"}
//           secureTextEntry={true}
//           autoComplete="password"
//           value={password}
//           setValue={setPassword}
//         />
//       </View>
//       {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
//       <SubmitButton
//         btnTitle="Register"
//         loading={loading}
//         handleSubmit={handleSubmit}
//       />
//       <Text style={styles.linkText}>
//         ALready Register Please{" "}
//         <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
//           LOGIN
//         </Text>{" "}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#e1d5c9",
//   },
//   pageTitle: {
//     fontSize: 40,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#1e2225",
//     marginBottom: 20,
//   },
//   inputBox: {
//     height: 40,
//     marginBottom: 20,
//     backgroundColor: "#ffffff",
//     borderRadius: 10,
//     marginTop: 10,
//     paddingLeft: 10,
//     color: "#af9f85",
//   },
//   linkText: {
//     textAlign: "center",
//   },
//   link: {
//     color: "red",
//   },
// });

// export default Register;
