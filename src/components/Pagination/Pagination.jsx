import { Pagination as MuiPagination, PaginationItem } from "@mui/material";
import { pagination, pagintaionItems } from "./paginationStyles";

export const Pagination = ({ onChange, page, count }) => {
  return (
    <MuiPagination
      page={page}
      count={count}
      variant="outlined"
      shape="rounded"
      size="large"
      color="secondary"
      onChange={onChange}
      sx={pagination}
      renderItem={(item) => <PaginationItem sx={pagintaionItems} {...item} />}
    />
  );
};
