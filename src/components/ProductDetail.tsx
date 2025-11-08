import type { IProduct } from "../pages/Product";

// const props = {
// products
//}
interface IProductDetailProps{
  products : IProduct[]
}
const ProductDetail = (props:IProductDetailProps) => {

 const { products} = props;
 if(!products) return <p> Loading</p>
 // const products = props.products
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
