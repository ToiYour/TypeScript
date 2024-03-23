const Nav = () => {
  return (
    <nav aria-label="Global" className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <a className="text-white transition hover:text-gray-500/75" href="#">
            Quản lý đơn hàng
          </a>
        </li>
        <li>
          <a className="text-white transition hover:text-gray-500/75" href="#">
            Mở bán vé trên Vexere
          </a>
        </li>
        <li>
          <a className="text-white transition hover:text-gray-500/75" href="#">
            Trở thành đối tác
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
