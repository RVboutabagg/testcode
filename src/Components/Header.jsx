

function Header({ currentPage, onNavigate }) {
    const links = ["Home", "About", "Donate", "Report", "Profile"];
  
    return (
      <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-wide">Pothole Predators</h1>
        <nav className="flex gap-2">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => onNavigate(link)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                currentPage === link
                  ? "bg-yellow-400 text-gray-900"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>
      </header>
    );
  }
  
  export default Header;