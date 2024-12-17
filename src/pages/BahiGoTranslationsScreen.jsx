import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BahiGoHeader from '../components/BahiGoHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.matchTime}>{time}</Text>
        <Text style={styles.teams}>{teams[0]}</Text>
        <Text style={styles.teamsSecond}>{teams[1]}</Text>
      </View>

      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <BahiGoHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('EPL', '10.01 16:00', [
          'Manchester United',
          'Arsenal',
        ])}

        {renderBroadcast('LaLiga', '20.02 21:45', [
          'Barcelona',
          'Atletico Madrid',
        ])}

        {renderBroadcast('F1', '05.03 14:00', [
          'Lewis Hamilton',
          'Max Verstappen',
        ])}

        {renderBroadcast('MLB', '12.04 18:45', [
          'Houston Astros',
          'New York Mets',
        ])}

        {renderBroadcast('NHL', '22.05 20:00', [
          'Vegas Golden Knights',
          'Tampa Bay Lightning',
        ])}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.black,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    backgroundColor: COLORS.cardBackground,
  },
  league: {
    fontSize: 35,
    fontFamily: FONTS.black,
    color: COLORS.main,
    textAlign: 'left',
    paddingBottom: 10,
  },
  leagueContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '65%',
  },
  matchTime: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'left',
    height: 20,
    paddingHorizontal: 8,
    marginTop: 5,
    opacity: 0.3,
  },
  teams: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.medium,
    fontSize: 17,
    color: COLORS.white,
    marginLeft: 5,
    height: 35,
    opacity: 0.5,
  },
  teamsSecond: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.medium,
    fontSize: 17,
    color: COLORS.white,
    marginLeft: 5,
    height: 35,
    borderBottomRightRadius: 12,
    opacity: 0.8,
  },
});
