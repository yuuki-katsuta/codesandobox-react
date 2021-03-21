import { memo } from "react";
//memo 親のコンポーネントが更新されても、受け取っているpropsに変更がない場合再レンダリングしない

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  const data = [...Array(2000).keys()];
  console.log("レンダリングがされた");
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
