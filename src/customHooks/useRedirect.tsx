
import { useRouter } from 'next/navigation';
import{ useEffect, useState } from 'react'

export default function useRedirect(key: string, redirectTo: string, needed: boolean) {
    const [value, setValue] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        const storedValue = localStorage.getItem(key);
        const exist = storedValue !== null;
        if (needed !== exist) {
            router.push(redirectTo);
        }
        setValue(JSON.parse(storedValue as string));
    }, [router, key, redirectTo]);
    console.log(value);
    
  return value
}
