import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, Button } from 'react-native'
import Header from './../templates/Header'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = ({navigation}) => {
    const Stack = createStackNavigator();
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.presentation}>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name="Header"
                            component={Header}
                            option={{
                                header : () => 
                                    <Header 
                                        title="Charcuterie ArtisanaleBuirons"
                                        image="https://le-de.cdn-website.com/cd078f4673fa4088943e04d5eb04342d/dms3rep/multi/opt/5badb2e68af64a8e8c3d5d5af1613e36-640w.jpg"
                                    />
                                }}
                        />
                    </Stack.Navigator>
                    <View style={styles.block}>
                        <Text style={styles.subtitle}>Charcuterie Buiron</Text>
                        <Text stylle={styles.description}>Charcuterie artisanale Buiron à Tergnier Maître artisan charcutier près de Saint-Quentin Depuis 1961, votre Charcuterie Buiron, située à Tergnier vous accueille et vous fait découvrir de nombreux produits de qualité en viande de porc et de volaille. Venez déguster la spécialité de vos charcutiers, l'andouillette de Troyes. Cette spécialité préparée par votre charcuterie obtient chaque année de nombreuses récompenses dont celle de champion de France en 2001. Jean-François Buiron, maître...</Text>
                        <View style={styles.button}>
                            <Button 
                                title="Plus d'infos" 
                                color="#C82972"
                                accessibilityLabel="Plus d'informations"
                                onPress={() => navigation.navigate('Savoir-faire')}
                            />
                        </View>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.subtitle}>Charcuterie, Traiteur</Text>
                        <Text stylle={styles.description}>Charcutier-Traiteur près de Noyon Votre maître artisan charcutier à Tergnier Votre Charcuterie Buiron vous propose de nombreux produits faits maisons, provenant de fournisseurs possédants des labels qualités et vous offrant une viande respectant les saveurs d’antan. Côté charcuterie : Tous les produits transformés sont issus de viandes de porc essentiellement mais également de volailles de qualité. La viande de porc sélectionnée possède le label "porc d'antan", vous garantissant un produit fini de qualité. La spécialité de vos charcutiers, l'andouillette de Troyes, a obtenu de nombreuses...</Text>
                        <View style={styles.button}>
                            <Button 
                                title="Plus d'infos" 
                                color="#C82972"
                                accessibilityLabel="Plus d'informations"
                                onPress={() => navigation.navigate('Réalisations')}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:10
    },
    header:{
        flex:1,
        position:'relative',
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    presentation:{
        flex:2,
        marginLeft:40,
        marginRight:40
    },  
    img:{
        height:250,
        width:'100%',
        zIndex:1
    },
    darkFilter:{
        position:'absolute',
        height:'100%',
        width:'100%',
        zIndex:2,
        backgroundColor:'black',
        opacity:0.5,
    },
    title:{
        position:'absolute',
        zIndex:3,
        color:'white',
        fontSize:32,
        textAlign:'center',
    },
    scroll:{
        flex:1
    },
    block:{
        marginTop:30
    },  
    subtitle:{
        color:'#C82972',
        fontSize:32,
        textAlign:'center',
        marginBottom:30
    },
    button:{
        marginTop:20
    }
})

export default HomeScreen