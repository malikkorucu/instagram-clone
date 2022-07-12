import { memo } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../components/Layout/Header";
import { PostItem } from "../../components/PostItem/PostItem";
import { RootState } from "../../setup/redux/RootReducer";

const Home = () => {
  const user = useSelector<RootState>(({ auth }) => auth.token) as any;

  return (
    <>
      <Header />

      <div className="container grid grid-cols-12 space-x-6 px-10 py-10">
        <main className="col-span-7 w-full">
          <PostItem />
        </main>
        <aside className="col-span-5 w-full h-[200px] bg-gray-200"></aside>
      </div>
    </>
  );
};

export default memo(Home);
