import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
  } from "react-native";
  import React, {useContext ,useEffect, useState } from "react";
  import Home from "./components/Home";
  import { useNavigation } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
  import { SimpleLineIcons } from '@expo/vector-icons';
  import { CartContext } from "./components/CartContext";
  
  
  
  const HomeScreen = () => {
    const navigation = useNavigation();
    const { addToCart, getTotalItems } = useContext(CartContext);
    const totalItems = getTotalItems();
    const [clothesData, setClothesData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the API
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                const transformedData = data.map((item) => ({
                    id: item.id,
                    image: item.image ,
                    title: item.title,
                    description: item.description,
                    price: `$${item.price}`,
                }));
                  setClothesData(transformedData);
                }
              })
              .catch((error) => console.error(error));
          }, []);

          // Ensure data is properly structured
        //   if (data && data.products) {
        //     const transformedData = data.products.map((item) => ({
        //       id: item.id,
        //       image: item.thumbnail ? { uri: item.thumbnail } : null, // Ensure image.uri exists
        //       title: item.title,
        //       description: item.description,
        //       price: `$${item.price}`,
        //       icon: require("./assets/add_circle.png"),
        //     }));
        //     setClothesData(transformedData);
        //   }
        // })
        // .catch((error) => console.error(error));
    // }, []);
  
  
    // const clothesData = [
    //   {
    //     id: 1,
    //     image: require("./assets/dress1.png"),
    //     title: "Office Wear",
    //     description: "reversible angora cardigan",
    //     price: "$120",
    //     icon: require("./assets/add_circle.png"),
    //   },
    //   {
    //     id: 2,
    //     image: require("./assets/dress2.png"),
    //     title: "Black",
    //     description: "reversible angora cardigan",
    //     price: "$120",
    //     icon: require("./assets/add_circle.png"),
    //   },
    //   {
    //     id: 3,
    //     image: require("./assets/dress3.png"),
    //     title: "Church Wear",
    //     description: "reversible angora cardigan",
    //     price: "$120",
    //     icon: require("./assets/add_circle.png"),
    //   },
    //   {
    //     id: 4,
    //     image: require("./assets/dress4.png"),
    //     title: " Lamerei",
    //     description: "reversible angora cardigan",
    //     price: "$120",
    //     icon: require("./assets/add_circle.png"),
    //   },
    //   {
    //     id: 5,
    //     image: require("./assets/dress5.png"),
    //     title: " 21WN",
    //     description: "reversible angora cardigan",
    //     price: "$120",
    //     icon: require("./assets/add_circle.png"),
    //   },
    //   {
    //     id: 6,
    //     image: require("./assets/dress6.png"),
    //     title: " Lopo",
    //     description: "reversible angora cardigan",
    //     price: "$120",
    //     icon: require("./assets/add_circle.png"),
    //   },
    //   {
    //     id: 7,
    //     image: require("./assets/dress7.png"),
    //     title: "21WN",
    //     description: "reversible angora cardigan",
    //     price: "$120",
    //     icon: require("./assets/add_circle.png"),
    //   },
    //   {
    //     id: 8,
    //     image: require("./assets/dress6.png"),
    //     title: "lame",
    //     description: "reversible angora cardigan",
    //     price: "$120",
    //     icon: require("./assets/add_circle.png"),
    //   },
    // ];
    return (
      <SafeAreaView style={{ flex: 1 , height: "auto" }}>
        <View style={{ backgroundColor: "white" , flex:1,marginBottom: 150 }}>
        <View style = {{flexDirection:"row", justifyContent:""}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={require("./assets/Menu.png")} style={styles.drawerMenu} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.logo} source={require("./assets/Logo.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="black" style={{marginTop:40, marginRight: 30,justifyContent:"flex-end"} }/>
            </TouchableOpacity>
            <TouchableOpacity>
            <SimpleLineIcons name="handbag" size={24} color="black"style={{marginTop:40, marginRight: 0 , justifyContent:"flex-end"}} /> 
            </TouchableOpacity>      
               </View>
          <View style={styles.title}>
            <Text style={styles.topic}>OUR STORY</Text>
            <View style={styles.menu}>
              <View style={styles.filter}>
                <Image source={require("./assets/Listview.png")} />
              </View>
              <View style={styles.filter}>
                <Image source={require("./assets/Filter.png")} />
              </View>
            </View>
          </View>
  
          <View>
            <FlatList
              data={clothesData}
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={2}
              contentContainerStyle={styles.flatListContent}

              columnWrapperStyle={{ justifyContent: "space-around" }}
              renderItem={({ item }) => (
                <Home
                 image={item.image}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  onPress={() => addToCart(item)}
  
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    title: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    flatListContent: {
        paddingBottom: 20,
        paddingHorizontal: 10,
      },
    logo: {
      marginLeft: 100,
      marginTop: 40,
      marginRight: 60
    },
    drawerMenu: {
      width: 20,
      height: 20,
      margin: 10,
      marginTop: 40,
      //marginLeft: 20,
    },
    menu: {
      flexDirection: "row",
      justifyContent: "space-between",
      // backgroundColor: "black",
    },
    topic: {
      fontSize: 24,
      fontWeight: "400",
      marginLeft: 15,
      marginTop: 30,
      letterSpacing: 2,
    },
    filter: {
      padding: 10,
      backgroundColor: "#F7F7F7",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      marginRight: 20,
      marginTop: 30,
    },
  });
  
  export default HomeScreen;
  