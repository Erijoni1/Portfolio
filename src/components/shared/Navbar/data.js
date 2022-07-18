import { FormattedMessage } from "react-intl";
import { AiOutlineSearch } from "react-icons/ai";
import Features from "./Megamenus/Features";

export const NavData = [
  {
    title: <FormattedMessage id="shop" defaultMessage="Shop" />,
  },
  {
    title: <FormattedMessage id="press" defaultMessage="Press Room" />,
  },
  {
    title: <FormattedMessage id="events" defaultMessage="Events" />,
  },
  {
    title: (
      <FormattedMessage id="join_movement" defaultMessage="Join the movement" />
    ),
  },
  {
    title: <FormattedMessage id="contacts" defaultMessage="Contacts" />,
  },
  {
    title1: <FormattedMessage id="contacts" defaultMessage="Search" />,
    icon: <AiOutlineSearch />,
  },
];

export const MainData = [
  {
    link: <FormattedMessage id="about" defaultMessage="About us" />,
    cls: "about__us",
    to: "/",
    megamenu: <Features />,
  },
  {
    link: <FormattedMessage id="what" defaultMessage="What we do" />,
    cls: "what",
    to: "/",
    megamenu: <Features />,
  },
  {
    link: <FormattedMessage id="education" defaultMessage="Education" />,
    cls: "education",
    to: "/",
    megamenu: <Features />,
  },
  {
    link: <FormattedMessage id="resources" defaultMessage="Resources" />,
    cls: "resources",
    to: "/",
    megamenu: <Features />,
  },
  {
    link: <FormattedMessage id="Blog" defaultMessage="Blog" />,
    cls: "blog",
    to: "/",
    megamenu: <Features />,
  },
  {
    link: <FormattedMessage id="take__action" defaultMessage="Take action" />,
    cls: "take",
    to: "/",
    megamenu: <Features />,
  },
  {
    link: <FormattedMessage id="donate" defaultMessage="Donate" />,
    cls: "cls1",
    to: "/",
  },
];
