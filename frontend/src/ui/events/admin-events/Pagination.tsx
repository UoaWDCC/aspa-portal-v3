import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.pagination}>
            <span>{itemsPerPage * (currentPage - 1) + 1} - {Math.min(itemsPerPage * currentPage, totalItems)} of {totalItems} results</span>
            <div className={styles.pageNumbers}>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => handleClick(number)}
                        className={`${styles.pageButton} ${currentPage === number ? styles.active : ''}`}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
