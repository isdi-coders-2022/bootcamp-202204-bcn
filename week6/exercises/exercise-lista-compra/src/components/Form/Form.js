import styled from "styled-components";

const StyledSubmit = styled.button`
  background-color: #5e81d1;
`;

const Form = () => {
  return (
    <>
      <h2>New article</h2>
      <form noValidate autoComplete="off">
        <div className="form-group row mb-3">
          <div className="col-6">
            <label htmlFor="name" className="form-label">
              Name:{" "}
            </label>
            <input type="text" id="name" className="form-control" />
          </div>
        </div>
        <div className="form-group row mb-3">
          <div className="col-6">
            <label htmlFor="price" className="form-label">
              Price (€):{" "}
            </label>
            <input type="number" id="price" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col">
            <StyledSubmit type="submit" className="btn text-white">
              Create
            </StyledSubmit>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
