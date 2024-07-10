import { View, Text, StyleSheet, Image, TouchableOpacity, Button,  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";


const CartsClothes = ({ image, title, description, price, icon , onPressRemove}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{uri: image}} style={styles.picture}/>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.amount}>{price}</Text>
        <Button
                title="View Details"
                onPress={() => navigation.navigate("DetailScreen") }
                color="brown" 
            />
        <TouchableOpacity onPress= {onPressRemove}>
        <View style={styles.icons}>
          <Image source={icon} />
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    flex:1,
    //marginBottom:0
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
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 20,
    width: 200,
    fontSize: 15,
    marginTop: 50,
   // backgroundColor: "red",
  },
  description: {
    fontSize: 12,
    //marginTop:10,
    width:200,
    height: 60,
   // backgroundColor: "green",

},
  amount: {
    color: "brown",
    //marginTop: 10,
    fontSize: 20,
    //backgroundColor: "blue",
  },
  icons: {
    marginTop:20,
    marginRight:20,
    alignItems: "flex-end",
  },
  text: {
    marginRight: 30,
    marginLeft: 10,
  },
  icon: {},
});

export default CartsClothes;
