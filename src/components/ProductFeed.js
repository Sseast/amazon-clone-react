import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {/* {products.slice(0,4)} */}

      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <>
            <Product
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            ></Product>
          </>
        ))}
      <img
        src="https://d2td6mzj4f4e1e.cloudfront.net/wp-content/uploads/sites/9/2019/11/The-Original-Taste-of-Christmas-620x330.png"
        alt=""
        className="md:col-span-full"
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <>
              <Product
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              ></Product>
            </>
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <>
            <Product
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            ></Product>
          </>
        ))}
    </div>
  );
}

export default ProductFeed;
