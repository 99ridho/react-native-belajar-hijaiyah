import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Orientation from 'react-native-orientation';
import ElevatedView from '../components/ElevatedView';
import { screenWidth, screenHeight } from '../config/metrics';
import { NavigationActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';

export default class HurufHijaiyahViewerScreen extends Component {
  render() {

    const { arabic, latin, pronounciation } = this.props.navigation.state.params;

    return (
      <Image source={require('../../assets/img/kids-bg.jpg')} style={styles.imageContainer}>
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
          <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
            <ElevatedView elevation={5} style={styles.backButton}>
              <Entypo name='arrow-left' size={35} color="brown" />
            </ElevatedView>
          </TouchableOpacity>
        </View>
        <View style={styles.centerHurufContainer}>
          <ElevatedView elevation={5} style={styles.hurufContainer}>
              <Text style={styles.arabicText}>{arabic}</Text>
              <Text style={styles.latinArabicText}>{latin}</Text>
              <Text style={styles.latinArabicText}>{pronounciation}</Text>
          </ElevatedView>
          <TouchableOpacity onPress={() => {}}>
            <ElevatedView elevation={5} style={styles.playButton}>
              <Entypo name='controller-play' size={35} color="brown" />
            </ElevatedView>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: 'transparent'}}>

        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: null,
    justifyContent: 'center'
  },
  backButton: {
    backgroundColor: '#deb887',
    height: 60,
    width: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
    marginLeft: 10
  },
  playButton: {
    backgroundColor: '#deb887',
    height: 60,
    width: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  hurufContainer: {
    backgroundColor: '#deb887',
    height: 260,
    width: 350,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'brown',
    fontSize: 17,
    fontFamily: 'Sarala',
    fontWeight: 'bold'
  },
  arabicText: {
    color: 'brown',
    fontSize: 125,
    fontWeight: 'bold'
  },
  latinArabicText: {
    color: 'brown',
    fontSize: 25,
    fontFamily: 'Sarala',
    fontWeight: 'bold'
  },
  centerHurufContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center'
  }
});