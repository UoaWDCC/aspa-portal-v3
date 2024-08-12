'use client'

import React from 'react';
import { useRef, useEffect } from 'react'
import styles from "./Modal.module.css"

type Props = {
    showModal: boolean,
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
export default function Modal({ showModal, onConfirm, onDeny, children }:
    Props
) {
    const modalRef = useRef<null | HTMLDialogElement>(null)
  
    useEffect(() => {
      if (showModal == true) {
          modalRef.current?.showModal()
      } else {
          modalRef.current?.close()
      }
    }, [showModal])


    // Ensure that there is at least one button to close the modal
    if (!onConfirm && !onDeny) {
        throw new InvalidModalError("The modal has no onConfirm or no onDeny function");
    }

    const modal: JSX.Element | null = showModal === true
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
                                : <button onClick={onConfirm} className={styles.confirmButton}>Confirm</button>
                            }
                            {!onDeny
                                ? null
                                : <button onClick={onDeny} className={styles.denyButton}>Deny</button>
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