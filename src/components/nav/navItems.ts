import { FiBookOpen, FiBriefcase, FiFolder, FiMail, FiUser } from "react-icons/fi";

export const navItems = [
  { value: "projects", href: "#projects", labelKey: "projects", Icon: FiFolder },
  { value: "experience", href: "#experience", labelKey: "experience", Icon: FiBriefcase },
  { value: "education", href: "#education", labelKey: "education", Icon: FiBookOpen },
  { value: "about", href: "#about", labelKey: "about", Icon: FiUser },
  { value: "contact", href: "#contact", labelKey: "contact", Icon: FiMail },
] as const;
