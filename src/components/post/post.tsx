import React, { useMemo } from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { Post } from '../../types/post';
import Card from '../card/card';
import { styles } from './styles';

type Iprops = {
    post: Post;
    handleOnItemPress?: (post: Post) => void;
    callbackHandler?: () => void;
}

const PostItem: React.FC<Iprops> = (props: Iprops) => {
    const { post, handleOnItemPress } = props;
    const { userId, id, title, body } = post;

    const heavyComputation = useMemo(
        () => {
            const start = Date.now();
            // Simulating heavy computation
            let result = '';
            for (let i = 0; i < 100000; i++) {
                result += Math.random();
            }
            const end = Date.now();
            return end - start;
        },
        [post],
    );

    const onItemPress = () => {
        if (handleOnItemPress) {
            handleOnItemPress(post)
        }
    }

    const renderItem = ({ title, value, color = 'black' }: { title: string, value: string | number, color?: string }): React.ReactNode => {
        return (
            <Text>
                <Text style={styles.title}>{`${title} : `}</Text>
                <Text style={{ color: color }}>{value}</Text>
            </Text>
        )
    }

    return (
        <Card>
            <TouchableOpacity onPress={onItemPress}>
                {renderItem({ title: 'userId', value: userId })}
                {renderItem({ title: 'id', value: id })}
                {renderItem({ title: 'title', value: title })}
                {renderItem({ title: 'body', value: body })}
                {renderItem({ title: 'Time taken', value: heavyComputation, color: 'red' })}
            </TouchableOpacity>
        </Card>
    )
}

export default PostItem;