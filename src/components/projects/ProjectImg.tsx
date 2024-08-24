import { useEffect, useRef, useState } from "react";

function ProjectImg({ imageSrc, title }: { imageSrc: string; title: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`h-[200px] w-full rounded-t-md `}
      style={{
        background: `url('${imageSrc.replace(".png", "-sm.png")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={imageSrc}
        alt={`${title} Project`}
        className={`h-full w-full rounded-t-md opacity-0  duration-300 ${
          isLoaded && "opacity-100"
        } `}
        loading="lazy"
        draggable={"false"}
        ref={imgRef}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

export default ProjectImg;
