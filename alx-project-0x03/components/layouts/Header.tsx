import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-6 mx-auto md:px-8">
        <Link href="/" className="text-3xl font-bold tracking-tight text-gray-800 md:text-5xl">
          Splash App
        </Link>

        <div className="flex gap-4">
          <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
          <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
        </div>
      </div>
    </header>
  );
};

export default Header;