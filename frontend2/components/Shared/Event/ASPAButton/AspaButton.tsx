import styles from "./AspaButton.module.css"
import { Button } from '@mantine/core';
import React from 'react';

interface AspaButtonProps {
    children: React.ReactNode;
}

const AspaButton: React.FC<AspaButtonProps> = ({ children }) => {
    return (
        <Button className={styles.newbutton}>{children}</Button> // Use children in the button
    );
};

export default AspaButton;