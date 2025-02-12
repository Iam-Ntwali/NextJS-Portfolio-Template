import UpRightArrow from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [{ href: "https://github.com/Iam-Ntwali", label: "GitHub" }];
  return (
    <footer className="pt-16 lg:pt-24 relative z-0 overflow-x-clip">
      <div className="absolute h-[300px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-emerald-300/30 to-sky-400/40 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-50"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col-reverse md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/50 text-center md:text-left">
            Built with ❤️ by{" "}
            <a href="https://www.iamntwali.me">Ntwali Pacifique.</a>.
            <br /> &copy; {currentYear}. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 cursor-pointer !z-20">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:text-transparent hover:bg-clip-text"
              >
                <span className="font-semibold">{link.label}</span>
                <UpRightArrow className="size-4 text-emerald-300" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
