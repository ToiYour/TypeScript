const Nav = () => {
  return (
    <nav aria-label="Global" className="hidden md:block ease-in-out">
      <ul className="flex items-center gap-6 text-sm ">
        <li className="py-1 md:py-0">
          <a className="text-white transition hover:text-gray-500/75" href="#">
            Quản lý đơn hàng
          </a>
        </li>
        <li className="py-1 md:py-0">
          <a className="text-white transition hover:text-gray-500/75" href="#">
            Mở bán vé trên Vexere
          </a>
        </li>
        <li className="pb-3 md:pb-0">
          <a className="text-white transition hover:text-gray-500/75" href="#">
            Trở thành đối tác
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
