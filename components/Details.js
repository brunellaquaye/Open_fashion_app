import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Details = ({ image, title, description, price, icon, onPressRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: image }} style={styles.picture} />
      </View>
      <View style={styles.text}>
        <View style={{ flexDirection: "row" , justifyContent: "space-between"}}>
          <Text style={styles.title}>{title}</Text>
          <AntDesign name="upload" size={22} color="black" />
        </View>

        <Text style={styles.description}>{description}</Text>
        <Text style={styles.amount}>{price}</Text>
        <Text style = {styles.material}>MATERIALS</Text>
        <Text>{description}</Text>
        <View style={{ flexDirection: "row", marginTop:20 }}>
          <Image source={require("../assets/NoBleach.png")} />
          <Text style = {{marginLeft:10}}>Do not use bleach</Text>
        </View>
        <View style = {{flexDirection:"row", marginTop:10 }}>
          <Image source={require("../assets/NoTumbleDry.png")} />
          <Text style = {{marginLeft:10}}>Do not tumble dry</Text>
        </View>
        <View style = {{flexDirection:"row", marginTop:10}}>
          <Image source={require("../assets/NoWash.png")} />
          <Text style = {{marginLeft:10}}>Dry clean with tetrachloroethylene</Text>
        </View>
        <View style = {{flexDirection:"row",marginTop:10 }}>
          <Image source={require("../assets/iron.png")} />
          <Text style = {{marginLeft:10}}>Iron at a maximum of 110℃/230℉</Text>
        </View>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: 250,
            marginTop: 20,
          }}
        ></View>
        <View style = {{flexDirection:"row",marginTop:30 }}>
          <Image source={require("../assets/iron.png")} />
          <View style = {{marginLeft: 10 }}>
            <Text>Free Flat Rate Shipping</Text>
            <Text>Estimated to be delivered on</Text>
            <Text>09/11/2024 - 09/12/2024 </Text>
          </View>
          <Image source={require("../assets/Up.png")} style ={{ marginLeft: 100 }}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    marginBottom:50
  },
  image: {
    position: "relative",
    marginBottom: 15,
    marginTop: 5,
    //backgroundColor: "red",
    height: 230,
    width: 160,
  },
  picture: {
    position: "relative",
    marginBottom: 15,
    marginTop: 30,
    height: 200,
    width: 150,
    marginLeft: 10,
  },
  title: {
    fontWeight: "500",
    letterSpacing: 2,
    fontSize: 24,
    width: 200,
    marginBottom: 8,

  },
  material: {
    fontWeight: "300",
    letterSpacing: 2,
    fontSize: 24,
    width: 200,
    marginTop: 20,
    marginBottom: 5
  },
  description: {
    fontSize: 12,
    width: 200,
    height: 30,
  },
  amount: {
    color: "brown",
    marginTop: 10,
    fontSize: 20,
    //backgroundColor: "blue",
  },
  icons: {
    marginTop: 20,
    marginRight: 20,
    alignItems: "flex-end",
  },
  text: {
    marginRight: 30,
    marginLeft: 10,
  },
  icon: {},
});

export default Details;
