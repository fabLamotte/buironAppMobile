import React from 'react'
import {View, StyleSheet, Text, ScrollView, Button, StatusBar } from 'react-native'
const Home = ({navigation}) => {
    return(
        <ScrollView style={styles.scroll}>
            <View style={styles.presentation}>
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
    )
}
const styles = StyleSheet.create({
    scroll:{
        flex:1,
        marginTop: 150,
        marginBottom:10
    },
    presentation:{
        flex:2,
        marginLeft:40,
        marginRight:40
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
export default Home