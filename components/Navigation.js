import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer , useNavigation} from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import Homescreen from "../Homescreen";
import Cartscreen from "../Cartscreen";
import Locations from "../Locations";
import Blog from "../Blog";
import Jewelery from "../Jewelery";
import Electronic from "../Electronic";
import Clothing from "../Clothing";
import DetailScreen from "../DetailScreen";
import HomeScreen from "../Homescreen";

const CustomDrawer = (props) => {
  //const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>

    <View style = {{marginBottom:25, width:150, alignItems:"center", gap: 5}}>
    <TouchableOpacity
     onPress={() => props.navigation.closeDrawer()}
    >
    <Entypo name="cross" size={24} color="black"  style = {{marginRight: 100}}/>
    </TouchableOpacity>
    <Text style= {{fontWeight:"700", fontSize: 20, letterSpacing: 2, marginTop:10,marginRight: 30}}>Brunella</Text>
    <View style = {{borderBottomWidth: 1, width: 100, borderBottomColor: "orange",marginRight: 20}}></View>
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
        component={HomeScreen}
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
          drawerLabel: () => null, title: null,
        }}
      />
        <Drawer.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerShown: false,
          drawerLabel: () => null, title: null,
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
