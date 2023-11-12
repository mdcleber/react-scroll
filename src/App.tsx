import { useCallback, useState } from "react";
import "./App.css";
import GlobalStyle, { Container } from "./App.styled";
import MainPanel from "./MainPanel";
import TopPanel from "./TopPanel";

function App() {
  const [value, setValue] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const updateThig = useCallback((value: number, text: string) => {
    setValue(value);
    setText(text);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <TopPanel value={value} text={text} />
        <MainPanel onChange={updateThig} />
      </Container>
    </>
  );
}

export default App;
