import { IoIosStar } from "react-icons/io";
import { twMerge } from "tailwind-merge";

export default function Exemplo2() {
  return (
    <main
      className={twMerge(
        "flex flex-col gap-4",
        "w-full items-center justify-center min-h-screen",
        "bg-[repeating-linear-gradient(45deg,_#f5f5f5_0px,_#f5f5f5_5px,_#d1d5db_5px,_#d1d5db_10px)]"
      )}
    >
      <div className="flex flex-col gap-4 bg-white p-5 rounded-md">
        {/* Grid Content*/}
        <div className="sm:flex sm:gap-5">
          {/*Casas*/}
          <div className="flex flex-col justify-end p-3 bg-casa1Background bg-cover h-52">
            <p className="text-sm text-white">Entire house</p>
            <h1 className="text-xl text-white">Beach House on Lake Huron</h1>
          </div>
          <div className="sm:block sm:size-52 hidden bg-casa2Background bg-cover h-40"></div>
          <div className="hidden bg-casa3Background bg-cover h-40"></div>
          <div className="hidden bg-casa4Background bg-cover h-40"></div>
          <div className="hidden bg-casa5Background bg-cover h-40"></div>
        </div>
        {/* Info Content*/}
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-4">
            <p className="hidden">Entire house</p>
            <h1 className="hidden">Beach House on Lake Huron</h1>
            <IoIosStar className="text-primaria" />
            <p className="text-primaria">2.66</p>
            <p>(128 reviews)</p>
          </div>
          <p className="text-primaria font-semibold">Bayfield, ON</p>
        </div>
        {/* Button Content*/}
        <button className="bg-primaria rounded-md py-1 text-white">
          Check availability
        </button>
        <p className="text-gray-500">
          This sunny and spacious room is for those traveling light and looking
          for a comfy and cozy place to lay their head for a night...{" "}
        </p>
        <p className="text-primaria">Show more</p>
      </div>
    </main>
  );
}
