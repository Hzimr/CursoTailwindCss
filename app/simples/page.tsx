import Hitalo from "../../public/Hitalo.JPG";

export default function Simples() {
  return (
    <main className="flex flex-col gap-4 w-full h-screen items-center justify-center min-h-screen bg-[repeating-linear-gradient(45deg,_#f5f5f5_0px,_#f5f5f5_5px,_#d1d5db_5px,_#d1d5db_10px)]">
      <div className="bg-principal p-1 rounded-xl">
        {/*Início*/}
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
          <img
            className="mx-auto block size-20 rounded-full sm:mx-0 sm:shrink-0"
            src={Hitalo.src}
            alt=""
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-black">
                Hítalo Rodrigues
              </p>
              <p className="font-medium text-gray-500">
                Engenheiro da Computação
              </p>
            </div>
            <button className="border-2 bg-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-md py-[2px] px-3">
              Message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
