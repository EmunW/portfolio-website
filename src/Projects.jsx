import ProjectImage from "./ProjectImage";
import TangerineData from "./photos/TangerineData.png";
import PeppermintWebsite from "./photos/PeppermintWebsite.png";

export default function Projects() {
  return (
    <div className="dark:bg-gray-900 pb-24 sm:pb-32" id="about">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto bg-teal-300/50 dark:bg-white/5 px-6 py-16 ring-1 ring-white/10 md:rounded-3xl md:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center">
            <h2 className=" text-center text-3xl font-bold tracking-tight dark:text-white md:text-6xl">
              Open Source Projects (WIP)
            </h2>
            <div className="md:flex-2 md:py-12 md:rounded-3xl dark:md:bg-gray-900">
              <div className="grid gap-8 grid-cols-2 md:px-10 rounded-md">
                <ProjectImage
                  image={TangerineData}
                  summary="Employee onboarding application"
                  link="https://github.com/Kiwano-Group/tangerine"
                />
                <ProjectImage
                  image={PeppermintWebsite}
                  summary="React test generator"
                  link="https://peppermint-landing2.vercel.app/"
                />
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
