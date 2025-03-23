import { styled } from "@mui/material/styles";
import ProductList from "../components/product/ProductList";
import { Container, Typography } from "@mui/material";


const StyledContainer = styled(Container)({
  textAlign: "center",
});

const Title = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(3, 0),
  textAlign: "center",
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
