import {getCounter} from '@/app/data';
import {incrementCounter} from './actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const initialCount =  await getCounter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Next.js Counter App</h1>
      </div>

      <div className="relative flex place-items-center">
        <h2 className="text-2xl">Current Count: {initialCount}</h2>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <form action={incrementCounter}>
          <button
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            type="submit"
          >
            Increment Counter
          </button>
        </form>
      </div>
    </main>
  );
}
