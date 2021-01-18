import Link from "next/link";

const NAV_ITEMS = [
  {
    name: "About",
    url: "/",
  },
  {
    name: "Newsletter",
    url: "https://buttondown.email/robinmetral/",
  },
];

export default function Nav() {
  return (
    <nav className="mb-10 bg-gray-800 text-xl">
      <ul className="max-w-xl m-auto flex flex-row">
        {NAV_ITEMS.map(({ name, url }) => (
          <li key={name}>
            <Link href={url}>
              <a className="block p-4 -ml-4 hover:text-yellow-400 focus:text-yellow-400">
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
