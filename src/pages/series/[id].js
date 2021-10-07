export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  const paths = data.map((photo) => {
    return {
      params: { id: photo.id.toString() },
    };
  });

  return { paths, fallback: false };
};

import Image from "next/image";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/" + id);
  const data = await res.json();
  return { props: { photo: data } };
};

function Details({ photo }) {
  return (
    <>
      <Image src={photo.url} width="300 " height="300"></Image>{" "}
      {/* <Image src={photo.thumbnailUrl} width="300 " height="300"></Image>{" "} */}
      {/* <h1>{photo.title}</h1> */}
    </>
  );
}

export default Details;
