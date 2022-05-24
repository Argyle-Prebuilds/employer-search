import type { ReactElement } from "react";
import Fullscreen from "layouts/fullscreen";

import { Heading, Subheading } from "components/typography";
import { useAtom } from "jotai";
import { selectedItemAtom } from "atoms";
import { Button } from "components/button";
import Link from "next/link";

export default function BackupFlowPage() {
  const [selectedItem] = useAtom(selectedItemAtom);

  return (
    <div className="flex h-full justify-center p-4">
      <div className="flex flex-col">
        <div className="mt-20 w-3/4">
          <Heading className="mb-2">{selectedItem?.name}</Heading>
          <Subheading className="mb-8 text-[#6A778A]">
            Upload your most recent tax return forms and paystubs to verify
            income.
          </Subheading>
          <div className="flex">
            <Link href="/" passHref>
              <Button as="a">Continue</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

BackupFlowPage.getLayout = function getLayout(page: ReactElement) {
  return <Fullscreen>{page}</Fullscreen>;
};
