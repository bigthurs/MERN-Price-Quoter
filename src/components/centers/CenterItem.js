import React /*, { useContext }*/ from "react";
import PropTypes from "prop-types";
// import CenterContext from "../../context/center/centerContext";
import { Link } from "react-router-dom";

const CenterItem = ({ center }) => {
  const { name, doctors } = center;

  return (
    <div className='row'>
      <div className='card'>
        <div className='card-content text-primary'>
          <div className='card-title'>{name}</div>
          <p>Doctors: {doctors.join(", ")}</p>
        </div>
        <div className='card-action text-primary'>
          <Link to={`/${center._id}`}>
            <button className='btn btn-primary btn-sm'>
              <div className='text-light'>Select Center</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CenterItem.propTypes = {
  center: PropTypes.object.isRequired,
};

export default CenterItem;
