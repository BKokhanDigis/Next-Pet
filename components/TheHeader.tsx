import Link from "next/link";
import Nav from "./Nav";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader = () => {
  return (
    <header>
      <Nav navLinks={navItems}/>
    </header>
  );
};

export { TheHeader };
