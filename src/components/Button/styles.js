// styles.js
import { styled } from '@stitches/react';

export const StyledButton = styled('button', {
  padding: "10px 20px",
  backgroundColor: "#0047ab",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "5px",

  "&:hover": {
    backgroundColor: "#0056b3",
  },
}
);