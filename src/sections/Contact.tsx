import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 pt-12 lg:pt-20 z-50" id="Contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
          <div
            className="absolute inset-0 opacity-5 -z-20"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="z-10">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2 max-w-prose">
                Ready to bring your next project to life, Have some suggestion
                or Questions ? Let&apos;s connect and discuss.
              </p>
            </div>

            <div className="z-10">
              <Link
                href="#"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 cursor-pointer"
                target="_blank"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
