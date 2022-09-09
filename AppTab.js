import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Alerts from './Alerts';
import Config from './ConfigForms';

const { Navigator, Screen } = createNativeStackNavigator();

function AppTab() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Config" component={Config} /> 
                 <Screen name="Alerts" component={Alerts} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppTab;