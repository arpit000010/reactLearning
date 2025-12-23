import React from "react";

function Card() {
  return (
    <div>
      <h1>Vite with Tailwind</h1>
      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img
          class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/35205805/pexels-photo-35205805.jpeg"
          alt=""
          width="312"
          height="312"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-semibold">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-cyan-600">Sarah Dayan</div>
            <div class="text-gray-500">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>

      <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
        <a href="#">
          <img
            class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="https://images.pexels.com/photos/35205805/pexels-photo-35205805.jpeg"
            alt=""
            width="312"
            height="312"
          />
        </a>
        <a href="#">
          <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
            Streamlining your design process today.
          </h5>
        </a>
        <p class="mb-6 text-body">
          In today’s fast-paced digital landscape, fostering seamless
          collaboration among Developers and IT Operations.
        </p>
        <a
          href="#"
          class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Read more
          <svg
            class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>

      <div class="relative bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-base shadow-xs">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="absolute top-2 end-2 text-body hover:text-heading bg-neutral-primary-soft box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none"
          type="button"
        >
          <span class="sr-only">Open dropdown</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="3"
              d="M6 12h.01m6 0h.01m5.99 0h.01"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-36 block hidden"
        >
          <ul
            class="p-2 text-sm text-body font-medium"
            aria-labelledby="dropdownButton"
          >
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded-md"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center">
          <img
            class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="https://images.pexels.com/photos/35205805/pexels-photo-35205805.jpeg"
            alt=""
            width="312"
            height="312"
          />
          <h5 class="mb-0.5 text-xl font-semibold tracking-tight text-heading">
            Bonnie Green
          </h5>
          <span class="text-sm text-body">Visual Designer</span>
          <div class="flex mt-4 md:mt-6 gap-4">
            <button
              type="button"
              class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              <svg
                class="w-4 h-4 me-1.5 -ms-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Follow me
            </button>
            <button
              type="button"
              class="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
