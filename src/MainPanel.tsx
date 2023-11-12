import { memo, useEffect, useRef, useState } from "react";
import { ScrollContainer } from "./App.styled";
import ListItem from "./ListItem";

interface MainPanelProps {
  onChange: (value: number, text: string) => void;
}

export function MainPanel({ onChange }: MainPanelProps) {
  const refContainer = useRef<HTMLUListElement>(null);
  const refIndex = useRef<number>(0);
  const [list, setList] = useState<JSX.Element[]>();

  useEffect(() => {
    const tempList: JSX.Element[] = [];

    for (let x = 0; x < 120; x++) {
      tempList.push(<ListItem value={x * 32.4} text={"Test: " + x} key={x} />);
    }

    setList(tempList);
  }, []);

  useEffect(() => {
    const target = refContainer.current;
    if (!target) return;

    target.addEventListener("wheel", upateDetails, {
      passive: false,
    });

    return () => {
      target.removeEventListener("wheel", upateDetails);
    };
  }, [refContainer]);

  const upateDetails = (e: any) => {
    // e.preventDefault();
    // e.stopPropagation();
    if (!refContainer.current) return;

    const listContainer = refContainer.current;
    // const listItem = listContainer.children[refIndex.current] as HTMLLIElement;
    // const position = listItem.offsetHeight;
    // listContainer.scrollTo(0, refIndex.current * position);

    // listItem.classList.add("active");
    // console.log(
    //   "🚀 ~ file: MainPanel.tsx:51 ~ upateDetails ~ listItem.classList:",
    //   listItem.classList
    // );
    // console.log(
    //   "🚀 ~ file: MainPanel.tsx:52 ~ upateDetails ~ listItem.className:",
    //   listItem.className
    // );

    // console.log("posicao atual e", refIndex.current);
    // if (e.deltaY > 0 && refIndex.current < 120) {
    //   refIndex.current++;
    //   const previousElement = listContainer.children[
    //     refIndex.current - 1
    //   ] as HTMLLIElement;
    //   previousElement.classList.remove("active");
    // } else if (refIndex.current > 0) {
    //   refIndex.current--;
    //   const nextElement = listContainer.children[
    //     refIndex.current + 1
    //   ] as HTMLLIElement;
    //   nextElement.classList.remove("active");
    // }

    // console.log(listItem);
    const delta = e.deltaY;

    const itemHeight = 50; // Adjust this based on your item height
    const currentScroll = listContainer.scrollTop;
    console.log(
      "🚀 ~ file: MainPanel.tsx:77 ~ upateDetails ~ currentScroll:",
      currentScroll
    );

    const newActiveItem = Math.round(currentScroll / itemHeight);

    if (delta > 0) {
      // Scrolling down
      listContainer.scrollTop =
        Math.ceil(currentScroll / itemHeight) * itemHeight;

      removeActiveClass(listContainer, newActiveItem - 1);
    } else {
      // Scrolling up
      listContainer.scrollTop =
        Math.floor(currentScroll / itemHeight) * itemHeight;
      removeActiveClass(listContainer, newActiveItem + 1);
    }
    const item = listContainer.children[newActiveItem] as HTMLLIElement;
    item.classList.add("active");

    const value = parseInt(item.getAttribute("data-value")!.toString());

    onChange(value, item.textContent!.toString());

    return;
  };

  const removeActiveClass = (
    listContainer: HTMLUListElement,
    index: number
  ) => {
    const item = listContainer.children[index];
    if (item) {
      item.classList.remove("active");
    }
  };

  return (
    <ScrollContainer id="scroll-container" ref={refContainer}>
      {list}
    </ScrollContainer>
  );
}

export default memo(MainPanel);
