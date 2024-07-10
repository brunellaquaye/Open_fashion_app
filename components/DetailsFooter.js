import React, { useContext } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { CartContext } from "./CartContext";

export default function DetailsFooter() {
    const { cart } = useContext(CartContext);
    const navigation = useNavigation();


    const calculateTotal = () => {
        return cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
    };

    return (
        <View style={styles.footer}>
        
            <TouchableOpacity 
             onPress={() => navigation.navigate('CartScreen')}
            style={styles.checkoutButton}>
                <Image style={styles.plus} source={require('../assets/Plus.png')} />
                <Text style={styles.checkout}>ADD TO BASKET</Text>
                <Image style={styles.heart} source={require('../assets/Heart.png')} />
            </TouchableOpacity>

          
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        
        justifyContent: 'flex-end',
         flexDirection: 'column',
//        height: 150
    },
    checkoutButton: {
        flexDirection: 'row',
        backgroundColor: '#000000',
        alignItems: 'center',
        //justifyContent: 'center',
        //paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
    },
    plus: {
        tintColor: 'white',
        marginLeft: 10,
        marginRight: 10,

    },
    heart: {
        tintColor: 'white',
        marginLeft: 130,
    },
    checkout: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '300',
        letterSpacing: 2,
    },
    total: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor:"white"
    },
    totalText: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '300',
        color: '#000000',
        letterSpacing: 1,
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: '400',
        color: '#D18035',
        letterSpacing: 1,
        marginTop: 5,
        marginRight:10
    },
});