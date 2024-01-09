import { useEffect } from 'react';
import { useRouter } from 'next/router';

const BusinessIndexPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/business/platform');
    }, []);

    return null;
};

export default BusinessIndexPage;