import clsx from "clsx";
import { FC, useEffect, useRef } from "react";
import Text from "../Text";

export const Modal: FC<any> = ({ children, ...props }) => {
  const { visible, setVisible, bodyClasses, title } = props;

  const controlClose = (e: any) => {
    if (!e.target.closest(".modal-body")) {
      setVisible(false);
    }
  };

  return (
    <div
      onClick={controlClose}
      className={clsx(
        "modal-container flex items-center justify-center absolute left-0 top-0 w-full h-full bg-black bg-opacity-60 transition-all",
        {
          visible: visible,
          hidden: !visible,
        }
      )}
    >
      <div className={clsx(`modal-body bg-white rounded-xl`, bodyClasses)}>
        {title && (
          <header>
            <h3 className="font-bold text-lg text-center py-4 border-b border-gray-200">
              <Text>{title}</Text>
            </h3>
          </header>
        )}

        <main>{children}</main>
      </div>
    </div>
  );
};
