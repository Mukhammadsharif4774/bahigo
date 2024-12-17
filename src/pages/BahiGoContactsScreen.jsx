import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BahiGoHeader from '../components/BahiGoHeader';
import BahiGoComponent from '../components/BahiGoComponent';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'BahiGoHomeScreen'});
  };

  const renderTextInput = placeholder => (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={COLORS.white}
        editable={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <BahiGoHeader />

      <Text style={styles.title}>Контакты</Text>

      <View style={styles.main}>
        {renderTextInput('Номер')}
        {renderTextInput('Адрес')}
        {renderTextInput('Данные')}
        {renderTextInput('Индекс')}
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
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.placeholder,
    width: '100%',
    paddingLeft: 30,
    marginVertical: 10,
  },
  main: {
    paddingBottom: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 25,
    height: height * 0.55,
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    height: 60,
    width: '100%',
    fontSize: 14,
    fontFamily: FONTS.medium,
    textAlign: 'left',
    color: COLORS.white,
    paddingLeft: 20,
    backgroundColor: '#22222A',
    marginTop: 15,
    borderRadius: 12,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
});
