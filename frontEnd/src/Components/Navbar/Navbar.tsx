import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <ul className="flex items-start justify-center mx-auto text-center text-xl navBar p-2 rounded-lg">
      <li className="list-none inline-block px-5">
        <Link to="/" className="no-underline text-white px-2">
          Home
        </Link>
      </li>
      <li className="list-none inline-block px-5">
        <Link to="/chat" className="no-underline text-white px-2">
          Chat
        </Link>
      </li>
      <li className="list-none inline-block px-5">
        <Link to="/about" className="no-underline text-white px-2">
          About
        </Link>
      </li>
      <li className="list-none inline-block px-5">
        <Link to="/contact" className="no-underline text-white px-2">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
