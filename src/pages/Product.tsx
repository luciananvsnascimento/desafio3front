import DescriptionProduct from "../components/DescriptionProduct"
import ProductArea from "../components/ProductArea"
import RelatedProduct from "../components/RelatedProduct"
import { Product } from '../types/Product';

const ProductPage:React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <ProductArea/>
      <DescriptionProduct/>
      <RelatedProduct product={product}/>
    </div>
  )
}

export default ProductPage;
