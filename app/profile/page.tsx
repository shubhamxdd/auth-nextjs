import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="mx-10 mt-4">
        <h1 className="text-center text-4xl font-bold">Profile Page</h1>
        <div className="justify-center items-center flex">
          <Link
            href={"/"}
            className="mx-40 mt-4 text-xl font-medium underline hover:text-blue-600"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
