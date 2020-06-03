import React from 'react';

function Purposes(props) {
  let descriptionArray = props.purposesDescription;
  let description = descriptionArray.map((d) =>
        <div id="legal" >
        <h3 key={d.index}>{d.name}</h3>
        <p key={d.id.toString()} className="legal-text">{d.description}</p>
        </div>
  );


  return (
    <div>
    {description}
    </div>
  )
}

export default Purposes;
