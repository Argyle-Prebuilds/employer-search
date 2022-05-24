import type { ReactElement } from "react";
import Fullscreen from "layouts/fullscreen";
import { Search } from "views/search";

export default function Index() {
  return (
    <div className="flex h-full justify-center">
      <main className="mt-20 w-full px-4">
        <Search />
      </main>
    </div>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen>{page}</Fullscreen>;
};
