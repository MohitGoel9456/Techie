import { useEffect, useState } from 'react';
import { getAxios } from '../services/apiService';
import { Post } from '../types/post';

export const useFetchPosts = (url: string) => {
    const [data, setData] = useState<Post[]>([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res: Post[] = await getAxios(url);
                if (res) {
                    setData(res);
                    setIsLoading(false);
                }
            } catch (err) {
                setError(`${error} Could not Fetch Data `);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return {
        data,
        isloading,
        error
    }
}