import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Product } from "../../types/productTypes";
import { styled } from "@mui/material/styles";
interface Props {
  product: Product;
}



const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 250,
  margin: theme.spacing(2),
  padding: theme.spacing(1),
}));

const StyledCardMedia = styled(CardMedia)({
  height: 140,
});

const StyledTitle = styled(Typography)({
  fontSize: "1.25rem",
  fontWeight: 600,
});

const StyledPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

const StyledDiscount = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export default function ProductCard({ product }:Props) {
  const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);

  return (
    <StyledCard>
      <StyledCardMedia  src={product.image}  />
      <CardContent>
        <StyledTitle variant="h6">{product.title}</StyledTitle>
        <Typography variant="body1" color="text.secondary">Price: ₹{product.price}</Typography>
        <StyledDiscount variant="body2">Discount: {product.discount}%</StyledDiscount>
        <StyledPrice variant="h6">₹{discountedPrice}</StyledPrice>
      </CardContent>
    </StyledCard>
  );
}

