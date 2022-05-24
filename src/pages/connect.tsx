import type { ReactElement } from "react";
import { useRouter } from "next/router";
import WithBackButton from "layouts/with-back-button";
import { Button } from "components/button";
import { Footnote, Subheading, Paragraph } from "components/typography";
import { ArgyleLink } from "components/argyle-link";
import { useAtom } from "jotai";
import { selectedItemAtom, linkInstanceAtom } from "atoms";

export default function ConnectPage() {
  const router = useRouter();

  const [linkInstance, setLinkInstance] = useAtom(linkInstanceAtom);
  const [selectedItem] = useAtom(selectedItemAtom);

  const handleLinkOpen = () => {
    if (linkInstance) {
      linkInstance.open();
    }
  };

  const handleLinkClose = () => {
    router.push("/");
  };

  return (
    <>
      <ArgyleLink
        selectedItem={selectedItem?.id || ""}
        onClose={() => handleLinkClose()}
        onLinkInit={(link) => {
          setLinkInstance(link);
        }}
      />
      <div className="px-4">
        <Subheading className="mb-3">
          Share your employment and income records to qualify for Quick Approval
        </Subheading>
        <Paragraph className="mb-6">
          Connect your employment and payroll account to get the best rate.
        </Paragraph>
        <div className="mb-4 flex">
          <Button onClick={handleLinkOpen} disabled={!linkInstance}>
            Connect work account
          </Button>
        </div>
        <Footnote>
          We use high levels of security & encryption standards to keep your
          information safe.
        </Footnote>
      </div>
    </>
  );
}

ConnectPage.getLayout = function getLayout(page: ReactElement) {
  return <WithBackButton>{page}</WithBackButton>;
};
