import Card from '../components/ui/Card';

function ContactScreen() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-violet-900 to-violet-700 text-white flex flex-col sm:flex-row justify-center items-center relative overflow-hidden py-20 px-10 sm:p-24">
        <Card>
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-violet-600 mb-4 lg:mb-6">
              Contact Us
            </h1>
            <p className="text-center text-teal-500 text-xl font-bold">
              If you have any questions or concerns, please feel free to contact
              us at:
            </p>
            <p className="text-center">
              <a
                href="mailto:info@cardgenius.com"
                className="text-violet-600 hover:text-violet-700 text-2xl underline"
              >
                info@cardgenius.com
              </a>
            </p>
            <p className="text-center text-teal-500 mt-3">
              We will get back to you as soon as possible...!
            </p>
            <p className="text-center text-teal-500">
              Thank you for contacting us!
            </p>
            <p className="text-center text-violet-500 text-2xl font-bold mt-4">
              Have a great day!
            </p>
          </div>
        </Card>
      </section>
    </>
  );
}

export default ContactScreen;
