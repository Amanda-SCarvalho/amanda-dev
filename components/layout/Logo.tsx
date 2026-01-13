import Link from "next/link";

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`font-semibold tracking-tight transition-opacity hover:opacity-80 ${
        isLogoFooter ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
      }`}
    >
      <span className="text-foreground">Amanda</span>
      <span className="text-gray-400">.</span>
      <span className="text-violet-400">SCarvalho</span>
    </Link>
  );
};

export default Logo;
