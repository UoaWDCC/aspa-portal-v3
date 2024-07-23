'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react';
import { useRef, useEffect } from 'react'
import style from "./Modal.module.css"

type Props = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode,
}

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
                <div>
                    <div>
                        <h1>{ title }</h1>
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