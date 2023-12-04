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
  Video,
} from "@/common/icons/Icons";
import { TbUserStar } from "react-icons/tb";

const ListDescriptions = [
  {
    id: 1,
    href: "/store",
    label: "فروشگاه",
    icone: <Bag width={30} height={30} />,
    content: "تمام چیزی که در این مسیر نیاز دارین ",
  },
  {
    id: 2,
    href: "/market",
    label: "مارکت",
    icone: <Status width={30} height={30} />,
    content: "بازار رو لحظه ای زیر نظر داشته باش",
  },
  {
    id: 3,
    href: "/courses",
    label: "دوره اموزشی",
    icone: <Video width={30} height={30} />,
    content: "دانش خود را با دیدن اموزش بالا تر ببرین",
  },
  {
    id: 4,
    href: "/blogs",
    label: "پست ها",
    icone: <Document width={30} height={30} />,
    content: "تحلیل ها و نظرات دیگران رو ببینید",
  },
  ,
  {
    id: 5,
    href: "/user",
    label: "ادمین",
    icone: <TbUserStar className="w-7 h-7" />,
    content: "تحلیل ها و نظرات دیگران رو ببینید",
  },
  {
    id: 6,
    label: "ارتباط با ما",
    href: "/about-me",
    icone: <Message width={30} height={30} />,
    content: "در باره ما بیشتر بدونید",
  },
];

export default ListDescriptions;
