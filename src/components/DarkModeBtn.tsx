import styled from "styled-components";

interface DarkModeBtnProps {
  onClick: () => void;
  isDark: boolean;
}
const Button = styled.button`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  position: fixed;
  top: 30px;
  right: 30px;
  padding: 5px 10px;
  border-radius: 7px;
`;

function DarkModeBtn({ onClick, isDark }: DarkModeBtnProps) {
  return (
    <Button onClick={onClick}>
      {isDark ? "Toggle Dark Mode" : "Toggle Light Mode"}
    </Button>
  );
}
export default DarkModeBtn;
