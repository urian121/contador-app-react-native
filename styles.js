import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHuge: {
        fontSize: 200,
        fontWeight: '500',
        color: '#6d28d2',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#6d28d2',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4,
    },
    positionRight: {
        right: 20,
    },
    positionLeft: {
        left: 20,
    },
    positionCenter: {
        textAlign: 'center',
    },

});
