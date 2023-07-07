import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tarasivska</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
      </Head>

      <header className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <h1 className="text-3xl text-white">Tarasivska</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-cente flex-col">
          <h2 className="font-bold my-5 text-3xl">Великий зал 40м</h2>
          <div className="w-[400px] ">
            <img src="/big-hall.jpeg" alt="big hall" />
          </div>

          <div className="my-8 flex justify-center items-center flex-col ">
            <p>Лінк щоб додати календар собі -</p>
            <p>
              https://calendar.google.com/calendar/ical/tarasovska.studio%40gmail.com/public/basic.ics
            </p>
          </div>

          <iframe
            src="https://calendar.google.com/calendar/embed?src=tarasovska.studio%40gmail.com&ctz=Europe%2FKiev"
            style={{ border: '0' }}
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>

          <h2 className="font-bold my-5 text-3xl mt-20">Малий зал 20м</h2>

          <div className="my-8 flex justify-center items-center flex-col ">
            <p>Лінк щоб додати календар собі -</p>
            <p className="w-[600px]">
              https://calendar.google.com/calendar/ical/eb09ccf067b7a5e2c0cc56ea4ba3e4030ccc00818ed70ed9c9399e00a0aae324%40group.calendar.google.com/public/basic.ics
            </p>
          </div>

          <iframe
            src="https://calendar.google.com/calendar/embed?src=eb09ccf067b7a5e2c0cc56ea4ba3e4030ccc00818ed70ed9c9399e00a0aae324%40group.calendar.google.com&ctz=Europe%2FKiev"
            style={{ border: '0' }}
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </main>

      <footer className="bg-gray-900 py-4 text-center text-white">
        <div className="container mx-auto px-4">
          <p>&copy; 2023 Tarasivska. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
