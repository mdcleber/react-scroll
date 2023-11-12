import { TopPanelStyle } from "./App.styled";
interface TopPanelProps {
  value: number;
  text: string;
}

function TopPanel({ value, text }: TopPanelProps) {
  return (
    <TopPanelStyle>
      <label>{text}</label>
      <input type="text" value={value} />
    </TopPanelStyle>
  );
}

export default TopPanel;
