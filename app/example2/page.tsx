import { IoIosStar } from "react-icons/io";

export default function Exemplo2() {
  return (
    <main className="flex flex-col gap-4 w-full items-center justify-center min-h-screen bg-[repeating-linear-gradient(45deg,_#f5f5f5_0px,_#f5f5f5_5px,_#d1d5db_5px,_#d1d5db_10px)]">
      <div className="bg-white p-5 rounded-md">
        {/* Grid Content*/}
        <div>
          {/*Casas*/}
          <div className="bg-casa1Background bg-cover h-40 w-80">
            <p>Entire house</p>
            <h1>Beach House on Lake Huron</h1>
          </div>
          <div className="bg-casa2Background bg-cover h-40 w-48"></div>
          <div className="bg-casa3Background bg-cover h-40 w-48"></div>
          <div className="bg-casa4Background bg-cover h-40 w-48"></div>
          <div className="bg-casa5Background bg-cover h-40 w-48"></div>
        </div>
        {/* Info Content*/}
        <div>
          <div>
            <p>Entire house</p>
            <h1>Beach House on Lake Huron</h1>
            <IoIosStar />
            <p>2.66</p>
            <p>(128 reviews)</p>
          </div>
          <p>Bayfield, ON</p>
        </div>
        {/* Button Content*/}
        <button>Check availability</button>
        <p>
          This sunny and spacious room is for those traveling light and looking
          for a comfy and cozy place to lay their head for a night... Show more
        </p>
      </div>
    </main>
  );
}
