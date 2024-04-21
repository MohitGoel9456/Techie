import React, { useEffect } from 'react';
import { apiConfig } from '../../config/apiConfig';
import { useFetchSinglePost } from '../../hooks/useFetchSinglePost';
import { Post } from '../../types/post';
import BottomSheet from '../bottomSheet/bottomSheet';
import Loader from '../loader/loader';
import PostItem from '../post/post';

type Iprops = {
    post: Post | null;
    handleOnModalClose: () => void;
    callbackHandler: () => void;
}

const PostDetail: React.FC<Iprops> = React.memo((props: Iprops) => {

    const { post, handleOnModalClose } = props;
    const { data, isloading, error } = useFetchSinglePost(`${apiConfig.singlePost}${post?.id}`);

    useEffect(() => {
        console.log("Details page re-rendered")
    })
    console.log("data", data)
    if (!data || !post) {
        return null;
    }

    return (
        <BottomSheet isVisible={true} onClose={handleOnModalClose}>
            {isloading ?
                <Loader />
                :
                <PostItem post={data} />
            }
        </BottomSheet>
    )
})

export default PostDetail;