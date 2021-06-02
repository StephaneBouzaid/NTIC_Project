import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList} from 'react-native'
import {getImageFromDatabase} from "../API/API_Database";
import Pictogramme from "./Pictogrammes";

class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { images: [] }
    }

    _loadImage() {
        getImageFromDatabase().then(data => console.log(data));
    }



    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.top_container}>
                    <View style={styles.searchBar}>
                        <Text style={styles.text}>Barre des pictos</Text>
                    </View>
                    <TouchableOpacity style={styles.readButton}>
                        <ImageBackground source={require('../Images/ReadIcone.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
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
                    <TouchableOpacity activeOpacity={0.7} style={styles.pictos_container} onPress={this._loadImage}>
                        <FlatList
                            data = {this.state.images}
                            renderItem={({item}) => <Pictogramme image={item} />}
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
        marginBottom: 15
        //borderColor: '#FFFFFF',
        //borderWidth: 2
    },
    searchBar: {
        flex: 0.8,
        flexDirection: 'column',
        marginTop: 10,
        justifyContent: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 60,
    },
    readButton: {
        flex: 0.08,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#F0B0D6',
        borderRadius: 70,
        elevation: 10
    },
    deleteButton: {
        flex: 0.08,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#ff4b4b',
        borderRadius: 70,
        elevation: 10
    },
    favButton: {
        flex: 0.08,
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
        flex: 0.12,
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
        marginTop: 10,
        marginLeft: 15,
        alignItems: 'center',
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
    }
})

export default HomeScreen