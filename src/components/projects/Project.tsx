import { useAnimation, useInView, motion } from "framer-motion";
// import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AiOutlineExport } from "react-icons/ai";
import Reveal from "../util/Reveal";

const ProjectModal = dynamic(
  () => import("./ProjectModal").then((mod) => mod.ProjectModal),
  { ssr: false }
);

interface Props {
  galleryImages: string[];
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
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={imgSrc}
            loading="lazy"
            decoding="async"
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "92%" : "90%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded"
          />
        </div>
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
                {title}
              </h4>
              <div className="w-full h-[1px] bg-zinc-600" />
{/* 
              <Link href={code} target="_blank" rel="nofollow">
                <AiFillGithub className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" />
              </Link> */}

              {/* <Link href={projectLink} target="_blank" rel="nofollow"> */}
              {/* <Link href={projectLink} target="_blank" rel="nofollow"> */}
                <AiOutlineExport className="w-8 text-zinc-300 hover:text-green-400 transition-colors cursor-pointer" onClick={() => setIsOpen(true)} />
              {/* </Link> */}
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 text-sm text-green-400 my-2">
              {tech.join(" - ")}
            </div>
          </Reveal>
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
          galleryImages={galleryImages}
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
