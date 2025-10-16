import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-indigo-600">HandArt Gallery</span>
        </Link>

        {/* (Optional) Add nav items later if needed */}
      </div>
    </header>
  );
}

export default Header;
