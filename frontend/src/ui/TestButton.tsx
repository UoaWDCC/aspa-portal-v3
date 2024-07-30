'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import styles from "./TestButton.module.css";

type Params = {
    key: string,
    value: string,
}

export default function TestButton() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()
    const showModal = searchParams.get('showModal')

    function updateSearchParams({key, value}: Params) {
        const params = new URLSearchParams(searchParams)
        if (value) {
          params.set(key, value)
        } else {
          params.delete(key)
        }
        
        const newUrl = `${pathname}?${params.toString()}`
        replace(newUrl)
    }

    function handleClick() {
        if (showModal === 'y') {
            updateSearchParams({key: "showModal", value: "n"})
        } else {
            updateSearchParams({key: "showModal", value: "y"})
        }
    }

    return (
        <div className={styles.button}>
            <button onClick={handleClick}>Toggle Modal</button>
        </div>
    );
}