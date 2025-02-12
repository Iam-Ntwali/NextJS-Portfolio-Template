import Client_1 from "@/assets/images/memoji-avatar-1.png";
import Client_3 from "@/assets/images/memoji-avatar-3.png";

import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Smith Doe",
    position: "Company Name 1",
    text: "John Doe has been an invaluable asset to our team. His expertise in web development has helped us achieve our goals and grow our business. We look forward to working with him on future projects.",
    avatar: Client_1,
  },
  {
    name: "John Doe",
    position: "Company Name 2",
    text: "John Doe is a talented web developer. He is reliable, responsive, and delivers high-quality work. We are very happy with the website he created for us and would recommend him to anyone looking for a skilled developer.",
    avatar: Client_3,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="What They Say about Me"
          description="Don't just take my word for it. See what my clients have to stay about my work."
        />
        <div className="mt-12 lg:mt-24 backdrop: flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-stone-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm md:text-base mt-4 md:mt-6">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
