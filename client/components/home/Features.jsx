function Features() {
  const features = [
    {
      id: 1,
      title: 'Easy to Use',
      description:
        'CardGenius makes it simple to create professional ID cards for your organization or events.',
    },
    {
      id: 2,
      title: 'Smart Generation',
      description:
        'CardGenius makes it simple to create professional ID cards for your organization or events.',
    },
    {
      id: 3,
      title: 'Secure Data',
      description:
        'CardGenius ensures the security and privacy of your data, giving you peace of mind.',
    },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-br from-violet-800 to-violet-700 text-white relative overflow-hidden py-10 sm:py-20">
      <div className="flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
          Our Features
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 text-center w-full sm:w-3/4 ">
          CardGenius makes it simple to create professional ID cards for your
          organization or events.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature) => (
            <div
              className="bg-violet-500 text-white p-6 rounded-lg shadow-md w-full sm:w-64"
              key={feature.id}
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-white transform rotate-45 translate-y-12 translate-x-12 opacity-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white transform rotate-45 -translate-y-12 -translate-x-12 opacity-10" />
    </section>
  );
}

export default Features;
