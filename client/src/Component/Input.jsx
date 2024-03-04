// import styled from "styled-components";
// export default function Input({ type, placeholder }) {
//   return <StyledInput type={type} placeholder={placeholder} />;
// }

// const StyledInput = styled.input`
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   border-radius: 2rem;
//   width: 80%;
//   height: 3rem;
//   padding: 1rem;
//   border: none;
//   outline: none;
//   color: #3c354e;
//   font-size: 1rem;
//   font-weight: bold;
//   &:focus {
//     display: inline-block;
//     box-shadow: 0 0 0 0.2rem #b9abe0;
//     backdrop-filter: blur(12rem);
//     border-radius: 2rem;
//   }
//   &::placeholder {
//     color: #b9abe099;
//     font-weight: 100;
//     font-size: 1rem;
//   }
// `;


import styled from "styled-components";

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: black; /* Change placeholder color to black */
    font-weight: 100;
    font-size: 1rem;
  }
`;


// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// export default function Input({ type, placeholder, value, onChange, showPassword }) {
//   return (
//     <StyledInputContainer>
//       <StyledInput
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//       />
//       {type === "password" && (
//         <StyledIcon onClick={() => showPassword(!showPassword)}>
//           <FontAwesomeIcon icon={showPassword ? FaEye : FaEyeSlash} />
//         </StyledIcon>
//       )}
//     </StyledInputContainer>
//   );
// }

// const StyledInputContainer = styled.div`
//   position: relative;
// `;

// const StyledInput = styled.input`
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   border-radius: 2rem;
//   width: 80%;
//   height: 3rem;
//   padding: 1rem;
//   border: none;
//   outline: none;
//   color: #3c354e;
//   font-size: 1rem;
//   font-weight: bold;
//   &:focus {
//     display: inline-block;
//     box-shadow: 0 0 0 0.2rem #b9abe0;
//     backdrop-filter: blur(12rem);
//     border-radius: 2rem;
//   }
//   &::placeholder {
//     color: #b9abe099;
//     font-weight: 100;
//     font-size: 1rem;
//   }
// `;

// const StyledIcon = styled.span`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   right: 1rem;
//   cursor: pointer;
//   color: #3c354e;
// `;
