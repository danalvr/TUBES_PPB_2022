import { AiFillStar } from 'react-icons/ai';
import './index.css';

export default function index(props) {
  return (
    <div className="container-model1">
      <img src={props.img} alt="" className="poster-model1" onClick={() => props.detailProducts(props.id)} />
      <div className="description-model1">
        <div>
          <p id="title">{props.title}</p>
          <p id="genre">{props.genre}</p>
        </div>
        <div>
          <span>{props.price}</span>
        </div>
      </div>
    </div>
  );
}
