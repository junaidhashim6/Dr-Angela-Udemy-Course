import React from "react";
export default function List(){
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];
      const lisItems = products.map(product=>
        <li key={product.id}>
            {product.title}
        </li>
        );
        return(
            <ul>{lisItems}</ul>
        );
}