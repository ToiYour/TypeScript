import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav aria-label="Global" className="hidden md:block ease-in-out">
      <ul className="flex items-center gap-6 text-sm ">
        <li className="py-1 md:py-0">
          <Link
            className="text-white transition font-bold"
            to={"/order/search"}
          >
            Quản lý đơn hàng
          </Link>
        </li>
        <li className="py-1 md:py-0">
          <a className="text-white transition font-bold" href="#">
            Mở bán vé trên Vexere
          </a>
        </li>
        <li className="pb-3 md:pb-0">
          <a className="text-white transition font-bold" href="#">
            Trở thành đối tác
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
