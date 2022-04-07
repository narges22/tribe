import { FC } from "react";
import Dialog from "../../components/dialog";
import Spaces from "../../components/Spaces";

const Home: FC = () => {
  return (
    <>
      <main>
        <div className="lg:w-3/4 m-auto flex justify-between p-3">
          <div className="flex-1 text-cyan-900 flex justify-start font-bold text-xl">
            Spaces
          </div>
          <div className="flex-1 flex justify-end">
            <Dialog />
          </div>
        </div>
        <Spaces />
      </main>
    </>
  );
};

export default Home;
