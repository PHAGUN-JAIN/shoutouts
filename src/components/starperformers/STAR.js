import "./styles.css";
import CARD from "../cards/CARD";
import data from "../../assets/data/stars";

export default function STAR() {
  return (
    <>
      {/* HELLO THERE
      <p>test</p> */}

      <div className="content-wrap">
        {data.map((item) => {
          return (
            <CARD
              img={item.img}
              name={item.name}
              position={item.position}
              author={item.author}
            />
          );
        })}
      </div>
    </>
  );
}
