import React, { Component } from 'react';

import { StyleSheet, KeyboardAvoidingView, Keyboard, ActivityIndicator, ScrollView } from 'react-native';
import { Button, Block, Text, Input, Navbar } from '../components';
import { theme } from '../constants';

export default class Signup extends Component {
    state = {
        email: 'ronaldo@atendup.com.br',
        name: 'Ronaldo',
        phone: '(37) 991283601',
        CPF: '(37) 991283601',
        senha: '123',
        confirmSenha: '123',
        errors: [],
        loading: false
    };

    handlSignup = () => {
        const { navigation } = this.props;
        const { email, senha, name, phone, CPF, confirmSenha } = this.state;
        const errors = [];

        Keyboard.dismiss();

        this.setState({ errors: [], loading: true });

        if (!email) errors.push('email');
        if (!senha) errors.push('senha');
        if (!confirmSenha) errors.push('confirmSenha');
        if (!name) errors.push('name');
        if (!phone) errors.push('phone');
        if (!CPF) errors.push('CPF');

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
            <KeyboardAvoidingView style={styles.signup} behavior="height">
                <Navbar leftMenu navigation={navigation} navigate="Welcome"  />
                <ScrollView>
                    <Block padding={[10, theme.sizes.base * 2]}>
                        <Text h1 bold>Signup</Text>
                        <Block middle>
                            <Input
                                label="Name"
                                error={hasErrors('name')}
                                style={[styles.input, hasErrors('name')]}
                                defaultValue={this.state.name}
                                onChangeText={(text) => this.setState({ name: text })}
                            />
                            <Input
                                label="Phone"
                                error={hasErrors('phone')}
                                style={[styles.input, hasErrors('phone')]}
                                defaultValue={this.state.phone}
                                onChangeText={(text) => this.setState({ phone: text })}
                            />
                            <Input
                                label="CPF"
                                error={hasErrors('CPF')}
                                style={[styles.input, hasErrors('CPF')]}
                                defaultValue={this.state.CPF}
                                onChangeText={(text) => this.setState({ CPF: text })}
                            />
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
                            <Input
                                label="Confirm Senha"
                                secure
                                error={hasErrors('confirmSenha')}
                                style={[styles.input, hasErrors('confirmSenha')]}
                                defaultValue={this.state.confirmSenha}
                                onChangeText={(text) => this.setState({ confirmSenha: text })}
                            />
                            <Button gradient onPress={() => this.handlSignup()}>
                                {
                                    loading
                                        ?
                                        <ActivityIndicator size="small" color="white" />
                                        :
                                        <Text bold white center>Signup</Text>
                                }
                            </Button>
                            <Button onPress={() => navigation.navigate('Login')}>
                                <Text bold gray center style={{ textDecorationLine: 'underline' }}>Already registered?</Text>
                            </Button>
                        </Block>
                    </Block>
                </ScrollView>
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
    signup: {
        flex: 1,
        justifyContent: 'center'
    },
    hasErrors: {
        borderBottomColor: '#F00'
    }
});