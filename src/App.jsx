// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   function MyButton(){
//     const[count,setCount]=useState(0);
//   }
//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>


//     <div>

//       <h1>numbar</h1>

//     </div>
//   )
// }

// export default App

// import { useState } from 'react';

// export default function MyApp() {
//   function MyButton() {
//     const [count, setCount] = useState(0);
  
//     function handleClick() {
//       setCount(count + 1);
//     }
  
//     return (
//       <button onClick={handleClick}>
//         Clicked {count} times
//       </button>
//     );
//   }
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   function MyyButton(){
//     const [count, setCount]= useState(0);

//     function handleClick(){
//       setCount(count + 1);
//     }
//     return(
//       <div>
//         <button onClick={handleClick}>Clicked{count} times</button>
//       </div>
//     )

//   }
//   return (
//     <div>
//         <h1>number</h1>
//         <MyyButton/>
//      <MyyButton/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const[count,setCount]=useState(0);
//   function handle(){
    
//     setCount(count+1);  
//   }
//   return (
//     <div>
//       <h1>Clicked Button</h1>
//       <button onClick={handle}>clicked {count} times</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const[adde,setAdde]=useState(0);
//   function add(){
//     setAdde(adde+2);
//   }

//   return (
//     <div>
//       <h1>number add</h1>
//       <button onClick={add}>Clicked {adde} times </button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   function MyButton(){
//     const[count,setCount]=useState(0);

//     return(
//       <div><button onClick={handle}>
//         clicked {count} times
//       </button></div>
//     )

//     function handle(){
//       setCount(count+10)
//     }

    
//   } 
//   return (
//     <div>
//       <h1>when we will clicked count also there</h1>
//       <MyButton/>
//       <MyButton/>



//     </div>
//   )

// }

// export default App






// import { useState } from 'react';

// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <div><button onClick={onClick}>
//       Clicked {count} times
//     </button>
//     </div>
//   );
// }


//tic tac toe


// export default function Square() {
//   return <button className="square">X</button>;
// }



// import React from 'react'
// import { useState } from 'react'


// const App = () => {
//   function Square() {
//     const [value, setValue] = useState(null);
  
//     function handleClick() {
//       setValue('X');
//     }
  
//     return (
//       <div><button
//         onClick={handleClick}
//       >
//         {value}
//       </button>
//       </div>
//     );
//   }
//   return (
//     <>
//     <div className="">
//       <Square />
//       <Square />
//       <Square />
//     </div>
   
//   </>
//   )
// }

// export default App
    



// function Item({ name, isPacked }) {
  // if (isPacked) {
  //   return <li className="item">{name} ✅</li>;
  // }
  // return <li className="item">{name}</li>;


  // return(
  //   <li className="item">
  //     {isPacked?(<del>
  //       {name + '✅'}
  //       </del>):(name)}
  //   </li>
  // )


//   return (
//     <li className="item">
//       {name} {isPacked &&  '✅'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }


//array

import { data } from 'autoprefixer';
import React from 'react'
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

const App = () => {
  const listItems = people.map(data=>
    <li>{data}</li>
  )
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default App



