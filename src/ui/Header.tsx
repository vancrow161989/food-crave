import Logo from "./Logo";
import ColorSwitcher from "./ColorSwitcher";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between">
          <div className="header-left">
            <Logo />
          </div>
          <div className="header-right">
            <ColorSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
