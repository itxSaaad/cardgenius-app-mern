import RegisterForm from '../ui/RegisterForm';

function GetStarted() {
  return (
    <section className="min-h-screen flex flex-col sm:flex-row justify-center items-center relative overflow-hidden p-10 sm:p-20">
      <div className="flex flex-col items-start justify-start mx-auto px-4 mb-4 sm:mb-0 sm:px-6 lg:px-8 sm:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-violet-700 mb-4 lg:mb-6">
          Get Started with CardGenius!
        </h1>
        <p className="text-md md:text-lg text-violet-500 leading-relaxed mb-4">
          CardGenius is your one-stop solution for creating professional ID
          cards for your organization, school, or events. Get started now and
          create stunning ID cards that leave a lasting impression.
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-500 underline underline-offset-8">
          Sign Up Now!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 w-full sm:w-1/2">
        <div className="w-full border-2 border-teal-500 rounded-lg mx-auto p-4 sm:p-6 lg:p-8">
          <RegisterForm />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-0.5 h-40 bg-violet-700 transform rotate-45 translate-y-4 translate-x-8 opacity-20" />
      <div className="absolute top-0 left-0 w-0.5 h-40 bg-violet-700 transform rotate-45 translate-y-10 translate-x-6 opacity-70" />
      <div className="absolute top-0 left-0 w-0.5 h-40 bg-violet-700 transform rotate-45 translate-y-12 translate-x-10 opacity-40" />

      <div className="absolute bottom-0 right-0 w-0.5 h-40 bg-violet-700 transform rotate-45 -translate-y-12 -translate-x-10 opacity-40" />
      <div className="absolute bottom-0 right-0 w-0.5 h-40 bg-violet-700 transform rotate-45 -translate-y-10 -translate-x-6 opacity-70" />
      <div className="absolute bottom-0 right-0 w-0.5 h-40 bg-violet-700 transform rotate-45 -translate-y-4 -translate-x-8 opacity-20" />
    </section>
  );
}

export default GetStarted;
