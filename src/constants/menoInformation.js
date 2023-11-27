import {
  Bag,
  Status,
  Document,
  Heart2,
  Home,
  User,
  Info,
  Message,
  Instagram,
} from "@/common/icons/Icons";
import { RiTelegramLine } from "react-icons/ri";

const menoInformation = [
  {
    id: 1,
    desktop: true,
    href: "/",
    label: "خانه",
    icone: <Home width={23} height={23} />,
    details: [],
  },
  {
    id: 2,
    desktop: true,
    href: "/market",
    label: "مارکت",
    icone: <Status width={23} height={23} />,
    details: [],
  },
  {
    id: 3,
    desktop: true,
    href: "/products",
    label: "محصولات",
    icone: <Bag width={23} height={23} />,
    details: [],
  },
  {
    id: 4,
    desktop: true,
    href: "/blogs",
    label: "پست ها",
    icone: <Document width={23} height={23} />,
    details: [],
  },
  {
    id: 5,
    desktop: true,
    href: "/admin",
    label: " پنل ادمین ",
    icone: <User width={23} height={23} />,
    details: [],
  },
  {
    id: 6,
    href: "/favorits",
    desktop: true,
    label: " علاقه مندی ها",
    icone: <Heart2 width={23} height={23} />,
    details: [],
  },
  {
    id: 7,
    desktop: true,
    label: "ارتباط با ما",
    href: "/about-me",
    icone: <Message width={23} height={23} />,
    details: [
      {
        id: 1,
        href: "/about-me",
        label: "درباره ما",
        icone: <Info width={23} height={23} />,
      },
      {
        id: 2,
        href: "https://github.com/AbolfazlKhosravi",
        label: " اینستاگرام ",
        icone: <Instagram width={23} height={23} />,
      },
      {
        id: 3,
        href: "https://www.linkedin.com/in/abolfazl-khosravi-a17097268/",
        label: "تلگرام",
        icone: <RiTelegramLine className="w-6 h-6" />,
      },
    ],
  },
];

export default menoInformation;
