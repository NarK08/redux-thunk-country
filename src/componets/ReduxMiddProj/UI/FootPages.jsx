import styled from "styled-components";
import "../index.css";

const FooterEl = styled.footer`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrappers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

export const FootPages = () => {
  return (
    <FooterEl>
      <Wrappers>
        <div>© {new Date().getFullYear()} Copyright Text</div>
      </Wrappers>
    </FooterEl>
  );
};
