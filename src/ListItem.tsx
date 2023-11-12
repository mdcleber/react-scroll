interface ListItemProps {
  text: string;
  value: number;
  isActive?: boolean;
}

export default function ListItem({
  text,
  value,
  isActive = false,
}: ListItemProps) {
  const className = isActive ? "active" : "";
  return (
    <li data-value={value} className={className}>
      {text}
    </li>
  );
}
