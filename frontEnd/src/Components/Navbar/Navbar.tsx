const Navbar = () => {
  return (
    <ul className="flex items-start justify-center mx-auto text-center text-xl navBar p-2 rounded-lg">
      <li className="list-none inline-block px-5">
        <a href="#" className="no-underline text-white px-2">
          Home
        </a>
      </li>
      <li className="list-none inline-block px-5">
        <a href="#" className="no-underline text-white px-2">
          Chat
        </a>
      </li>
      <li className="list-none inline-block px-5">
        <a href="#" className="no-underline text-white px-2">
          About
        </a>
      </li>
      <li className="list-none inline-block px-5">
        <a href="#" className="no-underline text-white px-2">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
