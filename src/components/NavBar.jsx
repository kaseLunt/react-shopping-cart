import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        {/* Placeholder for cart, will be updated later */}
        <li><p>cart (0)</p></li>
      </ul>
    </nav>
  );
}

export default NavBar;
