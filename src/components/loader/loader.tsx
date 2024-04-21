import React from "react";
import {
    View,
    ActivityIndicator
} from 'react-native';
import { loaderStyles } from "./loaderStyles";

const Loader = () => {
    return (
        <View style={loaderStyles.container}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default Loader;