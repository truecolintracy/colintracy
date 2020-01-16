// import React from "react";
// import { StaticQuery, graphql } from "gatsby";
// import btoa from "btoa";
// import ProductCard from "./ProductCard";
// import VariantCard from "./VariantCard";
// import noImage from "./images/no-product-image.svg"

// function ProductCategoryCard(props) {
//   const { product, exposeVariants, categoryUri } = props;
//   const shopifyProductId = btoa(`gid://shopify/Product/${product.node.shopifyProduct}`);
//   const productUri = product.node.slug;
//   const productImage = product.node.primaryImage[0] ? product.node.primaryImage[0].url : noImage;
//   const productTitle = product.node.title;

//   return (
//     <StaticQuery
//       query={productQuery}
//       render={data => {
//         const productFound = data.allShopifyProduct.edges.find(
//           el => el.node.shopifyId === shopifyProductId
//         );
        
//         const variants = productFound.node.variants;
//         const minPrice = productFound.node.priceRange.minVariantPrice.amount;
//         const maxPrice = productFound.node.priceRange.maxVariantPrice.amount;
//         const skus = (productFound.node.variants).map((variant, index) => (
//           variant.sku
//         )); 

//         if (exposeVariants) {
//           return (
//             <React.Fragment>
//               {variants.map((variant, index) => (
//                 <VariantCard
//                   key={index}
//                   productImage={variant.image.originalSrc}
//                   productTitle={productTitle}
//                   options={variant.selectedOptions}
//                   price={variant.price}
//                   sku={variant.sku}
//                   uri={`/store/${categoryUri}/${productUri}`}
//                 />
//               ))}
//             </React.Fragment>
//           );
//         } else {
//           return (
//             <ProductCard
//               productImage={productImage}
//               productTitle={productTitle}
//               minPrice={minPrice}
//               maxPrice={maxPrice}
//               skus={skus}
//               uri={`/store/${categoryUri}/${productUri}`}
//             />
//           );
//         }
//       }}
//     />
//   );
// }

// export default ProductCategoryCard;

// const productQuery = graphql`
//   query productQuery {
//     allShopifyProduct {
//       edges {
//         node {
//           id
//           shopifyId
//           handle
//           title
//           priceRange {
//             minVariantPrice {
//               amount
//               currencyCode
//             }
//             maxVariantPrice {
//               amount
//               currencyCode
//             }
//           }
//           variants {
//             id
//             shopifyId
//             title
//             price
//             sku
//             image {
//               originalSrc
//             }
//             selectedOptions {
//               name
//               value
//             }
//           }
//         }
//       }
//     }
//   }
// `;