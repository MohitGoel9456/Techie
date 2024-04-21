import React, { useCallback, useState } from 'react';
import {
    View,
    ActivityIndicator,
    FlatList,
    StyleSheet
} from 'react-native';
import PostItem from '../../components/post/post';
import PostDetail from '../../components/postDetail/postDetail';
import { useFetchPosts } from '../../hooks/useFetchPosts';

import { Post } from '../../types/post';
import { apiConfig } from '../../config/apiConfig';

import Loader from '../../components/loader/loader';

const HomeScreen = (): React.JSX.Element => {

    //pagination can be used
    const { data, error, isloading } = useFetchPosts(apiConfig.posts);
    const [selectedItem, setSelectedItem] = useState<Post | null>(null);

    const handleOnItemPress = (item: Post): void => {
        setSelectedItem(item);
    }

    const handleOnModalClose = useCallback(() => {
        setSelectedItem(null);
    }, [])

    const childCallback = useCallback(() => {
        console.log("parent rendered")
    }, [])

    const renderPostItem = ({ item }: { item: Post }) => {
        return (
            <PostItem post={item} handleOnItemPress={handleOnItemPress} />
        )
    }

    if (isloading) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <FlatList
                data={data}
                renderItem={renderPostItem}
                keyExtractor={(item: Post) => item.id}
            />
            <PostDetail post={selectedItem} handleOnModalClose={handleOnModalClose} callbackHandler={childCallback} />
        </>
    )
}

export default HomeScreen;