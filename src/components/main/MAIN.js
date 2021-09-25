import CARD from "../cards/CARD";
import data from "../../assets/data/shoutouts";

export default function MAIN() {
  return (
    <>
      {/* <CARD img={ig} name="john" position="champ" author="me" />
      <CARD name="john" position="champ" author="me" />
      <CARD name="john" position="champ" author="me" />
      <CARD name="john" position="champ" author="me" />
      <CARD name="john" position="champ" author="me" /> */}
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
    </>
  );
}
