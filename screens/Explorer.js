import React, { Component } from 'react';

import { Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Block, Text, Card, Badge, Input } from '../components';
import { theme, mocks } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

class Explorer extends Component {
    state = {
        searchString: ''
    };

    renderSearch = () => {
        const { searchString } = this.state;

        return (
            <Block middle flex={0.6} style={styles.search}>
                <Input
                    placeholder="Search"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.searchInput}
                    onChangeText={(text) => this.setState({ searchString: text })}
                    value={searchString}
                    rightStyle={styles.searchRight}
                    rightLabel={
                        <Icon
                            name="search"
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
        const fullWidth = width - (theme.sizes.base * 2.5);
        const resize = (sizes.width * 100) / fullWidth;
        const imgWidth = resize > 75 ? fullWidth : sizes.width * 1.1;

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
            <Block style={styles.footer}>
                <Text>render footer</Text>
            </Block>
        );
    }


    render() {
        return (
            <Block>
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
        marginHorizontal: theme.sizes.base * 2
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
        maxWidth: width - (theme.sizes.base * 2),
        marginBottom: theme.sizes.padding,
        borderRadius: 4
    },
    mainImage: {
        minWidth: width - (theme.sizes.base * 2),
        minHeight: width - (theme.sizes.base * 2)
    }
});

Explorer.defaultProps = {
    images: mocks.explore
}
export default Explorer;