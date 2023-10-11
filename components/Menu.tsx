import Link from 'next/link';

type MenuProps = {
  items: {
    text: string;
    href: string
    }[];
};

const Menus: React.FC<MenuProps> = ({ items }) => {

  const renderMenuItems = () =>
    items.map((item) => (
      <Link key={item.text} href={item.href} passHref>
        <div className="text-brand_secondary-350 px-3 py-2 font-Work-sans font-semibold cursor-pointer">
          {item.text}
        </div>
      </Link>
    ));

  return(
    <>{renderMenuItems()}</>
  )
};

export default Menus;