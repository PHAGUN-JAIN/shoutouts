import "../../assets/styles.css";
import CARD from "../cards/CARD";
import data from "../../assets/data/rickroll";

export default function RICKROLL() {
  return (
    <>
      {/* <CARD img={ig} name="john" position="champ" author="me" />
      <CARD name="john" position="champ" author="me" />
      <CARD name="john" position="champ" author="me" />
      <CARD name="john" position="champ" author="me" />
      <CARD name="john" position="champ" author="me" /> */}
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
