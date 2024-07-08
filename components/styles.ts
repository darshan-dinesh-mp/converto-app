import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inpurContainer: {
        width: '100%',
        backgroundColor: '#161925',
        paddingBottom: 10,
        borderRadius: 10,
    },
    picker: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 5,
    },
    input: {
        backgroundColor: '#e8f1f2',
        borderRadius: 5,
        borderWidth: 0.5,
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 15,
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