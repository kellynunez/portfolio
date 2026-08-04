import { FiBook, FiBriefcase, FiFolder, FiMail, FiUser, FiPenTool, FiSmile, FiLayout, FiHeart } from "react-icons/fi";

export const navItems = [
  { value: "projects", href: "#projects", label: "Proyectos", Icon: FiPenTool },
  { value: "experience", href: "#experience", label: "Experiencia", Icon: FiBriefcase },
  { value: "education", href: "#education", label: "Educación", Icon: FiBook},
  { value: "about", href: "#about", label: "Sobre mí", Icon: FiUser },
  { value: "contact", href: "#contact", label: "Contacto", Icon: FiMail },
] as const;
