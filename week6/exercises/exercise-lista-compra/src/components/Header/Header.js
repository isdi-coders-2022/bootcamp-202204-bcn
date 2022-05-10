import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #5e81d1;
  height: 148px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const Header = () => {
  return (
    <StyledHeader className="row align-items-center">
      <h1 className="col-7">Grocery List</h1>
    </StyledHeader>
  );
};

export default Header;
