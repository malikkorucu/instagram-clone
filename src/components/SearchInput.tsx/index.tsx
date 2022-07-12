import { Icon } from "../Icons/Icon";
import { useEffect, useState } from "react";
import { PopupItem } from "./components/PopupItem";
import Text from "../Text";

export const SearchInput = () => {
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]) as any;

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      if (!e.target.closest(".search-input")) {
        setFocused(false);
      }
    });

    return () => document.removeEventListener("click", () => {});
  }, []);

  const typing = (e: any) => {
    setSearchQuery(e.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearchResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    }, 2000);
  };

  return (
    <div className="search-input flex bg-gray-100 w-[350px] items-center px-5 py-2 rounded-lg relative">
      {!focused && (
        <Icon name="Search" width={20} height={20} stroke="#C2C2C2" />
      )}
      <input
        onFocus={() => setFocused(true)}
        onChange={typing}
        type="text"
        value={searchQuery}
        className="outline-none bg-transparent text-xl flex-1 ml-3"
        placeholder="Search"
      />

      {loading && (
        <img src="https://i.gifer.com/ZZ5H.gif" alt="" width={23} height={23} />
      )}

      {!loading && focused && (
        <div
          onClick={() => {
            setFocused(false);
            setSearchResult([]);
            setSearchQuery("");
          }}
          className="close-circle rounded-full bg-gray-300 p-1 flex items-center justify-center"
        >
          <Icon name="Close" width={9} height={9} stroke="white" />
        </div>
      )}

      {focused && (
        <div
          onClick={() => {
            setFocused(true);
          }}
          className="mt-4 p-5 popup w-[500px] h-[400px] overflow-y-auto bg-white shadow-md rounded-md absolute bottom-0 left-1/2 -translate-x-1/2 inset-y-full"
        >
          {loading ? (
            <div className="absolute left-0 top-o w-full h-full flex justify-center items-center">
              <img
                src="https://i.gifer.com/ZZ5H.gif"
                alt=""
                width={23}
                height={23}
              />
            </div>
          ) : (
            <>
              {searchResult?.length === 0 && (
                <header className="flex justify-between pb-4">
                  <Text className="font-bold text-xl">Recent</Text>
                  <Text className="font-bold text-lg text-primary">
                    Clear All
                  </Text>
                </header>
              )}

              {[1, 2].map((item) => (
                <PopupItem />
              ))}

              {searchResult?.length > 0 &&
                searchResult.map((item: any) => <PopupItem />)}
            </>
          )}
        </div>
      )}
    </div>
  );
};
