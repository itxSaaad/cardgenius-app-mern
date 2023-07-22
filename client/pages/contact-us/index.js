import Head from 'next/head';

function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Cardgenius</title>
        <meta
          name="description"
          content="Contact us for any queries or suggestions."
        />
        <meta
          name="keywords"
          content="cardgenius, contact us, contact, query, suggestion"
        />
        <meta name="author" content="Muhammad Saad" />
      </Head>

      <section className="min-h-screen bg-gradient-to-br from-violet-900 to-violet-700 text-white flex flex-col sm:flex-row justify-center items-center relative overflow-hidden py-20 px-10 sm:p-24">
        <h1>Contact Us</h1>
      </section>
    </>
  );
}

export default ContactUsPage;
