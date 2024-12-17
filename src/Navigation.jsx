import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import BahiGoHomeScreen from './pages/BahiGoHomeScreen';
import BahiGoCartScreen from './pages/BahiGoCartScreen';
import BahiGoCartSuccessScreen from './pages/BahiGoCartSuccessScreen';
import BahiGoReservationScreen from './pages/BahiGoReservationScreen';
import BahiGoReservationSuccessScreen from './pages/BahiGoReserveSuccessScreen';
import BahiGoContactsScreen from './pages/BahiGoContactsScreen';
import BahiGoTranslationsScreen from './pages/BahiGoTranslationsScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/drawer_logo.png';
import BackgroundImage from './assets/navigation_background.png';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.white,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'ГЛАВНАЯ', screen: 'BahiGoHomeScreen'},
    {label: 'КОРЗИНА', screen: 'BahiGoCartScreen'},
    {label: 'ТРАНСЛЯЦИИ', screen: 'BahiGoTranslationsScreen'},
    {label: 'КОНТАКТЫ', screen: 'BahiGoContactsScreen'},
    {label: 'РЕЗЕРВ СТОЛИКА', screen: 'BahiGoReservationScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('BahiGoCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const drawerScreens = [
  {name: 'BahiGoHomeScreen', component: BahiGoHomeScreen},
  {name: 'BahiGoCartScreen', component: BahiGoCartScreen},
  {name: 'BahiGoCartSuccessScreen', component: BahiGoCartSuccessScreen},
  {name: 'BahiGoReservationScreen', component: BahiGoReservationScreen},
  {
    name: 'BahiGoReservationSuccessScreen',
    component: BahiGoReservationSuccessScreen,
  },
  {name: 'BahiGoContactsScreen', component: BahiGoContactsScreen},
  {name: 'BahiGoTranslationsScreen', component: BahiGoTranslationsScreen},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 40,
  },
  logo: {
    width: width * 0.8,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: width,
    alignSelf: 'center',
  },
  drawerItem: {
    justifyContent: 'center',
    width: '80%',
    marginTop: 15,
    backgroundColor: '#B5B5B5',
    paddingVertical: 15,
    borderRadius: 12,
  },
  itemText: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.white,
    textAlign: 'center',
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
