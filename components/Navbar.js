// import React, { Component } from 'react';
// import { StyleSheet, Image } from 'react-native';
// import { Block } from './Block';

// export default class Navbar extends Component {
//     render() {
//         console.warn("chegou aqui");

//         const { leftMenu, rightMenu, navigation } = this.props;

//         return (
//             <Block style={styles.container}>
//                 {leftMenu &&
//                     <Block style={styles.leftMenu} onPress={() => navigation.back()}>
//                         <Image source={require('../assets/icons/back.png')} />
//                     </Block>
//                 }
//                 {
//                     rightMenu &&
//                     <Block style={styles.rightMenu}>
//                         <Image source={require('../assets/icons/back.png')} />
//                     </Block>
//                 }
//             </Block>
//         ); 
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//         height: 50,
//         justifyContent: 'space-between'
//     },
//     leftMenu: {
//         alignItems: 'flex-start',
//         justifyContent: 'center'
//     },
//     rightMenu: {
//         alignItems: 'flex-end',
//         justifyContent: 'center'
//     }
// });


// export default Navbar;


import React, { Component } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

import Block from './Block';
import Text from './Text';
import { theme } from '../constants';

export default class Navbar extends Component {
    render() {
        const { leftMenu, rightMenu, navigation, navigate } = this.props;
        return (
            <Block style={styles.container} space="between" flex={false} row center>
                {leftMenu &&
                    <Block style={styles.leftMenu}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(navigate);
                        }}>
                            <Image source={require('../assets/icons/back.png')} />
                        </TouchableOpacity>
                    </Block>
                }
                {
                    rightMenu &&
                    <Block style={styles.rightMenu}>
                        <Image source={require('../assets/icons/back.png')} />
                    </Block>
                }
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: theme.sizes.base * 2,
        marginTop: 35,
        height: theme.sizes.base * 4
    },
    leftMenu: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rightMenu: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});