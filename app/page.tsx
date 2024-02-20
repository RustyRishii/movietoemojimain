import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-white m-5 text-3xl md:max-w-2xl text-center">
        Enter Movie or TV series names into Emojis
      </p>
      <div className="flex flex-col items-center md:flex-row md:items-stretch">
        <input
          className="border rounded-md p-2 text-black text-3xl mb-3 md:mb-0 md:mr-3 w-full md:w-auto"
          type="text"
          placeholder="Enter movie title"
        />
        <p className="text-3xl p-5 ">=</p>
        <div className="border rounded-md p-2 flex items-center justify-center bg-white w-full md:w-96 text-black text-3xl">
          This is a text
        </div>
      </div>
      <button
        type="button"
        className="
        m-5 p-2 justify-center
            border-2 border-white rounded-md bg-black-600
             text-white  text-3xl"
        // onClick={swap}
      >
        Submit
      </button>
    </div>
  );
}
