declare global {
  interface Window {
    Argyle: any;
  }
}

import { useEffect } from "react";
import Script from "next/script";
import { useAtom } from "jotai";
import { isLinkLoadedAtom } from "atoms";

type ArgyleLinkProps = {
  selectedItem: string;
  onClose: () => void;
  onLinkInit: (link: any) => void;
};

export function ArgyleLink({
  selectedItem,
  onClose,
  onLinkInit,
}: ArgyleLinkProps) {
  const [isLinkLoaded, setIsLinkLoaded] = useAtom(isLinkLoadedAtom);

  useEffect(() => {
    if (isLinkLoaded) {
      const link = window.Argyle.create({
        pluginKey: process.env.NEXT_PUBLIC_ARGYLE_LINK_KEY,
        apiHost: process.env.NEXT_PUBLIC_ARGYLE_BASE_URL,
        linkItems: [selectedItem],
        onClose,
      });

      onLinkInit(link);
    }
  }, [isLinkLoaded, selectedItem]);

  return (
    <Script
      src="https://plugin.argyle.io/argyle.web.v3.js"
      onLoad={() => setIsLinkLoaded(true)}
      strategy="beforeInteractive"
    />
  );
}
