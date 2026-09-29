import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  const sideRoutes = ["Women's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Sports & Outdoor", "Baby's & Toys", "Beauty", "Medicine"];
  return <aside className="w-64 border-r border-muted-foreground pr-6 py-4"><ul className="flex flex-col">{sideRoutes.map(name => <li key={name} className="flex items-center justify-between"><Link href="#" className="w-full py-3 text-sm text-foreground transition-colors hover:text-primary">{name}</Link><MdKeyboardArrowRight className="shrink-0 text-xl text-muted-foreground" /></li>)}</ul></aside>;
};
export default Sidebar;
