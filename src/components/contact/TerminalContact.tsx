import { motion } from "framer-motion";
import { FiCheckCircle, FiSend, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiDocumentArrowDown } from "react-icons/hi2";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

const TerminalContact = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section
      className="px-0 pt-5 pb-8 max-w-5xl mx-auto"
    >
        <div className="overflow-hidden">
          <TerminalHeader />
          <div
            ref={containerRef}
            onClick={() => {
              inputRef.current?.focus();
            }}
            className="h-auto px-6 md:px-9 pb-16 bg-zinc-800 backdrop-blur w-full overflow-y-scroll shadow-xl cursor-text font-sans-serif"
          >
            <TerminalBody inputRef={inputRef} containerRef={containerRef} />
          </div>
        </div>
    </section>
  );
};

const TerminalHeader = () => {
  return (
    <div className="w-full pt-16 pb-8 px-8 bg-zinc-800 flex items-center flex-col gap-1 sticky top-0">
      <div className="text-4xl text-center font-black mb-5 text-zinc-100">
        ¿Construimos<br />algo <i className="text-[#38FF96] mr-1.5">juntos</i>?
      </div>
      <div className="text-zinc-500 text-lg text-center mb-6 w-full max-w-md">
        <p>Estoy disponible para oportunidades full-time y proyectos freelance.</p>
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Botón 1: WhatsApp */}
        <a
          href="https://w.app/kelly-nunez"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-[42px] w-full items-center justify-between border border-black bg-[#38FF96] px-4 font-medium text-zinc-900 transition-colors hover:bg-[#38FF96]/80"
        >
          <div className="flex items-center gap-2 text-sm tracking-snug font-semibold">
            <FaWhatsapp className="text-lg" />
            <span className="border-b-0 border-b-transparent group-hover:border-b group-hover:border-b-zinc-900">WhatsApp</span>
          </div>
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </a>

        {/* Botón 2: Enviar un correo */}
        <button
          type="button"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "mailto:kellynunezhu@gmail.com";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="group flex h-[42px] w-full items-center justify-between border border-black bg-[#7C5CFF] px-4 font-medium text-zinc-900 transition-colors hover:bg-[#7C5CFF]/80"
        >
          <div className="flex items-center gap-2 text-sm tracking-snug font-semibold">
            <FiSend className="text-sm" />
            <span className="border-b-0 border-b-transparent group-hover:border-b group-hover:border-b-zinc-900">Enviar Correo</span>
          </div>
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const TerminalBody = ({ containerRef, inputRef }: TerminalBodyProps) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const [questions, setQuestions] = useState(QUESTIONS);

  const curQuestion = questions.find((q) => !q.complete);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmitLine = (value: string) => {
    if (curQuestion) {
      if (curQuestion.key.toLowerCase() === "email") {
        if (!validateEmail(value)) {
          setError("Por favor, ingresa un email válido.");
          return;
        } else {
          setError("");
        }
      }
      setQuestions((pv) =>
        pv.map((q) => {
          if (q.key === curQuestion.key) {
            return {
              ...q,
              complete: true,
              value,
            };
          }
          return q;
        })
      );
    }
  };

  return (
    <div className="px-2 md:px-0 text-slate-100 text-normal leading-[2] tracking-wide ">
      {/* VISTA MÓVIL: Todo abierto con inputs interactivos y botones */}
      <div className="block md:hidden">
        <MobileFormView questions={questions} setQuestions={setQuestions} />
      </div>

      {/* VISTA DESKTOP: El comportamiento original paso a paso */}
      <div className="hidden md:block">
        <PreviousQuestions questions={questions} />
        <CurrentQuestion curQuestion={curQuestion} />
        {error && (
          <p className="text-[#38FF96] font-medium mb-2">{error}</p>
        )}
        {curQuestion ? (
          <CurLine
            text={text}
            focused={focused}
            setText={setText}
            setFocused={setFocused}
            inputRef={inputRef}
            command={curQuestion?.key || ""}
            handleSubmitLine={handleSubmitLine}
            containerRef={containerRef}
          />
        ) : (
          <Summary questions={questions} setQuestions={setQuestions} />
        )}
      </div>
    </div>
  );
};

// Componente exclusivo para la vista Mobile con campos abiertos
const MobileFormView = ({ questions, setQuestions }: SummaryProps) => {
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (key: string, value: string) => {
    setQuestions((pv) =>
      pv.map((q) => (q.key === key ? { ...q, value } : q))
    );
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleReset = () => {
    setQuestions((pv) => pv.map((q) => ({ ...q, value: "", complete: false })));
    setComplete(false);
    setError("");
  };

  const handleSend = () => {
    const emailQ = questions.find((q) => q.key === "email");
    if (emailQ && !validateEmail(emailQ.value)) {
      setError("Por favor, ingresa un email válido.");
      return;
    }
    setError("");

    const formData = questions.reduce((acc, val) => {
      return { ...acc, [val.key]: val.value };
    }, {});
  
    const body = new URLSearchParams({
      "form-name": "contact-customer",
      ...formData,
    }).toString();
  
    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          setComplete(true);
        } else {
          console.error("Error en servidor:", res.status);
        }
      })
      .catch((err) => console.error("Error de red:", err));
  };

  return (
    <div className="space-y-4 pt-4">
      {complete ? (
        <div className="mt-2 space-y-2">
          <p>
            <FiCheckCircle className="inline-block mr-2 text-[#38FF96]" />
            <span className="text-white">¡Enviado! Gracias. 🦄</span>
          </p>
        </div>
      ) : (
        <>
          {questions.map((q, i) => (
            <div key={i} className="flex flex-col gap-1">
              <label className="text-sm text-zinc-300">
                {q.text} {q.postfix && <span className="text-white">{q.postfix}</span>}
              </label>
              <div className="flex items-center bg-zinc-900 border border-zinc-700 px-3 py-2 rounded">
                <span className="text-[#38FF96] mr-2">➜</span>
                <input
                  type="text"
                  value={q.value}
                  onChange={(e) => handleInputChange(q.key, e.target.value)}
                  placeholder={`Ingresa tu ${q.key}`}
                  className="bg-transparent w-full text-white focus:outline-none text-sm"
                />
              </div>
            </div>
          ))}

          {error && (
            <p className="text-[#38FF96] text-sm font-medium">{error}</p>
          )}

          <div className="flex w-full items-center justify-between pt-2">
            <button
              onClick={handleSend}
              className="group relative z-0 flex px-4 py-2 items-center justify-center bg-white hover:bg-zinc-100 font-semibold text-black rounded"
            >
              <FiSend className="mr-2" />
              <div className="text-sm tracking-wide">
                <span>Enviar datos</span>
              </div>
            </button>

            <button
              onClick={handleReset}
              className="flex h-[40px] w-[40px] items-center justify-center bg-transparent text-xl transition-colors hover:bg-zinc-800 rounded"
            >
              <span className="text-zinc-300 leading-none -mt-1">↺</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const PreviousQuestions = ({ questions }: PreviousQuestionProps) => {
  return (
    <>
      {questions.map((q, i) => {
        if (q.complete) {
          return (
            <Fragment key={i}>
              <p>
                {q.text || ""}
                {q.postfix && (
                  <span className="text-white">{q.postfix}</span>
                )}
              </p>
              <p>
                <FiCheckCircle className="inline-block mr-2 text-[#1E90FF]" />
                <span className="text-zinc-300">{q.value}</span>
              </p>
            </Fragment>
          );
        }
        return <Fragment key={i}></Fragment>;
      })}
    </>
  );
};

const CurrentQuestion = ({ curQuestion }: CurrentQuestionProps) => {
  if (!curQuestion) return <></>;

  return (
    <p>
      {curQuestion.text || ""}
      {curQuestion.postfix && (
        <span className="text-white">{curQuestion.postfix}</span>
      )}
    </p>
  );
};

const Summary = ({ questions, setQuestions }: SummaryProps) => {
  const [complete, setComplete] = useState(false);

  const handleReset = () => {
    setQuestions((pv) => pv.map((q) => ({ ...q, value: "", complete: false })));
  };

  const handleSend = () => {
    const formData = questions.reduce((acc, val) => {
      return { ...acc, [val.key]: val.value };
    }, {});
  
    const body = new URLSearchParams({
      "form-name": "contact-customer",
      ...formData,
    }).toString();
  
    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          setComplete(true);
        } else {
          console.error("Error en servidor:", res.status);
        }
      })
      .catch((err) => console.error("Error de red:", err));
  };

  return (
    <>
      {complete ? (
        <div className="mt-2 space-y-2">
          <p>
            <FiCheckCircle className="inline-block mr-2 text-[#38FF96]" />
            <span className="text-white">¡Enviado! Gracias. 🦄</span>
          </p>
        </div>
      ) : (
        <div className="flex w-full items-center justify-between mt-3">
          <button
            onClick={handleSend}
            className="group relative z-0 flex px-4 py-2 items-center justify-center bg-white hover:bg-zinc-100 font-semibold text-black">
              <FiSend className="mr-2" />
              <div className="text-sm md:text-md tracking-wide">
                <span className="border-b-0 border-b-transparent group-hover:border-b group-hover:border-b-zinc-900 pb-0.5">Enviar datos</span>
              </div>
          </button>

          <button
            onClick={handleReset}
            className="flex h-[40px] w-[40px] items-center justify-center bg-transparent text-xl transition-colors hover:bg-zinc-800"
          >
            <span className="text-zinc-300 leading-none -mt-1">↺</span>
          </button>
        </div>
      )}
    </>
  );
};

