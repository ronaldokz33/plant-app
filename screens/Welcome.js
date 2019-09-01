import React, { Component } from 'react';

import { StyleSheet, Animated, Dimensions, Modal, FlatList, Image, ScrollView } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');
class Welcome extends Component {
    state = {
        showTerms: false
    };

    scrollX = new Animated.Value(0);

    static navigationOptions = {
        header: null
    };

    renderSteps = () => {
        const { illustrations } = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);

        return (
            <Block row center middle style={styles.stepsContainer}>
                {
                    illustrations.map((item, index) => {
                        const opacity = stepPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.4, 1, 0.4],
                            extrapolate: 'clamp'
                        });
                        return (
                            <Block animated flex={false} key={`step-${index}`} color="gray" style={[styles.steps, { opacity }]} />
                        );
                    })
                }
            </Block>
        );
    }

    renderIllustrations = () => {
        const { illustrations } = this.props;

        return (
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={illustrations}
                extraData={this.state}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => (
                    <Image
                        source={item.sosurce}
                        resizeMode="contain"
                        style={{ width, height: height / 2, overflow: 'visible' }}
                    />
                )}
                onScroll={
                    Animated.event([
                        {
                            nativeEvent: { contentOffset: { x: this.scrollX } }
                        }
                    ])
                }
            />
        );
    }

    renderTermsService = () => {
        return (
            <Modal animationType="slide" visible={this.state.showTerms}>
                <Block padding={[theme.sizes.padding * 2, theme.sizes.padding]} space="between">
                    <Text h2 light>Modal</Text>
                    <ScrollView style={{ paddingVertical: theme.sizes.padding }}>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </ScrollView>
                    <Button gradient onPress={() => this.setState({ showTerms: false })}>
                        <Text center white>I understand</Text>
                    </Button>
                </Block>
            </Modal>
        );
    }

    render() {
        const { navigation } = this.props;

        return (
            <Block style={styles.container}>
                <Block center middle flex={0.5}>
                    <Text h1 center bold>
                        Your Home
                        <Text h1 primary>Greener</Text>
                    </Text>

                    <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}> Enjoy the expirience</Text>
                </Block>
                <Block center middle>
                    {this.renderIllustrations()}
                    {this.renderSteps()}
                </Block>
                <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                    <Button gradient onPress={() => navigation.navigate('Login')}>
                        <Text center semibold white>Login</Text>
                    </Button>
                    <Button shadow onPress={() => navigation.navigate('Signup')}>
                        <Text center semibold>Signup</Text>
                    </Button>
                    <Button onPress={() => this.setState({ showTerms: true })}>
                        <Text center caption gray>Terms of Services</Text>
                    </Button>
                </Block>
                {this.renderTermsService()}
            </Block>
        );
    }
}

Welcome.defaultProps = {
    illustrations: [
        {
            id: 1,
            source: require('../assets/images/illustration_1.png')
        },
        {
            id: 2,
            source: require('../assets/images/illustration_2.png')
        },
        {
            id: 3,
            source: require('../assets/images/illustration_3.png')
        }
    ]
}
export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F00'
    },
    stepsContainer: {
        position: 'absolute',
        bottom: this.sizes.base * 3,
        right: 0,
        left: 0
    },
    steps: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5
    }
});