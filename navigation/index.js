import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Browse from '../screens/Browse';
import Explorer from '../screens/Explorer';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';

import { theme } from '../constants';

const screens = createStackNavigator({
    Welcome,
    Login,
    Settings,
    Product,
    Explorer,
    Browse
}, {
        defaultNavigationOptions: {
            headerStyle: {},
            headerBackImage: <Image />,
            headerBackTitle: null,
            headerLeftContainerStyle: {},
            headerRightContainerStyle: {}
        }
    });

export default createAppContainer(screens);