import { Icon } from "../../Icons/Icon";

export const PopupItem = () => {
  return (
    <div className="popup-item flex justify-between items-center py-2">
      <div className=" flex">
        <img
          className="rounded-full w-[60px] h-[60px]"
          src="https://ts2.mm.bing.net/th?q=Instagram%20profil%20foto%C4%9Fraf%C4%B1%20y%C3%BCkleme"
        />
        <div className="info ml-4">
          <div className="font-bold">selmankorucu</div>
          <div className="text-base">Selman Korucu</div>
        </div>
      </div>
      <Icon name="Close" stroke="#8E8E8E" width={20} height={20} />
    </div>
  );
};
