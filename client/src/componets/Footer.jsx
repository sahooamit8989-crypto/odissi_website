import { Instagram, Youtube, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F8F5F0] border-t border-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* BRAND */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold tracking-wide text-[#7A1F2B]">
            MANTRAH
          </h2>
          <p className="text-xs text-[#C89B3C] tracking-widest mt-0.5">
            PERFORMING ARTS
          </p>
          <p className="mt-2 text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
            Preserving and promoting the sacred tradition of Odissi.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left text-sm">

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1 text-gray-600">
              <li className="hover:text-[#7A1F2B] cursor-pointer">Home</li>
              <li className="hover:text-[#7A1F2B] cursor-pointer">About</li>
              <li className="hover:text-[#7A1F2B] cursor-pointer">Courses</li>
              <li className="hover:text-[#7A1F2B] cursor-pointer">Gallery</li>
              <li className="hover:text-[#7A1F2B] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Contact
            </h3>
            <div className="space-y-1 text-gray-600">
              <p className="flex items-center justify-center sm:justify-start gap-2">
                <Phone size={14} /> +91 8270192080
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2">
                <Mail size={14} /> mantrah.jajpur@gmail.com
              </p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Follow Us
            </h3>
            <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="https://www.instagram.com/mantrah_jajpur?fbclid=IwY2xjawPqPJFleHRuA2FlbQIxMQBicmlkETBGYjFrRG1kc0M4WnVWd2dNc3J0YwZhcHBfaWQBMAABHkkeUcp9yqC9qixm_v6DaWOYK90vW4F4y9fzVlTp3u1zaIWgZo9okckcgZ7F_aem_m42aMac95pKeHpBYnnB9zw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-[#7A1F2B] cursor-pointer transition" />
            </a>

            <a
              href="https://m.youtube.com/@S%C3%A1ty%C3%A1%20Pr%C3%A1k%C3%A1%C3%9Fh%20S%C3%A1h%C3%B3%C3%B3?fbclid=IwY2xjawPqOANleHRuA2FlbQIxMQBicmlkETBGYjFrRG1kc0M4WnVWd2dNc3J0YwZhcHBfaWQBMAABHlGhSfilUgCcsNOjYqAIh8ReZ6UtUiPNvxgFw82I-p3dgj1za71dm84IMY33_aem_uB-3pjiViNd9_2WozQBwJQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-5 h-5 hover:text-[#7A1F2B] cursor-pointer transition" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61585950132844"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 hover:text-[#7A1F2B] cursor-pointer transition" />
            </a>
          </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-200 mt-6 pt-3 text-center text-[11px] text-gray-500">
          © {new Date().getFullYear()} MANTRAH Performing Arts. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
