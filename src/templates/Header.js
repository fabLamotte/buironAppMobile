import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

const Header = (props) =>{
    const title = props.title
    const image = props.image

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    style={styles.img}
                    source={{
                        uri:image
                    }}
                />
                <View style={styles.darkFilter}></View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex:1
    },  
    header:{
        position:'relative',
        height:150,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        position:'absolute',
        height:150,
        width:'100%',
        zIndex:1
    },
    darkFilter:{
        position:'absolute',
        height:150,
        width:'100%',
        backgroundColor:'black',
        opacity:0.5,
        zIndex:2
    },
    title:{
        position:'absolute',
        color:'white',
        zIndex:3,
        fontSize:45,
        textAlign:'center',
        textShadowColor: 'black', textShadowOffset: { width: 3, height: 3 }, textShadowRadius: 1
    }
})

export default Header