import React, { Component } from 'react';

import { StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import { Button, Block, Text, Input, Navbar } from '../components';
import { theme } from '../constants';

export default class Forgot extends Component {
    state = {
        email: '',
        errors: [],
        loading: false
    }

    handleForgot = () => {
        const { navigation } = this.props;
        const { email } = this.state;
        const errors = [];

        Keyboard.dismiss();

        this.setState({ errors: [], loading: true });

        if (email !== 'ronaldo@atendup.com.br') {
            errors.push('email')
        }

        if (errors.length > 0) {
            this.setState({ errors, loading: false });
        } else {
            this.setState({ errors, loading: false });
            Alert.alert(
                'Password sent!',
                'Please check your email.',
                [
                    {
                        text: 'Ok',
                        onPress: () => {
                            navigation.navigate('Login');
                        }
                    }
                ],
                {
                    cancelable: false
                }
            );
        }
    }

    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = (key) => errors.includes(key) ? styles.hasErrors : null;

        return (
            <KeyboardAvoidingView style={styles.forgot} behavior="padding">
                <Block padding={[0, theme.sizes.padding * 1.2]}>
                    <Navbar />
                    <Text h1 bold>Forgot</Text>
                    <Block middle>
                        <Input
                            label="Email"
                            error={hasErrors('email')}
                            style={[styles.input, hasErrors('email')]}
                            defaultValue={this.state.email}
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                        <Button gradient onPress={() => this.handleForgot()}>
                            {
                                loading
                                    ?
                                    <ActivityIndicator size="small" color="white" />
                                    :
                                    <Text bold white center>Forgot</Text>
                            }
                        </Button>
                        <Button onPress={() => navigation.navigate('Login')}>
                            <Text bold gray center style={{ textDecorationLine: 'underline' }}>Back to login</Text>
                        </Button>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    forgot: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: '#F00'
    }
});