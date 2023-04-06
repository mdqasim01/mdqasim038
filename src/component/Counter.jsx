// import React from "react";
// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return(
//     <div>
//         <h1>You Clicked {count} Times</h1>
//         <button onClick={()=> setCount(count+1)}>
//             click mee
//         </button>
//     </div>
//   );
// };

// export default Counter;

import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });
  return (
    <div>
      <h1>It is my first attempt {count}</h1>
      <button onClick={() => setCount(count + 1)}>Button</button>
    </div>
  );
};

export default Counter;
