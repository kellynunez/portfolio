import { FiBookOpen, FiBriefcase, FiFolder, FiMail, FiUser } from "react-icons/fi";

export const navItems = [
  { value: "projects", href: "#projects", label: "Proyectos", Icon: FiFolder },
  { value: "experience", href: "#experience", label: "Experiencia", Icon: FiBriefcase },
  { value: "education", href: "#education", label: "Educación", Icon: FiBookOpen },
  { value: "about", href: "#about", label: "Sobre mí", Icon: FiUser },
  { value: "contact", href: "#contact", label: "Contacto", Icon: FiMail },
] as const;
