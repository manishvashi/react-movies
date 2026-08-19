import { Logo } from './Logo';

function NavBar({ children }) {
  return (
    <nav className="flex items-center w-full px-6 py-3 bg-gray-900 text-white">
      <Logo />
      <div className="flex flex-1 items-center justify-center">{children[0]}</div>
      <div>{children[1]}</div>
    </nav>
  );
}

export { NavBar };
