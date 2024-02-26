import React, { useState, useEffect} from "react";

// TODO: have a specific text display when 'props.periodName' === null (NOTE: currently nothing will display)
function PeriodName(props = null) // props.periodName
{
  const [col, setCol] = useState(1);
  const [row, setRow] = useState(1);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  useEffect(() => {
      if (!props) return;

      if (props.col) setCol(props.col + 1);
      if (props.row) setRow(props.row + 1);
      if (props.width) setWidth(props.width);
      if (props.height) setHeight(props.height);
  }, [props]);


  return (
    <div className="Widget"
        style=
        {{
            backgroundColor: props.config.backgroundColor,
            color: props.config.textColor,
            "gridColumnStart": col,
            "gridColumnEnd": col+width,
            "gridRowStart": row,
            "gridRowEnd": row+height
        }}
    >
        <p>{props.periodName}</p>
    </div>
  );
}

export default PeriodName;