import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import Tabs from "./Navigation/BottomTab";


export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tabs/>
            </NavigationContainer>
        );
    }
}

