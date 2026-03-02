const navlinks = [
  { name: "Hero", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo */}
          <div className="text-center">
            <div className="text-2xl font-bold dark:text-white text-gray-900 uppercase tracking-wide">
              Bek<span className="text-blue-600 dark:text-blue-400">kas</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Building web experiences with passion
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 flex-wrap justify-center">
            {navlinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Divider */}
          <hr className="w-full border-gray-300 dark:border-gray-700" />

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Bekkas. All rights reserved.
            <br />
            <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 block">
              Built with React & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
