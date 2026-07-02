import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  imgSrc: string;
  projectLink: string;
  tech: string[];
  galleryImages: string[];
}

export const ProjectModal = ({
  galleryImages,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  tech,
}: Props) => {
  const blockImageActions = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const body = document.body;
    const previousOverflowY = body.style.overflowY;

    body.style.overflowY = "hidden";

    return () => {
      body.style.overflowY = previousOverflowY || "scroll";
    };
  }, [isOpen]);

  const content = (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <button className="absolute top-4 md:top-6 text-xl right-4">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        onContextMenu={blockImageActions}
        className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-slate-100 shadow-lg cursor-auto"
      >
        <div
          className="relative"
          onContextMenu={blockImageActions}
          onDragStart={blockImageActions}
        >
          <Image
            className="w-full h-auto select-none"
            src={imgSrc}
            width={1200}
            height={675}
            sizes="(max-width: 768px) 95vw, 900px"
            unoptimized
            alt={`An image of the ${title} project.`}
            draggable={false}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-transparent"
            onContextMenu={blockImageActions}
            onDragStart={blockImageActions}
          />
        </div>
        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2 text-gray-800">{title}</h4>
          <div className="flex flex-wrap gap-2 text-sm text-slate-400">
            {tech.join(" - ")}
          </div>

          <div className="space-y-4 my-6 leading-relaxed text-sm text-gray-800">
            {galleryImages.map((imageSrc) => (
              <div
                key={imageSrc}
                className="relative"
                onContextMenu={blockImageActions}
                onDragStart={blockImageActions}
              >
                <Image
                  src={imageSrc}
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 95vw, 900px"
                  unoptimized
                  className="w-full h-auto select-none"
                  alt={`${title} showcase`}
                  draggable={false}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-10 bg-transparent"
                  onContextMenu={blockImageActions}
                  onDragStart={blockImageActions}
                />
              </div>
            ))}
          </div>

          {projectLink.trim() && (
            <div>
              <p className="font-bold mb-2 text-xl text-gray-800">
                Project Link<span className="text-indigo-500">.</span>
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Link
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1"
                  href={projectLink}
                >
                  <AiOutlineExport /> Live Project
                </Link>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
