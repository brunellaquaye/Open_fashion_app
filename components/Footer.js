import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { CartContext } from "./CartContext";

export default function Footer() {
    const { cart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
    };

    return (
        <View style={styles.footer}>
          <View style={styles.total}>
                <Text style={styles.totalText}>EST. TOTAL</Text>
                <Text style={styles.totalAmount}>${calculateTotal()}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
                <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')} />
                <Text style={styles.checkout}>CHECKOUT</Text>
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
        justifyContent: 'center',
        //paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
    },
    shoppingBag: {
        tintColor: 'white',
        marginRight: 10,
    },
    checkout: {
        color: '#FFFFFF',
        fontSize: 18,
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