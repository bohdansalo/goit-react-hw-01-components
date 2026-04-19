// PRACTIC

// import { Component } from "react";

// export class ProductList extends Component {
//   state = {
//     products: [
//       {
//         title: "apple",
//         price: 50,
//       },
//       {
//         title: "Cherry",
//         price: 45,
//       },
//       {
//         title: "Watermelon",
//         price: 100,
//       },
//     ],
//     test: "text",
//   };

//   addProduct = (e) => {
//     e.preventDefault();
//     const productTitle = e.target.elements.title.value;
//     const productPrice = e.target.elements.price.value;
//     console.log(productTitle);
//     console.log(productPrice);

//     const newProduct = {
//       title: productTitle,
//       price: productPrice,
//     };

//     console.log(this.state.products);
//     this.state.products.push(newProduct);
//   };

//   render() {
//     return (
//   <ul>
//     <li>
//       <h2>{this.state.products[0].title}</h2>
//       <p>{this.state.products[0].price}</p>
//     </li>
//     <li>
//       <h2>{this.state.products[1].title}</h2>
//       <p>{this.state.products[1].price}</p>
//     </li>
//     <li>
//       <h2>{this.state.products[2].title}</h2>
//       <p>{this.state.products[2].price}</p>
//     </li>
//   </ul>
//       <div className="">
//         <form onSubmit={this.addProduct}>
//           <input type="text" name="title" />
//           <input type="text" name="price" />

//           <button>Додати новий продукт</button>
//         </form>
//         <ul>
//           {this.state.products.map((product) => {
//             return (
//               <li>
//                 <h2>{product.title}</h2>
//                 <p>{product.price}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
