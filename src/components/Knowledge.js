import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Knowledge = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={require('./../assets/images/devanture.png')}
                />
                <View style={styles.segment}>
                    <Image
                        style={styles.imageCont}
                        source={require('./../assets/images/history.png')}
                    />
                    <Text style={styles.textCont}>Depuis 1961, votre Charcuterie Buiron, située à Tergnier vous accueille et vous fait découvrir de nombreux produits de qualité en viande de porc et de volaille. Venez déguster la spécialité de vos charcutiers, l'andouillette de Troyes.</Text>
                </View>
                <View style={styles.segment}>
                    <Image
                        style={styles.imageCont}
                        source={require('./../assets/images/medaille.png')}
                    />
                    <Text style={styles.textCont}>Cette spécialité préparée par votre charcuterie obtient chaque année de nombreuses récompenses dont celle de champion de France en 2001.</Text>
                </View>
                <View style={styles.segment}>
                    <Image
                        style={styles.imageCont}
                        source={require('./../assets/images/team.png')}
                    />
                    <Text style={styles.textCont}>Jean-François Buiron, maître artisan charcutier depuis deux générations et son équipe, composée de dix ouvriers qualifiés ayant une expérience de plus de quarante ans dans ce domaine pour certains, mettent un point d'honneur à vous offrir des produits de qualité, sélectionnés auprès des meilleurs fournisseurs.</Text>
                </View>
                <Image 
                    style={styles.image}
                    source={require('./../assets/images/equipe.png')}
                />
                <View style={styles.segment}>
                    <Image
                        style={styles.imageCont}
                        source={require('./../assets/images/quality.png')}
                    />
                    <Text style={styles.textCont}>Les produits proposés à la vente sont issus d'une fabrication maison uniquement. Les différents fournisseurs possèdent des labels pour vous garantir une qualité irréprochable de votre viande :</Text>
                </View>
                <View style={styles.partners}>
                    <Image style={{width:'50%', height:150}} resizeMode='contain' source={require('./../assets/images/porcDAntan.png')} />
                    <Image style={{width:'50%', height:150}} resizeMode='contain' source={require('./../assets/images/fermierLandais.jpg')} />
                    <Image style={styles.landImage} resizeMode='contain' source={require('./../assets/images/impeccable.png')} />
                </View>
                <Text style={{textAlign:'center', marginTop:30, marginBottom:30}}>Vos artisans charcutiers travaillent avec passion, dans le respect des traditions et en respectant la qualité de la matière première.</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:150,
        paddingLeft:30,
        paddingRight:30,
    },
    image:{
        height:200,
        width:'100%',
        borderRadius:10,
        marginTop:50
    },
    segment:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingRight:40,
        paddingLeft:40,
        marginTop:50
    },  
    imageCont:{
        height:100,
        width:100,
        marginRight:20
    },
    partners:{
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:50
    },
})

export default Knowledge