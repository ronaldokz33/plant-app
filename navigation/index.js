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

const screens = createSwitchNavigator(
    {
        Welcome,
        Login,
        Settings,
        Product,
        Explorer,
        Browse,
        Signup,
        Forgot
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                height: theme.sizes.base * 4,
                backgroundColor: theme.colors.white,
                borderBottomCollor: '#F00',
                elevation: 0
            },
            headerBackImage: <Image source={require('../assets/icons/back.png')} />,
            headerBackTitle: null,
            headerLeftContainerStyle: {
                alignItems: 'center',
                marginLeft: theme.sizes.base * 2,
                paddingRight: theme.sizes.base
            },
            headerRightContainerStyle: {
                alignItems: 'center',
                paddingRight: theme.sizes.base
            }
        }
    }
);

export default createAppContainer(screens);