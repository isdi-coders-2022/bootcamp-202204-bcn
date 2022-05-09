import styled from "styled-components";
import Article from "./components/Article/Article";
import FormArticle from "./components/FormArticle/FormArticle";
import Stats from "./components/Stats/Stats";
import articlesAPI from "./data/articlesAPI";

const Container = styled.div`
  margin: 0 auto;
  width: 600px;
`;

function App() {
  return (
    <Container>
      <h1>Lista de la compra</h1>
      <h2>Artículos:</h2>
      <FormArticle />
      <ul>
        {articlesAPI.map((articleAPI) => (
          <Article key={articleAPI.id} />
        ))}
      </ul>
      <Stats />
    </Container>
  );
}

export default App;
