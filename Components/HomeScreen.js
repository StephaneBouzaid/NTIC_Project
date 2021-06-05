import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, Image} from 'react-native'
import {getImageFromDatabase} from "../API/API_Database";
import Pictogramme from "./Pictogrammes";
import SelectedPictos from "./SelectedPictos";

let tab1=[{IDpictogramme: 0, Nom:"", url:"https://i.ibb.co/8xLp2bk/fond.png"}];

class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { images: [], test: "" }
    }

    async _loadImage(childData) {
        const res = await getImageFromDatabase()
        this.setState({images: res})
    }

    callbackFunction = (childData) => {
        this.setState({test: childData})
    }

    tabUpdate(tab) {
        if (this.state.test){
            tab.push(this.state.test)
            for (let i=0; i<tab.length; i++) {
                console.log(tab[i].Nom)
            }
        }

        console.log(tab[0].Nom)

    }

    tabDeleteLastElement(tab) {
        tab.pop();
        return tab
    }

    render() {
        this.tabUpdate(tab1)
        return (
            <View style={styles.main_container}>
                <View style={styles.top_container}>
                    <View style={styles.searchBar}>
                        <FlatList
                            numColumns={8}
                            data={tab1}
                            keyExtractor={(item) => item.IDpictogramme.toString()}
                            renderItem={({item}) => <SelectedPictos image={item}/>}/>
                    </View>
                    <TouchableOpacity style={styles.readButton}>
                        <ImageBackground source={require('../Images/ReadIcone.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => {this.tabDeleteLastElement(tab1)}}>
                        <ImageBackground source={require('../Images/DeleteIcone.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.favButton}>
                        <ImageBackground source={require('../Images/FavIcone.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bot_container}>
                    <View style={styles.favoritePictosContainer}>
                        <View style={styles.favoritePictos}>
                            <Text style={styles.text}>Favoris</Text>
                        </View>
                        <View style={styles.favoritePictos}>
                            <Text style={styles.text}>Favoris</Text>
                        </View>
                        <View style={styles.favoritePictos}>
                            <Text style={styles.text}>Favoris</Text>
                        </View>
                        <View style={styles.favoritePictos}>
                            <Text style={styles.text}>Favoris</Text>
                        </View>
                        <View style={styles.favoritePictos}>
                            <Text style={styles.text}>Favoris</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={styles.pictos_container} onPress={() => {this._loadImage()}}>
                        <FlatList
                            numColumns={9}
                            data={this.state.images}
                            keyExtractor={(item) => item.IDpictogramme.toString()}
                            renderItem={({item}) => <Pictogramme parentCallback={this.callbackFunction} image={item}/>}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 30,
        backgroundColor: '#2a9d8F'
        //borderColor: '#FFFFFF',
        //borderWidth: 2
    },
    top_container: {
        flex: 0.15,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        //borderColor: '#FFFFFF',
        //borderWidth: 2
    },
    bot_container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 110
        //borderColor: '#FFFFFF',
        //borderWidth: 2
    },
    searchBar: {
        flex: 0.8,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-start',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 60,
    },
    selectedPictos: {
        flex : 0.07,
        height: 70,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 120,
        borderWidth: 2,
        borderColor: '#FFFFFF'
    },
    readButton: {
        flex: 0.07,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#F0B0D6',
        borderRadius: 70,
        elevation: 10
    },
    deleteButton: {
        flex: 0.07,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#ff4b4b',
        borderRadius: 70,
        elevation: 10
    },
    favButton: {
        flex: 0.07,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ffb036',
        borderRadius: 70,
        elevation: 10
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },
    favoritePictosContainer: {
        flex: 0.11,
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 5,
        justifyContent: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 70
    },
    favoritePictos: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 70
    },
    pictos_container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 15,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 30
    },
    pressIcone: {
        flex: 1,
        marginTop: 230,
        marginLeft: 300,
        width: '45%',
        height: '45%',
        opacity: 0.8,
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    test: {
        resizeMode: 'contain',
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200
    }
})

export default HomeScreen