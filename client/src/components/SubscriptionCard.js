// dependencies
import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

const SubscriptionCard = ({
  subscription,
  deleteSubscription,
  editSubscription,
}) => {
  // destructure subscriptions
  const {
    _id,
    name,
    startDate,
    endDate,
    price,
    frequency,
    // icon,
  } = subscription;
  var icon;
  switch (name) {
    case "Netflix" || "netflix":
      icon =
        "https://mk0knowtechie1qof48y.kinstacdn.com/wp-content/uploads/2014/08/netflix-icon.jpg";
      break;
    case "Hulu" || "hulu":
      icon = "https://www.freeiconspng.com/uploads/hulu-icon-9.png";
      break;
    case "ESPN" || "espn" || "Espn":
      icon = "https://cdn.iconscout.com/icon/free/png-512/espn-1-461787.png";
      break;
    case "ArcGIS" || "arcgis" || "ARCGIS" || "ArcGis":
      icon =
        "https://upload.wikimedia.org/wikipedia/commons/d/df/ArcGIS_logo.png";
      break;
    case "Disney+" || "disney+":
      icon =
        "https://lh3.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=s180-rw";
      break;
    case "Amazon" || "Amazon Prime" || "amazon prime":
      icon =
        "https://img.apksum.com/81/com.amazon.avod.thirdpartyclient/3.0.276.245/icon.png";
      break;
    case "Apple" || "apple" || "APPLE":
      icon = "https://www.iconninja.com/files/4/936/948/black-apple-icon.png ";
      break;
    case "Spotify" || "spotify" || "SPOTIFY":
      icon =
        "https://www.iconfinder.com/data/icons/social-media-2091/100/social-12-512.png";
      break;
    case "Pandora" || "pandora" || "PANDORA":
      icon = "https://www.pandora.com/img/pandora_logo_1024.png";
      break;
    case "Xfinity" || "Comcast" || "xfinity" || "comcast":
      icon =
        "https://pbs.twimg.com/profile_images/1131771952828375040/wTv-dtEe.png";
      break;
    case "Dropbox" || "dropbox" || "DROPBOX":
      icon = "https://vectorified.com/images/dropbox-icon-22.png";
      break;
    default:
      icon = "/images/renoosterlogo.png";
  }

  return (
    <div className='col s12 m6 l4 xl3'>
      <div className='card'>
        <div className='card-image'>
          <img src={icon} />
        </div>
        <div className='card-content'>
          <span className='card-title'>{name}</span>
          <p className='card-text'>
            Start Date: <i>{Moment(startDate).format("MM-DD-YYYY")}</i>
          </p>
          <p className='card-text' id='expire-warning'>
            End Date: <i>{Moment(endDate).format("MM-DD-YYYY")}</i>
          </p>
          <p className='card-text'>
            Price: <i>${price.toFixed(2)}</i>
          </p>
          <p className='card-text'>
            Frequency: <i>{frequency}</i>
          </p>
        </div>
        <div className='card-action'>
          <Link className='btn' id='btn-edit' to={`edit/${_id}`}>
            Edit
          </Link>
          <button
            className='btn'
            id={_id}
            onClick={(event) => {
              console.log(event.target);
              deleteSubscription(_id);
            }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
