import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/MovieToEmoji.png" alt="Logo" width={240} height={240} />
      <p className="text-white m-5 text-3xl md:max-w-2xl text-center">
        Enter Movie or TV series names into Emojis
      </p>
      <div className="flex flex-col items-center md:flex-row md:items-stretch">
        <input
          className="border rounded-md p-2 text-white bg-black text-2xl mb-3 md:mb-0  w-full md:w-auto"
          type="text"
          placeholder="Enter movie title"
        />
        <p className="text-3xl mx-5">=</p>
        <div className="border rounded-md p-2 flex items-center justify-center bg-black w-full md:w-80 text-white text-2xl">
          This is a text
        </div>
      </div>
      <button
        type="button"
        className="
        m-5 p-5 justify-center
            bg-neutral-900 rounded-md bg-black-600
             text-white text-2xl"
      >
        Submit
      </button>
    </div>
  );
}
