import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import BahiGoHeader from '../components/BahiGoHeader';
import BahiGoMenuComponent from '../components/BahiGoMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {bahiGoProducts} from '../helpers/bahiGoProducts';

export default function BahiGoHomeScreen() {
  return (
    <View style={styles.container}>
      <BahiGoHeader />

      <Text style={styles.text}>Все товары</Text>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {bahiGoProducts.map((product, index) => (
          <BahiGoMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.black,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: FONTS.black,
    margin: 20,
  },
});
