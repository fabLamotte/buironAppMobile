import React from 'react'
import {View, StyleSheet, Text, ScrollView, Image, TouchableWithoutFeedback} from 'react-native'
import { useFonts } from 'expo-font';

const Production = () => {
    const [loaded] = useFonts({
        College: require('./../assets/fonts/college.ttf'),
    })
    if (!loaded) {
        return null;
    }
    return(
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.subtitle}>
                        Votre Charcuterie Buiron vous propose de nombreux 
                        produits faits maisons, provenant de fournisseurs 
                        possédants des labels qualités et vous offrant une viande 
                        respectant les saveurs d’antan.
                    </Text>
                </View>
                <View style={styles.charcuterie}>
                    <View>
                        <Text style={{fontFamily:'College', textAlign:'center', fontSize:40, color:'#CD9F22'}}>CHARCUTERIE</Text>
                        <Image 
                            style={styles.underline}
                            source={require(
                                '../assets/images/underline.png'
                            )}
                        />
                    </View>
                    <View style={styles.contCharcuterieText}>
                        <Image 
                            style={styles.imageCharcuterie}
                            source={require('./../assets/images/sausage.png')}
                        />
                        <Text style={styles.charcuterieText}>
                            Tous les produits transformés sont issus de viandes de porc essentiellement mais également de volailles de qualité. La viande de porc sélectionnée possède le label "porc d'antan", vous garantissant un produit fini de qualité. La spécialité de vos charcutiers, l'andouillette de Troyes, a obtenu de nombreuses récompenses dont le titre de champion de France en 2001.
                        </Text>
                    </View>
                    <Text style={{marginTop:20}}>
                        Pour vos barbecues, venez découvrir nos brochettes et saucisses variées pour vous régaler et épater vos convives.
                    </Text>
                </View>
                <View style={styles.traiteur}>
                    <View>
                        <Text style={{fontFamily:'College', textAlign:'center', fontSize:40, color:'#CD9F22'}}>TRAITEUR</Text>
                        <Image 
                            style={styles.underline}
                            source={require(
                                '../assets/images/underline.png'
                            )}
                        />
                    </View>
                    <View style={styles.contCharcuterieText}>
                        <Image 
                            style={styles.imageCharcuterie}
                            source={require('./../assets/images/traiteur.jpg')}
                        />
                        <Text style={styles.charcuterieText}>
                            Votre charcuterie Buiron vous propose des buffets campagnards : Salades composées, saucissonnades, différents jambons secs, terrines ou viandes froides telles que les gigot, lapin farci, poulet rôti, rôti de porc ou de bœuf...
                        </Text>
                    </View>
                    <Text style={{marginTop:20}}>
                        Retrouvez également une sélection de poissons froids : sandre, saumon, crabe, langouste, terrine de poisson, saumon fumé écossais...
                    </Text>
                    <Text style={{marginTop:20}}>
                        Pour les desserts, votre maître artisan prépare également des bavarois aux fruits, forêts noires, gâteaux de riz, fars bretons, mousses au 2 chocolats et crème caramel.
                    </Text>
                </View>
                <View>
                    <Text style={styles.paiement}>Moyens de paiement</Text>
                    <View style={styles.blockPaiement}>
                        <View style={styles.cardPaiment}><Text style={styles.cardPaiementTitle}>Espèces</Text></View>
                        <View style={styles.cardPaiment}><Text style={styles.cardPaiementTitle}>Carte bleu</Text></View>
                        <View style={styles.cardPaiment}><Text style={styles.cardPaiementTitle}>Chèques bancaires</Text></View>
                        <View style={styles.cardPaiment}><Text style={styles.cardPaiementTitle}>Carte american express</Text></View>
                        <View style={styles.cardPaiment}><Text style={styles.cardPaiementTitle}>Ticket restaurant</Text></View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 160,
        paddingLeft:30,
        paddingRight:30,
    },  
    subtitle:{
        textAlign:'center',
    },
    charcuterie:{
        marginTop:30,
    },
    underline:{
        height:100,
        width:'100%'
    },
    imageCharcuterie:{
        height:120,
        width:120,
    },
    contCharcuterieText:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:30,
        paddingRight:30,
        marginTop:-30
    },
    traiteur:{
        marginTop:50
    },
    paiement:{
        color:'#C82972',
        fontSize:25,
        marginTop:20
    },
    blockPaiement:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    cardPaiment:{
        backgroundColor:'#C82972',
        borderRadius:50,
        borderColor:'white',
        height:30,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        margin:3
    },
    cardPaiementTitle:{
        color:'white'
    }
})

export default Production;