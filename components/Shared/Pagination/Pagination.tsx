import { Pagination as PaginationControls, Container } from "@mantine/core";
import styles from "./Pagination.module.css";

type PaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  collectionLength: number;
  collectionName: string;
};

export default function Pagination({
  currentPage,
  onPageChange,
  pageSize = 10,
  collectionLength,
  collectionName,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(collectionLength / pageSize));
  const currentPageValue = Math.max(Math.min(currentPage, totalPages), 1); // Ensure valid page number

  const startIndex =
    collectionLength === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, collectionLength);

  return (
    <Container className={styles.container}>
      <div>
        {startIndex}-{endIndex} of {collectionLength} {collectionName}
      </div>
      <PaginationControls.Root
        total={totalPages}
        value={currentPageValue}
        onChange={onPageChange}
        radius="xl"
        size="md"
        classNames={{
          root: styles["pagination-root"],
          control: styles["pagination-control"],
        }}
      >
        <PaginationControls.Items />
      </PaginationControls.Root>
    </Container>
  );
}
