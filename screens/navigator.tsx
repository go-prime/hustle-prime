import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  createDrawerNavigator,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import { faUser, faHouse, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { shadow } from '../styles/inputs';
import HomeScreen from './partner_store/home';
import PartnerScreen from './partner_store/partner';
import BundleScreen from './partner_store/bundle';
import ProductScreen from './partner_store/product';
import CategoryScreen from './partner_store/category';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import colors from '../styles/colors';
import WishlistScreen from './wishlist';
import CartScreen from './cart';
import ProfileScreen from './profile';


const Drawer = createDrawerNavigator();

const DrawerItem = (props) => {
  return (
    <Pressable onPress={props.handler}>
        <View style={styles.statusContainer}>
          <FontAwesomeIcon icon={props.icon} color={colors.primary} size={24}/>
          <Text style={styles.status}>{props.label}</Text>
        </View>
    </Pressable>
  )
}

function DrawerContent(props): JSX.Element {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem 
          icon={faHouse} 
          label="Home"
          handler={() => props.navigation.navigate('Home')} />
        <DrawerItem 
          icon={faUser} 
          label="My Profile"
          handler={() => props.navigation.navigate('Profile')} />
        <DrawerItem 
          icon={faHeart} 
          label="My Wishlist"
          handler={() => props.navigation.navigate('Wishlist')} />
        <DrawerItem 
          icon={faShoppingCart} 
          label="My Shopping Cart"
          handler={() => props.navigation.navigate('Cart')} />
    </DrawerContentScrollView>
  );
}

const NavOptions = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
      <Pressable onPress={() => props.navigation.navigate('Login')} >
        <FontAwesomeIcon icon={faUser} size={28} color={colors.primary} style={{marginRight: 16}} />
      </Pressable>
      
    </View>
  )
}

export default function HomeScreenNavigator({navigation}): JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={{headerRight: () => <NavOptions navigation={navigation} />}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen component={HomeScreen} name="Home"/>
      <Drawer.Screen component={PartnerScreen} name="Partner" />
      <Drawer.Screen component={BundleScreen} name="Bundle" />
      <Drawer.Screen component={ProductScreen} name="Product" />
      <Drawer.Screen component={CategoryScreen} name="Category" />
      <Drawer.Screen component={WishlistScreen} name="Wishlist" />
      <Drawer.Screen component={CartScreen} name="Cart" />
      <Drawer.Screen component={ProfileScreen} name="Profile" />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
  },
  status: {
    color: "black",
    fontWeight: 'bold',
    paddingLeft: 18,
    fontSize: 18,
  },
})