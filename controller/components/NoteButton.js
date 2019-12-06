import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NoteButton = ({ btnText, onPress }) => {
    return (
        <TouchableOpacity
                style={styles.noteButton}
                onPress={onPress}
            >
                <Text style={styles.textButton}>{btnText}</Text>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    noteButton: {
        backgroundColor: '#4F5D2F',
        padding: 10,
        margin: 5,
        width: 50,
        height: 50,
    },
    textButton: {
        color: '#CFD6EA',
        alignSelf: 'center',
    }
});

export default NoteButton;