'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import React from 'react';
import { useRef, useEffect } from 'react'
import styles from "./Modal.module.css"

type Props = {
    onConfirm: (() => void) | null,
    onDeny: (() => void) | null,
    children: React.ReactNode,
}

type Params = {
    key: string,
    value: string,
}

/**\
 * Function to return the modal component for any necessary popups
 * 
 * @param title The title to be displayed in the modal
 * @param onClose function handle to tell modal what function to call when closed
 * @param onOk function handle to tell modal what function to call when ok is clicked
 * @param children any children of the modal tag to insert to body of modal
 * 
 * @returns the modal component
 */
export default function Modal({ onConfirm, onDeny, children }:
    Props
) {
    const searchParams = useSearchParams()
    const modalRef = useRef<null | HTMLDialogElement>(null)
    const showModal = searchParams.get('showModal')

    const pathname = usePathname()
    const {replace} = useRouter()

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

    // Ensure that there is at least one button to close the modal
    if (!onConfirm && !onDeny) {
        throw new InvalidModalError("The modal has no onConfirm and no onDeny function");
    }

    useEffect(() => {
        if (showModal === 'y') {
            modalRef.current?.showModal()
        } else {
            modalRef.current?.close()
        }
    }, [showModal])

    const closeModal = () => {
        modalRef.current?.close()
        updateSearchParams({key: "showModal", value: "n"})
    }

    const clickDeny = () => {
        if (onDeny) {
            onDeny()
        }
        closeModal()
    }

    const clickConfirm = () => {
        if (onConfirm) {
            onConfirm()
        }
        closeModal()
    }

    const modal: JSX.Element | null = showModal === "y"
        ? (
            <dialog ref={modalRef}>
                <div className={styles.modal}>
                    <div className={styles.text}>
                        {children}
                    </div>
                        <div className={styles.buttonContainer}>
                            {/*If onConfirm or onDeny are null then don't include their buttons*/}
                            {!onConfirm
                                ? null
                                : <button onClick={clickConfirm} className={styles.confirmButton}>Confirm</button>
                            }
                            {!onDeny
                                ? null
                                : <button onClick={clickDeny} className={styles.denyButton}>Deny</button>
                            }
                        </div>
                </div>
            </dialog>
        ) : null

    return (
        modal
    );
}

class InvalidModalError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Modal is invalid"
    }
}