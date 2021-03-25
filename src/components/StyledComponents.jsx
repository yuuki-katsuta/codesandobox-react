import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <p>StyledComponents</p>
      <button>FIGHT</button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
`;
