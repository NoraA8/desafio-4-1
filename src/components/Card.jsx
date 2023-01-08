const Card = (props) => {
  return (
      <div className="card my-3" style={{ width: "25rem" }}>
        <img src={props.src} className="card-img-top size" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
  );
};

export default Card;
