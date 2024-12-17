import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import BahiGoHeader from '../components/BahiGoHeader';
import BahiGoComponent from '../components/BahiGoComponent';
import Icon from '../assets/cart_success.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'BahiGoHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <BahiGoHeader />

      <Image source={Icon} style={styles.image} />

      <Text style={styles.text}>Спасибо за заказ!</Text>

      <View style={styles.qrContainer}>
        <QRCode
          value="https://atom-obninsk.ru/sport-bar"
          size={Dimensions.get('window').width / 2.5}
          color={COLORS.black}
        />
      </View>

      <BahiGoComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.black,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  successIcon: {
    marginTop: 20,
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.medium,
    fontSize: 20,
    paddingVertical: 15,
    marginTop: '5%',
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: '25%',
  },
});