const CurLine = ({
  text,
  focused,
  setText,
  setFocused,
  inputRef,
  command,
  handleSubmitLine,
  containerRef,
}: CurrentLineProps) => {
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitLine(text);
    setText("");
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    scrollToBottom();
  };

  useEffect(() => {
    return () => setFocused(false);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="terminal-contact-input" className="sr-only">
          Campo de respuesta del formulario de contacto
        </label>
        <input
          id="terminal-contact-input"
          ref={inputRef}
          onChange={onChange}
          value={text}
          type="text"
          className="sr-only"
          autoComplete="off"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </form>
      <p>
        <span className="text-[#38FF96]">➜</span>{" "}
        {command && <span className="opacity-50">Ingresa tu {command}: </span>}
        {text}
        {focused && (
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
              times: [0, 0.5, 0.5, 1],
            }}
            className="inline-block w-2 h-5 bg-slate-400 translate-y-1 ml-0.5"
          />
        )}
      </p>
    </>
  );
};

export default TerminalContact;

const QUESTIONS: QuestionType[] = [
  {
    key: "email",
    text: "Déjame tus datos ",
    postfix: "y te contactaré:",
    complete: false,
    value: "",
  },
  {
    key: "nombre",
    text: "¿Cuál es tu",
    postfix: "nombre?",
    complete: false,
    value: "",
  },
  {
    key: "mensaje",
    text: "Excelente, y ",
    postfix: "¿cómo puedo ayudarte?",
    complete: false,
    value: "",
  },
];

interface CurrentLineProps {
  text: string;
  focused: boolean;
  setText: Dispatch<SetStateAction<string>>;
  setFocused: Dispatch<SetStateAction<boolean>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  command: string;
  handleSubmitLine: Function;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

type QuestionType = {
  key: string;
  text: string;
  postfix?: string;
  complete: boolean;
  value: string;
};

interface TerminalBodyProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

interface PreviousQuestionProps {
  questions: QuestionType[];
}

interface SummaryProps {
  questions: QuestionType[];
  setQuestions: Dispatch<SetStateAction<QuestionType[]>>;
}

interface CurrentQuestionProps {
  curQuestion: QuestionType | undefined;
}