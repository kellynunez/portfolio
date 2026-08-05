import { useAnimation, useInView, motion } from "framer-motion";
// import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AiOutlineExport } from "react-icons/ai";

const ProjectModal = dynamic(
  () => import("./ProjectModal").then((mod) => mod.ProjectModal),
  { ssr: false }
);

interface Props {
  galleryImages?: string[];
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
}

export const Project = ({
  galleryImages,
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
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          onContextMenu={blockImageActions}
          onDragStart={blockImageActions}
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative overflow-hidden select-none"
        >
          <Image
            src={imgSrc}
            width={1200}
            height={675}
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 520px"
            unoptimized
            alt={`An image of the ${title} project.`}
            draggable={false}
            style={{
              width: hovered ? "92%" : "90%",
              rotate: hovered ? "2deg" : "0deg",
              height: "auto",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded"
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
            <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
              {title}
            </h4>
            <div className="w-full h-[1px] bg-zinc-600" />

            <AiOutlineExport className="w-8 text-white transition-colors cursor-pointer" onClick={() => setIsOpen(true)} />
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[#7C5CFF] my-2">
            {tech.join(" - ")}
          </div>
{/*           <Reveal>
            <p className="text-zinc-300 leading-relaxed">
              {description}{" "}
              <span
                className="inline-block text-sm text-indigo-300 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal> */}
        </div>
      </motion.div>
      {isOpen && (
        <ProjectModal
          galleryImages={galleryImages ?? [imgSrc]}
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
