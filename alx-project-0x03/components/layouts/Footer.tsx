import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 text-white bg-gray-900">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-bold">Splash App</h3>
          <p className="mb-4 text-gray-400">
            Your one-stop platform for all your needs. Connecting people, creating opportunities.
          </p>
          <p className="text-gray-400">© 2024 Splash App. All rights reserved.</p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Useful Links</h4>
          <ul>
            <li className="mb-2">
              <a href="/about" className="text-gray-400 transition duration-300 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="text-gray-400 transition duration-300 hover:text-white">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-400 transition duration-300 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;