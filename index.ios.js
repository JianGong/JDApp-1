/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
import Header from './Header';
import MainScreen from './MainScreen';

class JdApp extends Component {
    render() {
        return (
            <View>
                <MainScreen>

                </MainScreen>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('JdApp', () => JdApp);
