import React, { Component } from 'react';

import { Animated, Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Block, Text, Input, Navbar } from '../components';
import { theme, mocks } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

class Explorer extends Component {
    state = {
        searchFocus: new Animated.Value(0.6),
        searchString: ''
    };

    handleSearchFocus = (status) => {
        Animated.timing(
            this.state.searchFocus, {
                toValue: status ? 0.8 : 0.6,
                duration: 150
            }
        ).start();
    }

    renderSearch = () => {
        const { searchString, searchFocus } = this.state;
        const isEditing = searchFocus && searchString;

        return (
            <Block animated middle flex={searchFocus} style={styles.search}>
                <Input
                    placeholder="Search"
                    onFocus={() => this.handleSearchFocus(true)}
                    onBlur={() => this.handleSearchFocus(false)}
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.searchInput}
                    onChangeText={(text) => this.setState({ searchString: text })}
                    value={searchString}
                    onRightPress={() => isEditing ? this.setState({ searchString: null }) : null}
                    rightStyle={styles.searchRight}
                    rightLabel={
                        <Icon
                            name={isEditing ? "close" : "search"}
                            size={theme.sizes.base / 1.6}
                            color={theme.colors.gray2}
                            style={styles.searchIcon}
                        />
                    }
                />
            </Block>
        )
    }

    renderImage = (img, index) => {
        const { navigation } = this.props;
        const sizes = Image.resolveAssetSource(img);
        const fullWidth = width - (theme.sizes.padding * 2.5);
        const resize = (sizes.width * 100) / fullWidth;
        const imgWidth = resize > 75 ? fullWidth : sizes.width * 1;

        return (
            <TouchableOpacity
                key={`image-${index}`}
                onPress={() => navigation.navigate('Product')}
            >
                <Image source={img} style={[styles.image, { minWidth: imgWidth, maxWidth: imgWidth }]} />
            </TouchableOpacity>
        );
    }

    renderExplore = () => {
        const { images, navigation } = this.props;
        const mainImage = images[0];

        return (
            <Block style={{ marginBottom: height / 2.5 }}>
                <TouchableOpacity
                    style={[styles.image, styles.mainImage]}
                    onPress={() => navigation.navigate('Product')}
                >
                    <Image source={mainImage} style={[styles.image, styles.mainImage]} />
                </TouchableOpacity>
                <Block row space="between" wrap>
                    {
                        images.slice(1).map(this.renderImage)
                    }
                </Block>
            </Block>
        );
    }

    renderFooter = () => {
        return (
            <LinearGradient
                locations={[0.5, 1]}
                style={styles.footer}
                colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.6)']}
            >
                <Button gradient style={{ width: width / 2.678 }} onPress={() => { }}>
                    <Text bold white center>Filter</Text>
                </Button>
            </LinearGradient>

        );
    }


    render() {
        const { navigation } = this.props;
        
        return (
            <Block>
                <Navbar leftMenu navigation={navigation} navigate="Browse" />
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 light>Browse</Text>
                    {
                        this.renderSearch()
                    }
                </Block>

                <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
                    {this.renderExplore()}
                </ScrollView>
                {this.renderFooter()}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2
    },
    search: {
        height: theme.sizes.base * 2,
        width: width - theme.sizes.base * 2
    },
    searchInput: {
        fontSize: theme.sizes.caption,
        height: theme.sizes.base * 2,
        backgroundColor: 'rgba(142, 142, 147, 0.06)',
        borderColor: 'rgba(142, 142, 147, 0.06)',
        paddingLeft: theme.sizes.base / 1.333,
        paddingRight: theme.sizes.base * 1.5
    },
    searchRight: {
        top: 0,
        marginVertical: 0,
        backgroundColor: 'transparent'
    },
    searchIcon: {
        position: 'absolute',
        right: theme.sizes.base / 1.333,
        top: theme.sizes.base / 1.6
    },
    explore: {
        marginHorizontal: theme.sizes.base * 1.25
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.1,
        width: width,
        paddingBottom: theme.sizes.base * 4
    },
    image: {
        minHeight: 100,
        maxHeight: 130,
        maxWidth: width - (theme.sizes.padding * 2.5),
        marginBottom: theme.sizes.base,
        borderRadius: 4
    },
    mainImage: {
        minWidth: width - (theme.sizes.padding * 2.5),
        minHeight: width - (theme.sizes.padding * 2.5)
    }
});

Explorer.defaultProps = {
    images: mocks.explore
}
export default Explorer;