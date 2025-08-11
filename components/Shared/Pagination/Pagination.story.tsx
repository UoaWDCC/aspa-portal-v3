import Pagination from "./Pagination";
import { useState } from "react";

export default {
  title: "Shared/Pagination",
  component: Pagination,
};

export const Default = () => {
  const [page, setPage] = useState(1);

  return (
    <Pagination
    currentPage={page}
    onPageChange={setPage}
    pageSize={10}
    collectionLength={21}
    collectionName="Events"
    />
  )
};