import styled from "styled-components";

const StyledArticle = styled.li`
  a {
    text-decoration: none;
  }
  .bought {
    text-decoration: line-through;
  }
`;

const Article = () => {
  return (
    <StyledArticle>
      <a className="bought" href="toggle-article">
        Yogur
      </a>{" "}
      <a href="delete">X</a>
    </StyledArticle>
  );
};

export default Article;
