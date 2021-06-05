import {createAppContainer, createStackNavigator, createBottomTabNavigator} from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import Registration_Form from "../Components/Registration_Form";
import ConfirmationScreen from "../Components/ConfirmationScreen";
import HomeScreen from "../Components/HomeScreen";
import Favorites from "../Components/Favorites";

const SearchStackNavigator = createStackNavigator({
/*    RegistrationForm: {
        screen: Registration_Form,
        navigationOptions: {
            headerShown: false,
            cardStyle: {backgroundColor: '#2a9d8F'},
        }
    },
    ConfirmationScreen: {
        screen: ConfirmationScreen,
        navigationOptions: {
            headerShown: false,
            cardStyle: {backgroundColor: '#2a9d8F'},
        }
    },*/
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
            cardStyle: {backgroundColor: '#2a9d8F'},
        },
    }
})

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen : HomeScreen
    },
    Favorites: {
        screen: Favorites
    }


})

export default createAppContainer(SearchStackNavigator)