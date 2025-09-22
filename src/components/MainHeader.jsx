import { NavLink } from "react-router";
import Checkout from "./Checkout";

export default function MainHeader({ cartCount }) {
  return (
    <nav className="navbar navbar-light bg-light px-3 mb-4">
      <h2 className="navbar-brand">The Next Up Store</h2>
      <div style={{ position: 'relative' }}>
        <span className="btn btn-outline-primary">
          🛒 Cart <span className="badge bg-danger ms-2">{cartCount}</span>
        </span>
        <NavLink to="/checkout" className="check_out">
          Check Out Now
        </NavLink>




      </div>
    </nav>
  );
}
