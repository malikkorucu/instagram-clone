import { Icon } from "../Icons/Icon";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { clsx } from 'clsx';

const PostItemSettings = [
  {
    name: "Report",
    color: "red-500 font-bold",
  },
  {
    name: "Unfollow",
    color: "red-500 font-bold",
  },
  {
    name: "Add To Favorites",
    color: "black",
  },
  {
    name: "Add To Favorites",
    color: "black",
  },
  {
    name: "Add To Favorites",
    color: "black",
  },
  {
    name: "Add To Favorites",
    color: "black",
  },
  {
    name: "Add To Favorites",
    color: "black",
  },
  {
    name: "Add To Favorites",
    color: "black",
  },
];

export const PostItem = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="post-item border border-gray-300 rounded-lg">
        <header className="flex items-center px-4 py-2">
          <img
            src="https://ts2.mm.bing.net/th?q=Instagram%20profil%20foto%C4%9Fraf%C4%B1%20y%C3%BCkleme"
            className="w-[40px] h-[40px] rounded-full"
            alt=""
          />
          <div className="text flex flex-col flex-1 ml-3">
            <span className="title font-bold">malikkorucu07</span>
            <span className="sub-info font-thin">
              Edison Lighthouse • Love Grows (Where My Rosemary Goes)
            </span>
          </div>
          <div className="dots cursor-pointer" onClick={() => setVisible(true)}>
            <Icon name="Dots" />
          </div>
        </header>

        <main></main>
      </div>

      <Modal
        bodyClasses="w-full md:w-[500px] overflow-hidden"
        visible={visible}
        setVisible={setVisible}
      >
        {PostItemSettings.map((item: any) => (
          <div className={clsx('cursor-pointer  transition-all border-b px-6 py-5 border-gray-300 text-center text-lg' , `text-${item.color}`)}>
            Mahmut
          </div>
        ))}
      </Modal>
    </>
  );
};
