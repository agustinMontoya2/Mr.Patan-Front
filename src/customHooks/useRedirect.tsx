"use client";
import { useRouter } from 'next/navigation';
import{ useEffect, useState } from 'react'

export default function useRedirect<T>(key: string, redirectTo: string, needed: boolean) {
    const [value, setValue] = useState<T | null>(null);
    const router = useRouter();
    useEffect(() => {
        const storedValue = localStorage.getItem(key);
        const exist = storedValue !== null;
        if (needed !== exist) {
            router.push(redirectTo);
        }
        if (storedValue) {
            setValue(JSON.parse(storedValue) as T);
        }
    }, [router, key, redirectTo]);
    
  return value
}
