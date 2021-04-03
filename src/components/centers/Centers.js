import React, { Fragment, useContext, useEffect } from "react";
import CenterItem from "./CenterItem";
import CenterContext from "../../context/center/centerContext";

const Centers = () => {
  const centerContext = useContext(CenterContext);
  const { centers, filtered, getCenters } = centerContext;

  useEffect(() => {
    getCenters();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {filtered && filtered.length
        ? filtered.map((center) => (
            <CenterItem key={center._id} center={center} />
          ))
        : (centers || []).map((center) => (
            <CenterItem key={center._id} center={center} />
          ))}
    </Fragment>
  );
};

export default Centers;
