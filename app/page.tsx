import Image from "next/image";
import { Register } from "@/components/Register";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-44 pb-36 px-4">
      <div className="flex flex-col justify-center">
        <span className="flex justify-center pb-20">
          <Image
            alt="zerops logo"
            src="zerops.svg"
            width={100}
            height={100}
            draggable={false}
          />
        </span>
        <h1 className="text-[#292929] text-7xl font-bold text-center">
          Zerops <span className="text-[#616A71]">+</span> Nextjs
        </h1>
        <p className="max-w-3xl text-center text-2xl mt-12 font-semibold">
          A Static Next.js example for Zerops that you can deploy in 2 steps
          (Technically, we don't count Ctrl + V... but who's checking?). Scroll
          down to learn how to deploy.
        </p>
        <div className="flex flex-row space-x-5 justify-center mt-16 font-semibold">
          <a href="https://discord.gg/5ptAqtpyvh" target="_blank">
            <span className="bg-[#3776C6] hover:bg-[#4c85d0] text-[#fff] px-8 py-3 text-xl rounded-full duration-75">
              Discord Community
            </span>
          </a>
          <a href="https://docs.zerops.io" target="_blank">
            <span className="bg-[#EAF4F7] hover:bg-[#ddeaef] text-[#1E2020] px-8 py-3 text-xl rounded-full duration-75">
              Docs
            </span>
          </a>
        </div>
        <Steps />
      </div>
      <Register />
    </main>
  );
}
