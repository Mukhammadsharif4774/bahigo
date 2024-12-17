import React from 'react';
import {Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BahiGoHeader from '../components/BahiGoHeader';
import BahiGoComponent from '../components/BahiGoComponent';
import Success from '../assets/reserve_success.png';
import Background from '../assets/navigation_background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'BahiGoHomeScreen'});
  };

  return (
    <ImageBackground source={Background} style={styles.container}>
      <BahiGoHeader />

      <Image source={Success} style={styles.image} />

      <Text style={styles.description}>
        Столик забронирован! {'\n'} Спасибо
      </Text>

      <BahiGoComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.black,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  description: {
    paddingVertical: 15,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.black,
    fontSize: 20,
    paddingHorizontal: 50,
    width: width,
    marginTop: '15%',
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: '25%',
  },
});
