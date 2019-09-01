import React, { Component } from 'react';

import { StyleSheet, ScrollView } from 'react-native';
import { Button, Block, Text, Divider, Switch } from '../components';
import { theme, mocks } from '../constants';
import Slider from 'react-native-slider';

class Settings extends Component {
    state = {
        budget: 500,
        monthly: 600,
        notification: true,
        newsletter: false
    };

    render() {
        const { profile, navigation } = this.props;

        return (
            <Block>
                <Block flex={false} row center space="between" style={StyleSheet.header}>
                    <Text h1 light>Settings</Text>
                    <Button onPress={() => navigation.navigate('Settings')}>
                        <Image
                            source={profile}
                            style={styles.avatar}
                        />
                    </Button>
                </Block>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Block style={styles.inputs}>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text style={{ marginBottom: 10 }} gray2>Name</Text>
                                <Text bold>{profile.username}</Text>
                            </Block>
                            <Text medium secondary>
                                Edit
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text style={{ marginBottom: 10 }} gray2>Location</Text>
                                <Text bold>{profile.location}</Text>
                            </Block>
                            <Text medium secondary>
                                Edit
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text style={{ marginBottom: 10 }} gray2>E-mail</Text>
                                <Text bold>{profile.email}</Text>
                            </Block>
                        </Block>
                    </Block>
                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
                    <Block style={styles.sliders}>
                        <Block margin={[10, 0]}>
                            <Text gray2 style={{ marginBottom: 10 }}>Budget</Text>
                            <Slider
                                minimumValue={0}
                                maximumValue={1000}
                                style={{ height: 19 }}
                                thumbStyle={styles.thumb}
                                trackStyle={{ height: 6, borderRadius: 6 }}
                                minimumTrackTintColor={theme.colors.secondary}
                                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                                value={this.state.budget}
                                onValueChange={(value) => this.setState({ budget: value })}
                            />
                            <Text caption right gray>${this.state.budget.toFixed(0)}</Text>
                        </Block>
                        <Block margin={[10, 0]}>
                            <Text gray2 style={{ marginBottom: 10 }}>Monthly Cap</Text>
                            <Slider
                                minimumValue={0}
                                maximumValue={5000}
                                style={{ height: 19 }}
                                thumbStyle={styles.thumb}
                                trackStyle={{ height: 6, borderRadius: 6 }}
                                minimumTrackTintColor={theme.colors.secondary}
                                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                                value={this.state.monthly}
                                onValueChange={(value) => this.setState({ monthly: value })}
                            />
                            <Text caption right gray>${this.state.monthly.toFixed(0)}</Text>
                        </Block>
                    </Block>
                    <Divider />
                    <Block style={styles.toggles}>
                        <Block row center space="between" style={{ marginBottom: 16 }}>
                            <Text size={16} gray2>Notifications</Text>
                            <Switch
                                value={this.state.notifications}
                                onValueChange={(value) => this.setState({ notifications: value })}
                            />
                        </Block>
                        <Block row center space="between" style={{ marginBottom: 16 }}>
                            <Text size={16} gray2>Newsletter</Text>
                            <Switch
                                value={this.state.newsletter}
                                onValueChange={(value) => this.setState({ newsletter: value })}
                            />
                        </Block>
                    </Block>
                </ScrollView>
            </Block>
        );
    }
}

Settings.defaultProps = {
    profile: mocks.profile
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2
    },
    inputs: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.padding * 2
    },
    inputRow: {
        alignItems: 'flex-end'
    },
    sliders: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.padding * 2
    },
    thumb: {
        width: theme.sizes.base,
        height: theme.sizes.base,
        borderRadius: theme.sizes.base,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: theme.colors.secondary
    },
    toogles: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.padding * 2
    }
});

export default Settings;