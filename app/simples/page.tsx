import Hitalo from "../../public/Hitalo.JPG";

export default function Simples() {
  return (
    <main className="flex flex-col gap-4 w-full h-screen items-center justify-center min-h-screen bg-[repeating-linear-gradient(45deg,_#f5f5f5_0px,_#f5f5f5_5px,_#d1d5db_5px,_#d1d5db_10px)]">
      <div className="bg-white p-1 rounded-xl">
        {/*Início*/}
        <div className="">
          <img className="" src={Hitalo.src} alt="" />
          <div className="">
            <div className="">
              <p className="">Hítalo Rodrigues</p>
              <p className="">Engenheiro da Computação</p>
            </div>
            <button className="">Message</button>
          </div>
        </div>
      </div>
    </main>
  );
}
