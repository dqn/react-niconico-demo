import * as React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNiconico } from "react-niconico";

const sampleVideoUrl =
  "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";

const Home: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [videoRef, emitText] = useNiconico<HTMLVideoElement>();

  const handleSubmitText = useCallback(
    handleSubmit<{ text: string }>(({ text }) => {
      emitText(text);
      reset();
    }),
    [emitText, reset],
  );

  return (
    <main className="max-w-2xl mx-auto px-2 py-5">
      <h1 className="text-2xl font-bold">react-niconico demo</h1>
      <div>
        <video
          ref={videoRef}
          src={sampleVideoUrl}
          className="w-full"
          autoPlay
          muted
          controls
          loop
        />
        <form onSubmit={handleSubmitText}>
          <div className="flex">
            <input
              ref={register({ required: true })}
              name="text"
              type="text"
              className="flex-1 border border-gray-400 px-2"
              placeholder="enter text..."
            />
            <button
              type="submit"
              className="flex-shrink-0 text-white bg-blue-500 p-1"
            >
              POST
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <a
          href="https://github.com/dqn/react-niconico"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-bold hover:underline"
        >
          react-niconico
        </a>
      </div>
    </main>
  );
};

export default Home;
