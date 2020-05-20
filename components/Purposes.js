import React from 'react';

function Purposes(props) {
  let descriptionArray = props.purposesDescription;
  let description = descriptionArray.map((d) =>
        <div id="legal">
        <h3>{d.name}</h3>
        <p className="legal-text">{d.description}</p>
        </div>
  );


  return (
    <div>
    {description}
    </div>
  )
}

export default Purposes;
