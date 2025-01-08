import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center text-white">
      <div className="w-full max-w-[420px] h-full flex mx-auto flex-col justify-center gap-5">
        <h1 className="text-4xl flex flex-col items-center justify-center">
          The best journal app period
        </h1>
        <p className="text-4xl text-white/60">This is the best app for tracking your app throughout your live you just have to be honest</p>
        <p className="text-4xl text-white/60">I really like the style of these elements</p>
        <Link href="/journal">
          <button className="bg-blue-600 py-2 px-10 rounded-lg text-lg text-white">
            click me
          </button>
        </Link>
      </div>
    </div>
  );
}
