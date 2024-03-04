// import styled from "styled-components";

// export default function Button({ content }) {
//   return <StyledButton>{content}</StyledButton>;
// }

// const StyledButton = styled.button`
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   text-transform: uppercase;
//   letter-spacing: 0.2rem;
//   width: 65%;
//   height: 3rem;
//   border: none;
//   color: white;
//   border-radius: 2rem;
//   cursor: pointer;
// `;

import styled from "styled-components";

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  padding: 0 1rem; /* Added padding */
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    color: black; /* Change the text color on hover */
  }
`;
