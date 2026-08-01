import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
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
            className="h-auto px-6 md:px-10 pb-16 bg-zinc-800 backdrop-blur w-full overflow-y-scroll shadow-xl cursor-text font-mono"
          >
            <TerminalBody inputRef={inputRef} containerRef={containerRef} />
          </div>
        </div>
    </section>
  );
};

const TerminalHeader = () => {
  return (
    <div className="w-full pt-14 pb-10 bg-zinc-800 flex items-center flex-col gap-1 sticky top-0">
      <span className="text-4xl md:text-5xl text-center font-black">
        Contact<span className="text-[#ff0099]">.</span>
      </span>
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
    // Expresión regular simple para validar email
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
    <div className="px-2 md:px-1 text-slate-100 text-sm leading-[2]">
      <PreviousQuestions questions={questions} />
      <CurrentQuestion curQuestion={curQuestion} />
      {error && (
        <p className="text-red-400 font-semibold mb-2">{error}</p>
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
              <p className="text-[#ff0099]">
                <FiCheckCircle className="inline-block mr-2" />
                <span>{q.value}</span>
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
      "form-name": "contact-customer", // ESTRICTO: debe ser igual al name del form
      ...formData,
    }).toString();
  
    fetch("/__forms.html", { // Prueba apuntando directamente al archivo estático
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
        <p className="text-white mt-2">
          <FiCheckCircle className="inline-block mr-2" />
          <span>¡Enviado! Te responderé lo antes posible 😎</span>
        </p>
      ) : (
        <div className="flex gap-2 mt-6">
          <button
            onClick={handleSend}
            className="px-3 py-1.5 text-base font-medium transition-opacity bg-zinc-100 hover:bg-zinc-300 text-zinc-900"
          >
            Enviar
          </button>
          <button
            onClick={handleReset}
            className="px-3.5 pt-[3.5px] pb-1.5 text-xl transition-opacity bg-[#4B6E8E] border border-[#4B6E8E] hover:bg-[#4B6E8E] hover:opacity-80"
          >
            <span className="text-zinc-900">↺</span>
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
        <span className="text-[#ff0099]">➜</span>{" "}
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
    postfix: "y te responderé pronto.",
    complete: false,
    value: "",
  },
  {
    key: "nombre",
    text: "Perfecto, y ¿cuál es ",
    postfix: "tu nombre?",
    complete: false,
    value: "",
  },
  {
    key: "comentario",
    text: "Excelente!, y ",
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