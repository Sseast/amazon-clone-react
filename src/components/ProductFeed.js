import Product from "./Product";

function ProductFeed({ data }) {
  if (data) {
    var series = data.projects.map((project) => {
      return (
        <li key={project.title} className="ml-1 list-none link">
          <p
            className="link"
            onClick={() => router.push(`/series/${project.url}`)}
          >
            <i className={project.className}>{project.title}</i>
          </p>
        </li>
      );
    });
  }
  return (
    <div className="">
      {/* grid grid-flow-row-dense mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52"
       */}
      {/* {data.slice(0,4)} */}

      {series}
    </div>
  );
}

export default ProductFeed;
