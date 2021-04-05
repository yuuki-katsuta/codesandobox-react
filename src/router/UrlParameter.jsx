import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  //?以降の値を取得
  const { search } = useLocation();
  //URLSearchParamsでクエリを扱いやすく
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameter</h1>
      <p>パラメータは {id}</p>
      <p>クエリパラメータは{query.get("name")}</p>
    </div>
  );
};
