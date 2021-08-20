import { auto } from "async";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container_landing:{
        backgroundColor: '#64C9CF',
        width: '100%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    input:{
        backgroundColor: '#fff',
        margin: 10,
        height: 35,
        fontSize: 20,
        borderRadius: 25,
        paddingLeft: 15
    },
    Header1:{
        fontSize: 25
    },
    textSignUp:{
        color: '#FFB740',
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: '#FFB740',
        height: 40,
        width: 120,
        borderRadius: 25,
        position: 'relative',
        left: 120,
        textAlign: 'center',
        marginBottom: 30,
        paddingTop: 3
    },
    button_text:{
        fontSize:20
    },
    header:{
        backgroundColor: '#DF711B',
        width: '100%',
        height: 50,
    },
    base:{
        width: '100%',
        height: '100%'
    },
    hamburger:{
        position: 'relative',
        top: 10,
        left: 10,
        width: 30
    },
    hamburger1:{
        backgroundColor: '#FFB740',
        width: 25,
        height: 3,
        borderRadius: 25,
        margin: 3
    },
    hamburger2:{
        backgroundColor: '#FDE49C',
        width: 20,
        height: 3,
        borderRadius: 25,
        margin: 3
    },
    hamburger3:{
        backgroundColor: '#64C9CF',
        width: 15,
        height: 3,
        borderRadius: 25,
        margin: 3
    },
    trackholster:{
        position: 'relative',
        top: 10,
        borderColor: '#64C9CF',
        borderWidth: 2,
        width: 330,
        height: 330,
        borderRadius: 25
    },
    lastpalyedlist:{
        position: 'relative',
        top: 20,
    },
    tracktab:{
        flex: 2,
        alignItems: 'flex-start',
        width: 350
    },
    body:{
        flex: 1,
        alignItems: 'center',
    },
    add:{
        backgroundColor: '#FDE49C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'relative',
        top: 20,
        left: 120
    },
    addSize:{
        fontSize: 35,
        fontWeight: 'bold',
    }
});

/*
*   Colors
*   BaseOrange: #DF711B
*   OverlayOrange: #FFB740
*   LightBaishe: #FDE49C
*   SkyBlue: #64C9CF
*/