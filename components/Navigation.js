import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "../Homescreen";
import Cartscreen from "../Cartscreen";
import Locations from "../Locations";
import Blog from "../Blog";
import Jewelery from "../Jewelery";
import Electronic from "../Electronic";
import Clothing from "../Clothing";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>

    <View style = {{marginBottom:25, width:150, alignItems:"center", gap: 5}}>
    <Text style= {{fontWeight:"700", fontSize: 20, letterSpacing: 2, marginTop:10}}>Brunella</Text>
    <View style = {{borderBottomWidth: 1, width: 100, borderBottomColor: "orange"}}></View>
    </View>
    <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Store"
      screenOptions={({ navigation }) => ({
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                source={require("../assets/Menu.png")}
                style={{ width: 20, height: 20, marginLeft: 10 }}
              />
            </TouchableOpacity>
          );
        },
      })}
      drawerContent={(props)=> <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Store"
        component={Homescreen}
        options={{
          headerShown: false,
        }}

        initialRoutine="Homescreen"
      />
      <Drawer.Screen
        name="Locations"
        component={Locations}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Blog"
        component={Blog}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Jewelery"
        component={Jewelery}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Electronic"
        component={Electronic}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Clothing"
        component={Clothing}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="CartScreen"
        component={Cartscreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {},
});
export default Navigation;
