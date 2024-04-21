import React from 'react';
import {
    View,
} from 'react-native';
import { cardStyles } from './cardStyles';

type Iprops = {
    children: React.ReactNode;
}

const Card: React.FC<Iprops> = (props: Iprops) => {
    const { children } = props;
    return (
        <View style={cardStyles.card}>
            {children}
        </View>
    )
}


export default Card