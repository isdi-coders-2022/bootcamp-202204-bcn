import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const StyledArticles = styled.ul`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
  }
`;

const StyledArticle = styled.li`
  font-size: 20px;

  a,
  a:hover {
    color: inherit;
  }

  .icon {
    flex: 0 60px;
    font-size: 24px;
  }
`;

const StyledTotal = styled.span`
  font-size: 20px;
`;

const StyledArticleName = styled.span`
  flex: 100;
`;

const StyledCheckboxContainer = styled.div`
  flex: 0 20px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;

const StyledPrice = styled.span`
  flex: 0 105px;
`;

const List = () => {
  return (
    <>
      <StyledArticles className="list-unstyled col-12">
        <StyledArticle className="row">
          <StyledCheckboxContainer className="col">
            <input type="checkbox" />
          </StyledCheckboxContainer>
          <StyledArticleName className="px-0 col">Pan</StyledArticleName>
          <StyledPrice className="col">0.75€</StyledPrice>
          <a href="delete-article" className="col">
            <FaTimes className="icon" />
          </a>
        </StyledArticle>
      </StyledArticles>
      <StyledTotal className="col-12 text-end">1.95€</StyledTotal>
    </>
  );
};

export default List;
