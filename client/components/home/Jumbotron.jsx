import Link from 'next/link';
import Button from '../ui/Button';

function Jumbotron() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 relative overflow-hidden">
      <div className="py-auto px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-violet-700 mb-4 lg:mb-6 pt-20">
          Welcome to CardGenius!
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-violet-400 leading-relaxed mb-4 lg:mb-6">
          Stand out from the crowd with professionally designed ID cards that
          reflect the uniqueness of your organization. CardGenius is your
          ultimate solution for creating stunning and professional ID cards that
          leave a lasting impression. Whether you need ID cards for your
          organization, school, or events, CardGenius has got you covered.
        </p>
        <div className="flex justify-center">
          <Link href="/generate-card">
            <Button
              variant="outline"
              className="px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-sm md:text-base lg:text-lg"
            >
              Create ID Card
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="absolute w-40 h-40 lg:w-64 lg:h-64 bg-teal-400 opacity-20 rounded-full bottom-8 right-5 blur" />
        <div className="absolute w-24 h-24 lg:w-32 lg:h-32 bg-violet-400 opacity-40 rounded-full top-3/4 left-3/4 blur" />
        <div className="absolute w-32 h-32 lg:w-40 lg:h-40 bg-teal-400 opacity-20 rounded-full top-1/4 left-1/4 blur" />
        <div className="absolute w-40 h-40 lg:w-64 lg:h-64 bg-violet-400 opacity-30 rounded-full top-1/2 left-1/6 blur" />
        <div className="absolute w-24 h-24 lg:w-32 lg:h-32 bg-violet-400 opacity-40 rounded-full top-2/3 left-1/4 blur" />
      </div>
    </section>
  );
}

export default Jumbotron;
