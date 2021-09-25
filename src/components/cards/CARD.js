import "./styles.css";

export default function CARD(props) {
  return (
    <>
      <div className="wrapper">
        <div className="img-wrapper">
          <img src={props.img} alt="prsn" />
        </div>

        <div className="desc">
          <p>
            <h3>{props.name}</h3>
          </p>
          <p><h4>{props.position}</h4></p>
          <p><h6>shoutout given by: {props.author}</h6></p>
        </div>
      </div>
    </>
  );
}
