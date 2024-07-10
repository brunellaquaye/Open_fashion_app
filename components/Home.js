import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
const Home = ({ image, title, description, price, icon,onPress }) => {
  return (
    <View>
      <View>
      <Image source = {{uri: image}} style={styles.picture} />
        <TouchableOpacity onPress= {onPress}>
        <View style={styles.icons}>
          <Image source={icon} />
          <Ionicons name="add-circle-outline" size={24} color="brown" />
        </View>
        </TouchableOpacity>
      </View>
      <View style = {styles.words}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.amount}>{price}</Text>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    position: "relative",
    marginBottom: 15,
    marginTop: 30,
    height: 200,
    width: 100,
    backgroundColor:"red"
  },
  picture: {
    position: "relative",
    marginBottom: 15,
    marginTop: 30,
   height: 200,
   width: 150,
  },
  title: {
    fontWeight: "700",
    fontSize: 12,
  },
  description: {
    height:60,
    width:130,
    fontSize: 12,
  },
  amount: {
    color: "brown",
  },
  icons: {
    position: "absolute",
   bottom: 5,
    right: 10,
    marginLeft: 0,
  },
  words: {
    flexDirection: "column",
    width: 150,


    
  },
  icon: {},
});

export default Home;
