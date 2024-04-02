import React from "react";
import ReactIcon from "./photos/ReactIcon.png";
import DockerIcon from "./photos/DockerIcon.png";
import MySQLIcon from "./photos/MySQLIcon.png";
import JavaIcon from "./photos/JavaIcon.png";
import JavaScriptIcon from "./photos/JavaScriptIcon.png";
import TypeScriptIcon from "./photos/TypeScriptIcon.png";
import MongoDBIcon from "./photos/MongoDBIcon.png";
import NodeIcon from "./photos/NodeIcon.png";

export default function TechStack() {
  return (
    <div className="dark:bg-gray-900 pb-24 sm:pb-32" id="about">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col gap-16 bg-teal-300/50 dark:bg-white/5 px-6 py-16 ring-1 ring-white/10 md:rounded-3xl md:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center">
            <div className="flex flex-col gap-3 md:flex-1 md:px-6 md:py-16 ">
              <h2 className="text-3xl font-bold tracking-tight dark:text-white md:text-6xl">
                My favorite technologies
              </h2>
            </div>

            <div className="md:flex-2 md:bg-slate-50 md:py-12 md:rounded-3xl dark:md:bg-gray-900">
              <div className="grid gap-8 grid-cols-4 md:px-10 rounded-md">
                <img src={ReactIcon} />
                <img src={JavaScriptIcon} />
                <img src={TypeScriptIcon} />
                <img src={NodeIcon} />
                <img src={DockerIcon} />
                <img src={MySQLIcon} />
                <img src={MongoDBIcon} />
                <img src={JavaIcon} />
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
