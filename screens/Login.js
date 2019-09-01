import React, { Component } from 'react';

import { StyleSheet, KeyboardAvoidingView, Keyboard, ActivityIndicator } from 'react-native';
import { Button, Block, Text, Input } from '../components';
import { theme } from '../constants';

export default class Login extends Component {
    state = {
        email: 'ronaldo@atendup.com.br',
        senha: '123',
        errors: [],
        loading: false
    };

    handleLogin = () => {
        const { navigation } = this.props;
        const { email, senha } = this.state;
        const errors = [];

        Keyboard.dismiss();

        this.setState({ errors: [], loading: true });

        if (email !== 'ronaldo@atendup.com.br') {
            errors.push('email ')
        }

        if (senha !== '123') {
            errors.push('senha ')
        }

        if (errors.length > 0) {
            this.setState({ errors, loading: false });
        } else {
            this.setState({ errors, loading: false });
            navigation.navigate('Browse');
        }
    }

    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

        return (
            <KeyboardAvoidingView style={styles.login} behavior="padding">
                <Block padding={[0, theme.sizes.base * 2]}>
                    <Text h1 bold>Login</Text>
                    <Block middle>
                        <Input
                            label="Email"
                            error={hasErrors('email')}
                            style={[styles.input, hasErrors('email')]}
                            defaultValue={this.state.email}
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                        <Input
                            label="Senha"
                            secure
                            error={hasErrors('senha')}
                            style={[styles.input, hasErrors('senha')]}
                            defaultValue={this.state.senha}
                            onChangeText={(text) => this.setState({ senha: text })}
                        />
                        <Button gradient onPress={() => this.handleLogin()}>
                            {
                                loading
                                    ?
                                    <ActivityIndicator size="small" color="white" />
                                    :
                                    <Text bold white center>Login</Text>
                            }
                        </Button>
                        <Button onPress={() => navigation.navigate('Forgot')}>
                            <Text bold gray center style={{ textDecorationLine: 'underline' }}>Forgot your password?</Text>
                        </Button>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    login: {
        flex: 1,
        justifyContent: 'center'
    },
    hasErrors: {
        borderBottomColor: '#F00'
    }
});