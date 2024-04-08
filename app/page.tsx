import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center py-24">
         <Image alt="zerops logo" src="zerops.svg" width={100} height={100} draggable={false} />
        </div>
        <h1 className="text-[#292929] text-7xl font-bold text-center">Zerops <span className="text-[#616A71]">+</span> Nextjs</h1>
        <p className="max-w-3xl text-center text-2xl mt-12 text-[#616A71] font-semibold">A Static Next.js example for Zerops that you can deploy in 2 clicks (Technically, we don't count Ctrl + V... but who's checking?). Scroll down to learn how to deploy.</p>
        <div className="flex flex-row space-x-10 justify-center mt-16">
          <a href="https://discord.gg/S45UC5qNnz" target="_blank">
            <span className="bg-[#3776C6] hover:bg-[#4c85d0] text-[#fff] px-8 py-3 text-xl rounded-full duration-75">Discord Community</span>
          </a>
          <a href="https://app.zerops.io/registration" target="_blank">
            <span className="bg-[#EAF4F7] hover:bg-[#ddeaef] text-[#1E2020] px-8 py-3 text-xl rounded-full duration-75">Register</span>
          </a>
        </div>
      </div>
    </main>
  );
}
