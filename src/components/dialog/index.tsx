import { ChangeEvent, FC, useState } from "react";
import Input from "../input";
import { useSpaceContext } from "../spaceContext";

const Dialog: FC = () => {
  const { onAddNewSpace } = useSpaceContext();

  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onOpenDialog = () => {
    setOpen(true);
  };

  const onCloseDialog = () => {
    setOpen(false);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onAdd = () => {
    setLoading(true);
    setTimeout(() => {
      onAddNewSpace(name).finally(() => {
        onCloseDialog();
        setLoading(false);
        setName("");
      });
    }, 1000);
  };

  return (
    <div>
      <button
        onClick={onOpenDialog}
        className={`py-2 px-3 rounded drop-shadow-md bg-cyan-500 text-gray-50`}
      >
        add space
      </button>
      {open && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900 p-2"
                      id="modal-title"
                    >
                      Add New Space
                    </h3>
                    <div className="mt-2">
                      <Input value={name} onChange={onChangeName} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full min-w-58 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-300 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onAdd}
                  disabled={name === ""}
                >
                  {loading ? (
                    <img src="/images/Rolling.svg" alt="loading" />
                  ) : (
                    "add"
                  )}
                </button>
                <button
                  onClick={onCloseDialog}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;
