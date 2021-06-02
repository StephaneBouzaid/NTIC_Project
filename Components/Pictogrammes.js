import React from "react"
import { StyleSheet, View, Text, Image } from "react-native";

class Pictogramme extends React.Component {
    render() {
        const picto = this.props
        return (
            <View style = {styles.main_container}>
                <Image
                    style={styles.images}
                    sources={{uri : picto.url}}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container : {
        height : 100,
        width : 100
    },
    images : {
    }
})

export default Pictogramme