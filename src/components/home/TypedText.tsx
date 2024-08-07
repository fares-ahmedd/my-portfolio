import { useCallback, useEffect, useState } from "react";
const workingWithArr = ["React Js", "Next Js"];

function TypedText() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(500);

  const handleType = useCallback(() => {
    const currentText = workingWithArr[textIndex];

    setTypedText((prevText) =>
      isDeleting
        ? currentText.substring(0, prevText.length - 1)
        : currentText.substring(0, prevText.length + 1)
    );
    setTypingSpeed(isDeleting ? 30 : 150);
    if (!isDeleting && typedText === currentText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % workingWithArr.length);
    }
  }, [isDeleting, textIndex, typedText]);

  useEffect(() => {
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex, typingSpeed, handleType]);

  return (
    <span className="text-xl font-bold text-primary-text ">
      ( <span> {typedText}</span>
      <span
        className={`inline-block w-[3px] ml-1 ${!isDeleting ? "blink" : ""}`}
      >
        &nbsp;
      </span>
      )
    </span>
  );
}

export default TypedText;
