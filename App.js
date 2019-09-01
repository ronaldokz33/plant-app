import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

import Navigation from './navigation';
import { Block } from './components';
import * as constants from './constants';

const images = [
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/avatar.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/icons/back.png')
];
export default class App extends Component {
  state = {
    isLoadingComplete: false
  }

  handleResources = async () => {
    const cacheImages = images.map((img) => {
      return Asset.fromModule(img).downloadAsync();
    });

    return Promises.all();
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResources}
          onError={(err) => console.log(err)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      )
    }
    return (
      <View style={styles.container} >
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
