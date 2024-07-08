import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inpurContainer: {
        width: '100%',
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
    },
    picker: {
        color: 'black',
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 0.5,
        padding: 10,
        color: 'black',
    },
    resultInput: {
        color: 'black',
        fontWeight: '900',
    },
    icon: {
        marginVertical: 20,
        transform: [{ rotate: '90deg' }],
        alignSelf: 'center'
    },
});

export default styles;