import React from "react";
import SnowfallComponent from "react-snowfall";

const SnowFall = () => {
  return (
    <SnowfallComponent // Changes the snowflake color
      // color="white"
      // Applied to the canvas element
      // style={{ background: "#fff" }}
      // Controls the number of snowflakes that are created (default 150)
      snowflakeCount={20}
    />
  );
};

export default SnowFall;
