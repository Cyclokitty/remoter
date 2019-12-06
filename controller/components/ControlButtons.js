import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ControlButtons = ({ btnText, onPress }) => {
    return (
        <TouchableOpacity
                style={styles.ctrlButton}
                onPress={onPress}
            >
                <Text style={styles.textButton}>{btnText}</Text>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    ctrlButton: {
        backgroundColor: '#d81159',
        padding: 10,
        margin: 5,
        width: 75,
        height: 75,
    },
    textButton: {
        color: '#73D2DE',
        alignSelf: 'center',
        justifyContent: 'center',
    }
});

export default ControlButtons;