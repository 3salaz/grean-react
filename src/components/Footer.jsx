import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-slate-800 w-full">
    <div className="p-2 text-center bg-slate-800">
      <span className="text-white">© 2023 Copyright:</span>
      <Link className="font-semibold pl-1.5 text-[#75B657]" to="/contact">
        Grean
      </Link>
    </div>
  </footer>
  );
}

export default Footer;
