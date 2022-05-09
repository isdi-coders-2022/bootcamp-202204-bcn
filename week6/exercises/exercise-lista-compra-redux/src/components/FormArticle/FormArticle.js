const FormArticle = () => {
  const createArticle = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={createArticle} noValidate autoComplete="off">
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" /> <button type="submit">Add</button>
    </form>
  );
};

export default FormArticle;
