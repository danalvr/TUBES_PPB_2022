import { AiFillStar } from 'react-icons/ai';
import './index.css';

export default function index(props) {
  return (
    <div className="container-model2">
      <img src={props.img} alt="" className="poster-model2" />
      <div className="description-model2">
        <div>
          <p id="title">{props.title}</p>
          <p id="genre">{props.genre}</p>
        </div>
        {/* <div>
          <span>Rp200.000</span>
        </div> */}
      </div>
    </div>
  );
}
