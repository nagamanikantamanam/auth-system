import { Card, CardContent, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 250,
  margin: theme.spacing(2),
  padding: theme.spacing(1),
}));

const StyledSkeletonImage = styled(Skeleton)({
  width: 210,
  height: 140,
});

const StyledSkeletonText = styled(Skeleton)({
  marginTop: 8,
});

const ProductSkeleton = () => {
  return (
    <StyledCard>
      <StyledSkeletonImage variant="rectangular" />
      <CardContent>
        <StyledSkeletonText width="80%" />
        <StyledSkeletonText width="40%" />
      </CardContent>
    </StyledCard>
  );
};

export default ProductSkeleton;
