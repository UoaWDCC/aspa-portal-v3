'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react';
import { useRef, useEffect } from 'react'
import styles from "./Modal.module.css"

type Props = {
    title: string,
    onClose: () => void,
    onOk: () => void,
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
export default function Modal({ title, onClose, onOk, children }:
    Props
) {
    const searchParams = useSearchParams()
    const modalRef = useRef<null | HTMLDialogElement>(null)
    const showModal = searchParams.get('showModal')

    useEffect(() => {
        if (showModal === 'y') {
            modalRef.current?.showModal()
        } else {
            modalRef.current?.close()
        }
    }, [showModal])

    const closeModal = () => {
        modalRef.current?.close()
        onClose()
    }

    const clickOk = () => {
        onOk()
        closeModal()
    }

    const modal: JSX.Element | null = showModal === "y"
        ? (
            <dialog ref={modalRef}>
                <div className={styles.modal}>
                    <div>
                        <h1 className={styles.h1}>{ title }</h1>
                        <button
                            onClick={closeModal}
                        >x</button>
                    </div>
                    <div>
                        {children}
                        <div>
                            <button
                                onClick={clickOk}
                            >Ok</button>
                        </div>
                    </div>
                </div>
            </dialog>
        ) : null

    return (
        modal
    );
}