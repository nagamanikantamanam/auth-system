import { styled } from '@mui/material/styles';
import ProductList from '../components/product/ProductList';
import { Container, Typography } from '@mui/material';

const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  margin: '0',
  padding: '0',
});

const Title = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(3, 0),
  textAlign: 'center',
}));

const ProductsPage = () => {
  return (
    <StyledContainer>
      <Title variant="h4">Products</Title>
      <ProductList />
    </StyledContainer>
  );
};

export default ProductsPage;
