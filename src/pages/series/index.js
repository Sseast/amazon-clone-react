export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5"
  );
  const data = await res.json();

  return { props: { photos: data } };
};
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

function Series({ photos }) {
  return (
    <>
      <Head>
        <title>Thibault Ayad | Series</title>
        <meta name="keywords" content="photos prints" />
      </Head>
      <div>
        {photos.map((photo) => (
          <>
            <Link href={"/series/" + photo.id} key={photo.id}>
              <a href="">
                <Image src={photo.url} width="300 " height="300"></Image>
              </a>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

export default Series;
