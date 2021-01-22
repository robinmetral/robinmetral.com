import Link from "next/link";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  {
    name: "About",
    url: "/",
  },
  {
    name: "Newsletter",
    url: "/newsletter",
  },
  {
    name: "Books",
    url: "/books",
  },
];

export default function Nav() {
  const { asPath } = useRouter();

  return (
    <nav className="bg-gray-800">
      <ul className="max-w-3xl m-auto px-2 h-12 flex flex-row items-center">
        {NAV_ITEMS.map(({ name, url }) => {
          const isActive = asPath === url;
          return (
            <li key={name}>
              <Link href={url}>
                <a
                  className={`block px-2 py-1 rounded-sm mr-2 hover:bg-gray-600 focus:bg-gray-600 ${
                    isActive ? "bg-gray-700" : ""
                  }`}
                >
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
