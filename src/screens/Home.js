import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  Image,
  Text,
  ListView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Orientation from 'react-native-orientation';
import ElevatedView from '../components/ElevatedView';
import { screenWidth, screenHeight } from '../config/metrics';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(['Alif', 'Ba', 'Ta', 'Sa', 'Ja']),
    };
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  render() {
    return (
      <Image source={require('../../assets/img/kids-bg.jpg')} style={styles.imageContainer}>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
        />
      </Image>
    );
  }

  _renderRow(rowData) {
    return (
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('HurufHijaiyah')}}>
          <ElevatedView elevation={5} style={styles.rowButton}>
            <Text style={styles.rowButtonText}>{rowData}</Text>
          </ElevatedView>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'transparent',
    marginTop: 30,
    marginBottom: 30,
    width: 300
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowContainer: {
    backgroundColor: 'transparent',
    padding: 10
  },
  rowButton: {
    backgroundColor: '#deb887',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowButtonText: {
    color: 'brown',
    fontSize: 25,
    fontFamily: 'Sarala',
    fontWeight: 'bold'
  }
});
