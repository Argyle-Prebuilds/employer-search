import fallbackItems from "./fallback.json";

export function isStandaloneMode() {
  if (typeof window !== "undefined") {
    if (
      // @ts-ignore
      window.navigator.standalone ||
      window.matchMedia("(display-mode: standalone)").matches
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function capitalizeFirstLetter(word: string) {
  if (!word || !word.length) {
    return null;
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getFallbackItems() {
  return fallbackItems.map((item) => ({
    id: item.toLowerCase().split(" ").join("-"),
    name: item,
  }));
}

type AuthOpts = {
  headers?: { [id: string]: string };
};

export const getAuthOpts = (params?: AuthOpts) => {
  const authString =
    process.env.ARGYLE_API_KEY + ":" + process.env.ARGYLE_API_SECRET;

  const authToken = Buffer.from(authString).toString("base64");

  const options = {
    headers: {
      Authorization: "Basic " + authToken,
      "Content-Type": "application/json",
      ...params?.headers,
    },
  };
  return options;
};
