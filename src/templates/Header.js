import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

const Header = (title,image) =>{
    alert(props)
    return(
        <View style={styles.header}>
            <Image
                style={styles.img}
                source={{
                    uri:{image}
                }}
            />
            <View style={styles.darkFilter}></View>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
} 
const styles = StyleSheet.create({

})
export default Header