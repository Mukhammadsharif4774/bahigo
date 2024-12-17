import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BahiGoHeader from '../components/BahiGoHeader';
import BahiGoComponent from '../components/BahiGoComponent';

const InputField = ({placeholder, value, onChangeText}) => (
  <TextInput
    style={styles.textInput}
    placeholderTextColor={COLORS.white}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
  />
);

export default function () {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    table: '',
    time: '',
    date: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleReservation = () => {
    navigation.navigate('DrawerNavigator', {
      screen: 'BahiGoReservationSuccessScreen',
    });
  };

  return (
    <View style={styles.container}>
      <BahiGoHeader />

      <Text style={styles.title}>Резерв столика</Text>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        <InputField
          placeholder={'Имя...'}
          value={formData.phone}
          onChangeText={text => handleInputChange('name', text)}
        />

        <InputField
          placeholder={'Номер телефона'}
          value={formData.phone}
          onChangeText={text => handleInputChange('phone', text)}
        />

        <InputField
          placeholder={'Столик'}
          value={formData.table}
          onChangeText={text => handleInputChange('table', text)}
        />

        <InputField
          placeholder={'Время'}
          value={formData.time}
          onChangeText={text => handleInputChange('time', text)}
        />

        <InputField
          placeholder={'Дата'}
          value={formData.date}
          onChangeText={text => handleInputChange('date', text)}
        />
      </ScrollView>

      <BahiGoComponent
        text={'Зарезервировать'}
        style={styles.button}
        onPress={handleReservation}
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
  main: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    width: width * 0.9,
    alignSelf: 'center',
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
