import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1b0059] via-[#480a9b] to-[#782381] text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-8 lg:px-9">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                className="h-10 w-10 rounded-xl bg-white p-1.5 shadow-md"
                src={Logo}
                alt="React Jobs"
              />
              <span className="text-xl font-bold text-white">React Jobs</span>
            </Link>
            <p className="max-w-md text-sm text-white/80 leading-relaxed font-normal">
              The premium marketplace to find top React developer jobs or hire
              expert frontend talent worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="transition hover:text-white hover:underline"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/add-job"
                  className="transition hover:text-white hover:underline"
                >
                  Post a Job
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Social */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/hamzaatef722"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/hamza-gad-aba3133a5/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/70">
          © 2026 React Jobs. Crafted for React developers.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
