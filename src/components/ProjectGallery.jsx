import IconChevronBack from "./icons/IconChevronBack";
import IconChevronForward from "./icons/IconChevronForward";
import IconClose from "./icons/IconClose";
import IconMobile from "./icons/IconMobile";
import IconDesktop from "./icons/IconDesktop";

import { useState, useEffect } from "react";

const ProjectGallery = (props) => {
  const { desktopPaths, mobilePaths, closeModal } = props;

  const [viewport, setViewport] = useState("mobile");

  const imagePaths = viewport === "mobile" ? mobilePaths : desktopPaths;
  const [selectedImg, setSelectedImg] = useState(mobilePaths[0]);
  const [imgIndex, setImgIndex] = useState(0);
  const lastIndex = imagePaths.length - 1;

  const nextImg = () => {
    imgIndex === lastIndex ? setImgIndex(0) : setImgIndex(imgIndex + 1);
  };

  const prevImg = () => {
    imgIndex === 0 ? setImgIndex(lastIndex) : setImgIndex(imgIndex - 1);
  };

  useEffect(() => {
    setSelectedImg(imagePaths[imgIndex]);
  }, [imgIndex, viewport]);

  return (
    <div
      className="relative z-10"
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-grayscale-900/75 transition-opacity flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center bg-grayscale-900/50 size-11/12 mx-auto rounded-xl">
          <div className="w-full pt-2 pr-2 flex justify-end">
            <button
              onClick={closeModal}
              className="hover:bg-grayscale-900/50 p-1 rounded-md"
            >
              <IconClose />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="flex justify-center gap-10 mb-2">
            {mobilePaths.length > 0 ? (
              <button
                onClick={() => setViewport("mobile")}
                className={`flex gap-1 items-center rounded-md px-2 py-1 ${viewport === "mobile" ? "bg-primary-500/20 border-2 border-primary-500 text-grayscale-100" : "hover:bg-grayscale-900/50 text-grayscale-400"}`}
              >
                <IconMobile selected={viewport} />
                <span className="text-body">Mobile</span>
              </button>
            ) : (
              <></>
            )}
            {desktopPaths.length > 0 ? (
              <button
                onClick={() => setViewport("desktop")}
                className={`flex gap-2 items-center rounded-md px-2 py-1 ${viewport === "desktop" ? "bg-primary-500/20 border-2 border-primary-500 text-grayscale-100" : "hover:bg-grayscale-900/50 text-grayscale-400"}`}
              >
                <IconDesktop selected={viewport} />
                <span className="text-body">Desktop</span>
              </button>
            ) : (
              <></>
            )}
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-row items-center justify-around w-full">
              <div
                className="rounded-md hover:bg-grayscale-900/50 hover:cursor-pointer active:bg-grayscale-900/70"
                onClick={prevImg}
              >
                <IconChevronBack />
              </div>
              <div
                className={`relative overflow-y-auto overflow-x-hidden rounded-xl drop-shadow-md ${viewport === "mobile" ? "w-auto h-[75vh] aspect-[393/852]" : "w-[75vw] max-h-[75vh] aspect-[16/9]"}`}
              >
                <img
                  src={selectedImg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-auto object-top rounded-xl"
                />
              </div>
              <div
                className="rounded-md hover:bg-grayscale-900/50 hover:cursor-pointer active:bg-grayscale-900/70"
                onClick={nextImg}
              >
                <IconChevronForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
