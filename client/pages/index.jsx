import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CardGenius - Smart ID Card Generation System</title>
        <meta
          name="description"
          content="Genereate Smart ID Cards for your employees, students, etc."
        />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to CardGenius!</h1>
        <p className="text-xl">
          CardGenius is a smart ID card generation system that allows you to
          generate ID cards for your employees, students, etc.
        </p>
      </main>
    </>
  );
}
