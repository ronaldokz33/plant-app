import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Browse from '../screens/Browse';
import Explorer from '../screens/Explorer';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';

import { theme } from '../constants';

const screens = createSwitchNavigator({
    Welcome,
    // Login,
    // Settings,
    // Product,
    // Explorer,
    // Browse,
    // Signup,
    // Forgot
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