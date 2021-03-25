// import { useState, useCallback, useMemo } from "react";
// import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";
import { Inlinestyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/Styledjsx";
import "./styles.css";

export default function App() {
  // const [text, setText] = useState("");
  // const [open, setOpen] = useState(false);

  // const onClickClose = useCallback(() => {
  //   setOpen(false);
  // }, []);

  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };

  // const onClickOpen = () => {
  //   setOpen(!open);
  // };

  // const temp = useMemo(() => 1 + 3, []);
  // console.log(temp);

  return (
    <div className="App">
      <Inlinestyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      {/* <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} /> */}
    </div>
  );
}
