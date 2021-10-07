import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Error() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Thibault Ayad | About</title>
        <meta name="keywords" content="photos prints" />
      </Head>
      <div className="w-full align-center">
        <h1 className="text-2xl font-bold">Oooooops...</h1>
        <h2 className="text-lg font-semibold">That page cannot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a className="link">Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Error;
