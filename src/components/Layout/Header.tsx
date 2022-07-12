import React, { useState } from "react";
import { SearchInput } from "../SearchInput.tsx";
import { Icon } from "../Icons/Icon";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="border-b-2 border-gray-300 py-3">
      <div className="container flex justify-between items-center ">
        <img src="/instagram_logo.png" width="130" alt="" />

        <SearchInput />

        <div className="icons flex space-x-6">
          <Icon name="Home" color="black" />
          <Icon name="Location" color="white" stroke="black" />
          <span onClick={() => setVisible(true)}>
            <Icon name="ContentCreate" color="white" stroke="black" />
          </span>
          <Icon name="Discover" color="white" />
          <Icon name="Like" stroke="black" />
        </div>
      </div>

      <Modal
        title="Create New Post"
        visible={visible}
        setVisible={setVisible}
        width={700}
        bodyClasses="w-full h-full md:w-1/2 md:h-4/5"
      >
        asdfşlaskjdfasf
      </Modal>
    </header>
  );
};
