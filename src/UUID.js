import React, {useState} from 'react'
const uuidv4 = require('uuid/v4');

export default function UUID() {
  const [uuid, setUuid] = useState('')
  
  const onClick = () => {
    setUuid(uuidv4());
  }

  const mapUuidToHexColor = uuid => {
    const hexValue = uuid.slice(0,6);
    return `#${hexValue}`;
  }

  const mapUuidToWidth = uuid => {
    return parseInt(uuid.slice(9,11), 16)
  }
  const mapUuidToHeight = uuid => {
    return parseInt(uuid.slice(11,13), 16)
  }
  
  return (
    <div>
      <svg
          width="100%"
          height="700px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
      >
          <text x="50%" y="65"text-anchor="middle" font-size="60">{uuid}</text>
          <use x="50%" y="300" xlinkHref="#Port" />
          <defs>
              <g id="Port">
                  <circle
                    cx='0' cy='5'
                    style={{fill:`${mapUuidToHexColor(uuid)}`}} 
                    r={`${mapUuidToWidth(uuid)}`}
                  />
              </g>
          </defs>

          
      </svg>
      <button fontSize="24px" onClick={() => onClick()}>Generate new uuid</button>
    </div>
);
}
