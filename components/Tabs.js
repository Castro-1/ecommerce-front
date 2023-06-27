import { styled } from "styled-components";

const STyledTabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const StyledTab = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  ${(props) =>
    props.active
      ? `color:black;
  border-bottom: 2px solid black;`
      : `color:#999;`}
`;
export default function Tabs({ tabs, active, onChange }) {
  return (
    <STyledTabs>
      {tabs.map((tabName) => (
        <StyledTab
          onClick={() => {
            onChange(tabName);
          }}
          active={tabName === active}
          key={tabName}
        >
          {tabName}
        </StyledTab>
      ))}
    </STyledTabs>
  );
}
