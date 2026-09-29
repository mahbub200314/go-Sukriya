
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-16">

      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-10 py-12 lg:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* =========================
              Subscribe
          ========================== */}
          <section>

            <h2 className="text-xl font-bold mb-5">
              GoSukriya
            </h2>

            <h3 className="text-base font-semibold mb-3">
              Subscribe
            </h3>

            <p className="text-sm opacity-70 leading-relaxed mb-5">
              Subscribe to get special offers, new products
              and updates directly in your inbox.
            </p>

            <div className="flex w-full max-w-sm border border-background/30 rounded-lg overflow-hidden">

              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-background/50"
              />

              <button
                type="button"
                className="bg-primary px-4 text-white text-sm font-medium hover:bg-primary-hover transition"
              >
                Subscribe
              </button>

            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">

              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-background/20 hover:bg-primary hover:border-primary transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-background/20 hover:bg-primary hover:border-primary transition"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-background/20 hover:bg-primary hover:border-primary transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-background/20 hover:bg-primary hover:border-primary transition"
              >
                <FaLinkedinIn />
              </Link>

            </div>

          </section>


          {/* =========================
              Support
          ========================== */}
          <section>

            <h2 className="text-lg font-semibold mb-5">
              Support
            </h2>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Shipping & Delivery
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Return Policy
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>

            </ul>

          </section>


          {/* =========================
              Quick Links
          ========================== */}
          <section>

            <h2 className="text-lg font-semibold mb-5">
              Quick Link
            </h2>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </section>


          {/* =========================
              Account
          ========================== */}
          <section>

            <h2 className="text-lg font-semibold mb-5">
              Account
            </h2>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/login"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/signup"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  Sign Up
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  My Account
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:text-primary transition"
                >
                  My Orders
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="opacity-70 hover:text-primary transition"
                >
                  Wishlist
                </Link>
              </li>

            </ul>

          </section>


          {/* =========================
              Address / Contact
          ========================== */}
          <section>

            <h2 className="text-lg font-semibold mb-5">
              Contact
            </h2>

            <div className="space-y-5 text-sm">

              {/* Address */}
              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="text-primary text-lg mt-0.5 shrink-0" />

                <p className="opacity-70 leading-relaxed">
                  123 Main Street,
                  <br />
                  Dhaka, Bangladesh
                </p>

              </div>


              {/* Phone */}
              <div className="flex items-center gap-3">

                <FaPhoneAlt className="text-primary text-sm shrink-0" />

                <a
                  href="tel:+8801234567890"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition"
                >
                  +880 1234-567890
                </a>

              </div>


              {/* Email */}
              <div className="flex items-center gap-3">

                <FaEnvelope className="text-primary text-sm shrink-0" />

                <a
                  href="mailto:support@gоsukriya.com"
                  className="opacity-70 hover:opacity-100 hover:text-primary transition break-all"
                >
                  support@gоsukriya.com
                </a>

              </div>

            </div>

          </section>

        </div>


        {/* =========================
            Bottom
        ========================== */}

        <div className="border-t border-background/10 mt-12 pt-6 text-center">

          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} GoSukriya. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

