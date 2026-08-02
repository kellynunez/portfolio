import { FiBookOpen, FiBriefcase, FiFolder, FiMail, FiUser, FiPenTool, FiSmile, FiLayout, FiHeart } from "react-icons/fi";

export const navItems = [
  { value: "about", href: "#about", label: "Sobre mí", Icon: FiHeart },
  { value: "projects", href: "#projects", label: "Proyectos", Icon: FiLayout },
  { value: "experience", href: "#experience", label: "Experiencia", Icon: FiBriefcase },
  { value: "education", href: "#education", label: "Educación", Icon: FiBookOpen },
  { value: "contact", href: "#contact", label: "Contacto", Icon: FiMail },
] as const;
