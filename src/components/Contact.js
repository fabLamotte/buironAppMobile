import React from 'react'
import {StyleSheet, Text, View, Image, SafeAreaView, Button, TextInput, CheckBox} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Contact = () => {
    const [nom, onChangeLastname] = React.useState("")
    const [prenom, onChangeFirstname] = React.useState("")
    const [email, onChangeEmail] = React.useState("")
    const [demande, onChangeDemand] = React.useState("")
    const [message, onChangeMessage] = React.useState("")
    const [isSelected, setSelection] = React.useState(false)
    const [buttonDisabled, setCheck] = React.useState(true)
    let errorForm = 0

    const verifyCheck = () => {
        isSelected?setCheck(true):setCheck(false)
    }
    
    const checkIfNotEmpty = () =>{
        const datas = [nom,prenom,email,demande,message]
        datas.forEach(data => {
                if(data === ''){
                    errorForm++
                }    
            }
        )
    }

    const verifyEmail = () => {
        const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
        let check = false
        email.match(regex)? check = true : check = false
        return check
    }

    const send = () => {
        // On check si tout les champs ne sont pas vide
            checkIfNotEmpty(nom,prenom,email,demande,message)
            const emptyMessage = "Certains champs sont vides"
            if(errorForm !== 0){
                alert(emptyMessage)
                return 
            }
        
        // On vérifie le format du champ d'email
            let checkEmail = verifyEmail(email)
            const errorEmailFormat = "L'adresse de messagerie fournie est incorrecte"
            if(checkEmail === false){
                alert(errorEmailFormat)
                return
            }

        // On envoi le message de validation une fois terminé
        alert("Nous vous remercions pour votre message " + prenom + " " + nom + ", ce dernier a été envoyé avec succès ! ))")
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.postalAdresse}>
                    <Text>Charcuterie Buiron</Text>
                    <Text>68 Bld. Gambetta,</Text>
                    <Text>Tergnier, 02700, France</Text>
                </View>
            </View>
            <View style={styles.phone}>
                <Text>Tel: 03 23 57 01 49 </Text>
            </View>
            <View style={styles.emailAdresse}>
                <Text>charcuterie-buiron@wanadoo.fr</Text>
            </View>
            <View style={styles.map}>
                <Text style={styles.title}>Où trouver votre charcuterie artisanale ?</Text>
                <Text style={styles.indication}>La Charcuterie Buiron se situe à Tergnier, sur l'axe Chauny / La Fère. Tergnier est placé au centre du carré Saint-Quentin, Soissons, Laon, Noyon</Text>
                <Image 
                    style={styles.mapImage}
                    source={require('./../assets/images/map.png')}
                />
            </View>
            <View style={styles.formBlock}>
                <Text style={styles.title}>Formulaire de contact</Text>
                <Text>Champs obligatoires*</Text>
                <View style={styles.form}>
                    <View style={styles.fields}>
                        <SafeAreaView>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeLastname}
                                value={nom}
                                keyboardType="default"
                                placeholder="Nom:*"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeFirstname}
                                value={prenom}
                                placeholder="Prénom:*"
                                keyboardType="default"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder="Email:*"
                                keyboardType="email-address"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeDemand}
                                value={demande}
                                placeholder="Demande:*"
                                keyboardType="default"
                            />
                            <TextInput
                                editable
                                style={styles.input}
                                multiline
                                numberOfLines={4}
                                onChangeText={onChangeMessage}
                                value={message}
                            />
                            <View style={styles.acceptTerms}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    onChange={verifyCheck}
                                />
                                <Text style={styles.terms}>
                                    * En cochant cette case, j'accepte les conditions particulières ci-dessous** Nous avons besoin de votre consentement pour charger le service ReCaptcha! Nous utilisons reCAPTCHA pour vérifier les informations que vous avez saisies. Ce service peut collecter des données sur votre activité. Veuillez consulter les détails et accepter le service pour continuer.
                                </Text>
                                <View style={styles.send}>
                                <Button
                                    onPress={() => {send()}}
                                    title="Envoyer"
                                    color="#C82972"
                                    disabled={buttonDisabled}
                                />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.precisions}>** Les données personnelles communiquées sont nécessaires aux fins de vous contacter. Elles sont destinées à Charcuterie Buironet ses sous-traitants. Vous disposez de droits d’accès, de rectification, d’effacement, de portabilité, de limitation, d’opposition, de retrait de votre consentement à tout moment et du droit d’introduire une réclamation auprès d’une autorité de contrôle, ainsi que d’organiser le sort de vos données post-mortem. Vous pouvez exercer ces droits par voie postale à l'adresse 68 Bld. Gambetta 02700 Tergnier, ou par courrier électronique à l'adresse satisfactionclient[a]solocalms[.]fr. Un justificatif d'identité pourra vous être demandé. Nous conservons vos données pendant la période de prise de contact puis pendant la durée de prescription légale aux fins probatoires et de gestion des contentieux.</Text>
                            </View>
                        </SafeAreaView>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
        marginTop:160
    },
    postalAdresse:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    phone:{
        alignItems:'center',
        marginTop:30
    },
    emailAdresse:{
        alignItems:'center',
        marginTop:30
    },
    title:{
        alignItems:'center',
        textAlign:'center',
        fontSize:30,
        marginTop:30,
        fontFamily:'College',
        color:'#C82972'
    },
    indication:{
        color:'black',
        alignItems:'center',
        textAlign:'center',
        paddingLeft:30,
        paddingRight:30
    },
    mapImage:{
        height:150,
        width:'100%',
        marginTop:50
    },
    fields:{
        marginLeft:50,
        marginRight:50,
        marginTop:40
    },
    input:{
        borderWidth:1,
        fontSize:23,
        margin:3,
        paddingLeft:5
    },
    acceptTerms:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },  
    terms:{
        textAlign:'center'
    },
    precisions:{
        color:'#727272',
        marginBottom:40,
        marginTop:30
    },
})

export default Contact