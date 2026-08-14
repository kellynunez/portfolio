import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AiOutlineExport } from "react-icons/ai";
import { Chip } from "../util/Chip";

const ProjectModal = dynamic(
  () => import("./ProjectModal").then((mod) => mod.ProjectModal),
  { ssr: false }
);

interface Props {
  galleryImages?: string[];
  galleryMoreImages?: string[]; // <-- 1. Añadido aquí
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
}

export const Project = ({
  galleryImages,
  galleryMoreImages, // <-- 2. Destructurado aquí
  projectLink,
  // description,
  imgSrc,
  title,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const blockImageActions = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col group cursor-pointer"
      >
        <div
          onContextMenu={blockImageActions}
          onDragStart={blockImageActions}
          className="w-full aspect-video bg-zinc-800 cursor-pointer relative overflow-hidden select-none opacity-100 md:opacity-80 group-hover:opacity-100"
        >
          <Image
            src={imgSrc}
            width={1200}
            height={675}
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 520px"
            unoptimized
            alt={`An image of the ${title} project.`}
            draggable={false}
            className="transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-transparent"
            onContextMenu={blockImageActions}
            onDragStart={blockImageActions}
          />
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-2 w-full">
            <h4 className="font-bold text-zinc-100 group-hover:text-white text-lg shrink-0 max-w-[calc(100%_-_150px)]">
              {title}
            </h4>
            <div className="w-full h-[1px] bg-zinc-600" />

            <AiOutlineExport className="w-8 text-zinc-400 group-hover:text-white transition-colors cursor-pointer" />
          </div>
          <div className="flex flex-wrap font-mono gap-2 text-zinc-400 group-hover:text-zinc-200 my-2">
            {tech.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
      </motion.div>
      {isOpen && (
        <ProjectModal
          galleryImages={galleryImages ?? [imgSrc]}
          galleryMoreImages={galleryMoreImages}
          projectLink={projectLink}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          imgSrc={imgSrc}
          title={title}
          tech={tech}
        />
      )}
    </>
  );
};