import { useEffect, useState } from 'react';
import { getAxios } from '../services/apiService';
import { Post } from '../types/post';

export const useFetchSinglePost = (url: string) => {
    const [data, setData] = useState<Post | null>(null);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res: Post = await getAxios(url);
                if (res) {
                    setData(res);
                }
            } catch (err) {
                setError(`${error} Could not Fetch Data `);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {
        data,
        isloading,
        error
    }
}