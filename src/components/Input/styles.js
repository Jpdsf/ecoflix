import { styled } from '@stitches/react';

export const StyledInput = styled('input', {
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",

      "&:focus": {
        outline: "none",
        borderColor: "#007bff",
        boxShadow: "0px 0px 5px rgba(0, 123, 255, 0.3)",
      }
});
