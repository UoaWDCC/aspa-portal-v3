import { Pagination as PaginationControls } from "@mantine/core";


type PaginationProps = {
    totalPages: number,
    currentPage: number,
    onPageChange: (page: number) => void,
    pageSize?: number,
    collectionName: string;
}

export default function Pagination({
    totalPages,
    currentPage,
    onPageChange,
    pageSize = 10,
    collectionName,
}: PaginationProps) {
    
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <div className="pagination">
            {pageSize * currentPage} of {totalPages * pageSize} {collectionName}
            <PaginationControls total={totalPages} color="teal" radius="lg" withControls={false} />
        </div>
    )
}