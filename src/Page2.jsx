import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>ページ2</h1>
      <Link to="/page2/100">URL parameters</Link>
      <br />
      {/* クエリパラメータ */}
      <Link to="/page2/100?name=hoge">Query parameters</Link>
    </div>
  );
};
