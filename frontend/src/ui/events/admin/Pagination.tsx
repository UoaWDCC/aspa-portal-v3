import React from 'react';
import { usePagination, DOTS } from './usePagination';
import styles from "./Pagination.module.css";

interface PaginationProps {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className={`${styles['pagination-container']} ${className}`}>
            <li
                className={`${styles['pagination-item']} ${currentPage === 1 ? styles['disabled'] : ''}`}
                onClick={onPrevious}
            >
                <div className={styles['arrow-left']}> {'<'} </div>
            </li>
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return <li key={index} className={`${styles['pagination-item']} ${styles['dots']}`}>&#8230;</li>;
                }
                return (
                    <li
                        key={index}
                        className={`${styles['pagination-item']} ${pageNumber === currentPage ? styles['selected'] : ''}`}
                        onClick={() => onPageChange(pageNumber as number)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={`${styles['pagination-item']} ${currentPage === lastPage ? styles['disabled'] : ''}`}
                onClick={onNext}
            >
                <div className={styles['arrow-right']}> {'>'} </div>
            </li>
        </ul>
    );
};

export default Pagination;
