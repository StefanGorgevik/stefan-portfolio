import React, { useEffect, useState } from "react";
import { Fade } from "@mui/material";

export const FadeInView: React.FC<{
  checkItem: boolean;
}> = (props: any) => {
  const { checkItem } = props;
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 200);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setChecked(checkItem);
    }, 200);
  }, [checkItem]);
  return (
    <Fade in={checked}>
      <div>{props.children}</div>
    </Fade>
  );
};
