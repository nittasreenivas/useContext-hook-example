import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

export default function SubChild() {
  const data = useContext(UserContext);
  console.log("data", data);
  return (
    <div>
      <h2>SubChild Component </h2>
      <div className="products">
        {data.map((info) => {
          const { id, title, image, description, price } = info;
          return (
            <div key={id} className="each-price">
              <h3> {title} </h3>
              <img alt={title} src={image} width={200} />
              <p> {description} </p>
              <button>{price} </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
