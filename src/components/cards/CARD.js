import "./styles.css";

export default function CARD(props) {
  return (
    <>
      <div className="wrapper">
        <img src={props.img} alt="prsn" />
        <div className="desc">
          <p>Name: {props.name}</p>
          <p>Position: {props.position}</p>
          <p>shoutout given by: {props.author}</p>
        </div>
      </div>
    </>
  );
}
