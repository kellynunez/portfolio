import { FiBookOpen, FiBriefcase, FiFolder, FiMail, FiUser } from "react-icons/fi";

export const navItems = [
  { value: "about", href: "#about", label: "Sobre mí", Icon: FiUser },
  { value: "projects", href: "#projects", label: "Proyectos", Icon: FiFolder },
  { value: "experience", href: "#experience", label: "Experiencia", Icon: FiBriefcase },
  { value: "education", href: "#education", label: "Educación", Icon: FiBookOpen },
  { value: "contact", href: "#contact", label: "Contacto", Icon: FiMail },
] as const;
