import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const StyledPagination = styled(Pagination)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  justifyContent: 'center',
}));

export default function CustomPagination({
  totalPages,
  currentPage,
  onPageChange,
}: Props) {
  return (
    <StyledPagination
      count={totalPages}
      page={currentPage}
      onChange={onPageChange}
    />
  );
}
