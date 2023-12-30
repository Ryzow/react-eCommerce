export const Navbar = () => {
  function ListComponents({ Href, Value }) {
    return (
      <li className="px-2">
        <a
          href={Href}
          className="hover:border-b-[2px] transition-all border-sky-600">
          {Value}
        </a>
      </li>
    );
  }
  return (
    <>
      <div className="flex justify-between items-center w-full h-auto border-b-[2px] border-black py-2 fixed top-0 right-0">
        <div className="px-4 text-2xl">My Portofolio</div>
        <nav className="">
          <ul className="flex items-center">
            <ListComponents Href="/" Value="Home" />
            <ListComponents Href="/" Value="About" />
            <ListComponents Href="/" Value="Contact" />
          </ul>
        </nav>
      </div>
    </>
  );
};
