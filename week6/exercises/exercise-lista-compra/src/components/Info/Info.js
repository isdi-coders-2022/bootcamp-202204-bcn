import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";

const StyledInfo = styled.section`
  background-color: #f87500;
  height: 104px;
  box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.15);
  .icon {
    font-size: 38px;
  }
  .n-articles {
    font-size: 24px;
  }
  a,
  a:hover {
    color: inherit;
  }
`;

const Info = () => {
  return (
    <StyledInfo className="row align-items-center">
      <a href="new-article" className="col">
        <FaPlusCircle className="icon text-start" />
      </a>
      <p className="n-articles col text-end m-0">2/3 bought</p>
    </StyledInfo>
  );
};

export default Info;
