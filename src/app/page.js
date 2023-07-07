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
          <h2 className="font-bold my-5 text-3xl mt-20">Календар</h2>

          <p>Зелений малий, синій великий</p>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FKiev&showTitle=0&showPrint=0&showTabs=1&showCalendars=0&showTz=0&mode=WEEK&showDate=1&title=tarasiska_main&src=dGFyYXNvdnNrYS5zdHVkaW9AZ21haWwuY29t&src=ZWIwOWNjZjA2N2I3YTVlMmMwY2M1NmVhNGJhM2U0MDMwY2NjMDA4MThlZDcwZWQ5YzkzOTllMDBhMGFhZTMyNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23c4681f&color=%23039BE5"
            style={{ borderWidth: '0' }}
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>

          {/* <h2 className="font-bold my-5 text-3xl">Великий зал 40м</h2>
          <div className="w-[400px] ">
            <img src="/big-hall.jpeg" alt="big hall" />
          </div> */}
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
