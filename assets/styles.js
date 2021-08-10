import React, {Component, useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {color, set} from 'react-native-reanimated';

const Styles = StyleSheet.create({
  h25grey: {
    width: '95%',
    height: '25%',
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3.5,
  },
  h25col: {
    width: '95%',
    borderRadius: 10,
    height: '25%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#ffb6b6',
    // alignItems: '',
    justifyContent: 'center',
    flex: 3.5,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  h25row: {
    width: '95%',
    borderRadius: 10,
    height: '25%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#ffb6b6',
    alignItems: 'center',
    flex: 3.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  h10: {
    width: '95%',
    borderRadius: 10,
    height: '10%',
    marginBottom: 20,
    paddingVertical: 2,
    backgroundColor: '#22326E',
    alignItems: 'center',
  },

  pressed: {
    backgroundColor: 'skyblue',
    width: 'auto',
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  notPressed: {
    backgroundColor: 'lightgrey',
    width: 'auto',
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textPressed: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  textNotPressed: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
  },
});

export default Styles;