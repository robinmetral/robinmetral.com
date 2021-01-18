import Link from "next/link";

const NAV_ITEMS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Newsletter",
    url: "https://buttondown.email/robinmetral/",
  },
];

export default function Nav() {
  return (
    <nav>
      <ul>
        {NAV_ITEMS.map(({ name, url }) => (
          <li key={name}>
            <Link href={url}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
