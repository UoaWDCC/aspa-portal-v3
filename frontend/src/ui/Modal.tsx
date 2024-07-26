'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react';
import { useRef, useEffect } from 'react'
import styles from "./Modal.module.css"

type Props = {
    onConfirm: (() => void) | null,
    onDeny: (() => void) | null,
    children: React.ReactNode,
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

    if (!onConfirm && !onDeny) {
        return null;
    }

    useEffect(() => {
        if (showModal === 'y') {
            modalRef.current?.showModal()
        } else {
            modalRef.current?.close()
        }
    }, [showModal])

    const clickDeny = () => {
        if (onDeny) {
            onDeny()
        }
        modalRef.current?.close()
    }

    const clickConfirm = () => {
        if (onConfirm) {
            onConfirm()
        }
        modalRef.current?.close()
    }

    const modal: JSX.Element | null = showModal === "y"
        ? (
            <dialog ref={modalRef}>
                <div className={styles.modal}>
                    <div className={styles.text}>
                        {children}
                    </div>
                        <div className={styles.buttonContainer}>
                            {onConfirm==null
                                ? null
                                : <button onClick={clickConfirm} className={styles.confirmButton}>Confirm</button>
                            }
                            {onDeny==null
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