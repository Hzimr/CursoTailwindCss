import Cover from "../public/cover.png";

export default function Home() {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      <div className="shadow-md box-border border-solid border-8 rounded-md">
        <div className="">
          <div>
            <img className="size-48" src={Cover.src} alt="" />
          </div>
        </div>
        <div>
          <span>Class Warfare</span>
          <span>The Anti-Patterns</span>
          <span>
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </main>
  );
}
