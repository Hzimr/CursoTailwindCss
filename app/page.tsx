import Cover from "../public/cover.png";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-full h-screen items-center justify-center min-h-screen bg-[repeating-linear-gradient(45deg,_#f5f5f5_0px,_#f5f5f5_5px,_#d1d5db_5px,_#d1d5db_10px)]">
      <div className="bg-white p-1 rounded-md">
        <h1
          className={`font-serif text-center px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl`}
        >
          Bem vindo ao curso de Tailwindcss
        </h1>
      </div>
      <div className="bg-white shadow-md box-border border-solid border-8 rounded-md">
        {/* Início*/}
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-6 rounded-2xl">
          <div>
            <img
              className="size-48 shadow-xl rounded-md"
              src={Cover.src}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-sans font-medium text-2xl">
              Class Warfare
            </span>
            <span className="font-semibold text-sky-500">
              The Anti-Patterns
            </span>
            <span className="flex gap-2 font-medium text-gray-600">
              <span>No. 4</span>
              <span className="text-lg font-bold">·</span>
              <span>2025</span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
