export default function Intro() {
  return (
    <div className="dark:bg-gray-900 py-24 sm:py-32" id="about">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-teal-300/50 dark:bg-white/5 px-6 py-16 ring-1 ring-white/10 md:rounded-3xl md:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="w-1/2 dark:hidden"
              src="src/photos/EWLogo.png"
              alt="My logo"
            ></img>
            <img
              className="w-1/2 hidden dark:block"
              src="src/photos/EWLogoWhite.png"
              alt="My logo"
            ></img>
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
                Hi it's me Edmund, this portfolio is currently a WIP as I try to
                imagine a good looking layout.
              </h2>
              <p className="mt-6 text-lg leading-8 dark:text-gray-300">
                I am a highly driven full stack software engineer who has
                experience creating complex open source applications using
                mostly JavaScript and React.
              </p>

              <div className="mt-10 flex">
                <a
                  href="#contact"
                  className="text-md font-semibold leading-6 text-indigo-400"
                >
                  Send me an email! <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
