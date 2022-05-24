import React, { useState } from "react";
import clsx from "clsx";
import { useCombobox } from "downshift";
import { useSearch } from "hooks/useSearch";
import { LinkItem } from "models/item";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { selectedItemAtom } from "atoms";
import { capitalizeFirstLetter } from "utils";

export function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { results, isLoading } = useSearch(query);
  const [_, setSelectedItem] = useAtom(selectedItemAtom);

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: results || [],
    onInputValueChange: ({ inputValue }) => {
      setQuery(inputValue?.toLowerCase() || "");
    },
    itemToString: (item: LinkItem | null) => {
      return item ? String(item.name) : "";
    },
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) {
        return;
      }

      setSelectedItem(selectedItem);

      if (selectedItem.is_supported) {
        router.push("/connect");
      } else {
        router.push("/backupflow");
      }
    },
  });

  return (
    <div>
      <div {...getComboboxProps()}>
        {isOpen ? (
          <label
            {...getLabelProps()}
            className="m-0 text-xs leading-none text-now-blue"
          >
            Where do you work?
          </label>
        ) : (
          <span className="block h-6"></span>
        )}
        <input
          type="text"
          placeholder="Where do you work?"
          {...getInputProps()}
          className="w-full border-0 border-b border-[#B7B9BB] p-0 text-[28px] leading-[36px] placeholder:text-black placeholder:opacity-40 focus:border-now-blue focus:ring-0"
        />
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          (!isLoading ? (
            <div
              className={clsx(
                results.length > 0 && "shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
              )}
            >
              {results.map((item: any, index: any) => (
                <li
                  className={clsx("p-2 text-xl leading-[25px]", {
                    "bg-gray-100": highlightedIndex === index,
                    "text-gray-600": item.is_input,
                  })}
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}
                >
                  {item.name}
                </li>
              ))}
            </div>
          ) : (
            <div className={"shadow-[0_4px_20px_rgba(0,0,0,0.1)]"}>
              <li className={"p-2 text-xl leading-[25px] text-gray-600"}>
                {capitalizeFirstLetter(query)}
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}
