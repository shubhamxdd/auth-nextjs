import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-3 mx-10">
        <h1 className="font-bold text-4xl text-center mb-4">Aien</h1>
        <div className="flex gap-5">
          <Link
            href={"/login"}
            className="bg-blue-500 text-white rounded-md outline-none hover:bg-blue-600 py-2 px-4"
          >
            Login
          </Link>
          <br />
          <Link
            href={"/signup"}
            className="bg-blue-500 text-white rounded-md outline-none hover:bg-blue-600 py-2 px-4"
          >
            SignUp
          </Link>
        </div>
      </div>
    </>
  );
}
