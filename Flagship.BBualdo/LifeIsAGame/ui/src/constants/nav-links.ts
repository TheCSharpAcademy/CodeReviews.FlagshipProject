type Links = {
  key: string;
  href: string;
  title: string;
  disabled: boolean;
};

const links: Links[] = [
  { key: "1", href: "/missions", title: "Missions", disabled: false },
  { key: "2", href: "/achievements", title: "Achievements", disabled: false },
  { key: "3", href: "/profile", title: "Profile", disabled: false },
];

export default links;
