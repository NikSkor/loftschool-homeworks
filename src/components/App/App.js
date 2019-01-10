import React from 'react';

export default class App extends React.Component {
    render() {
      return (
        <div className="App">
            <p className="description">Миру-мир, студентам - beer.</p>
        </div>
      );
    }
   }

//    Другой вариант через функцию:
//    export default function App() {
//     return (
//       <div className="App">
//           <p className="description">Миру-мир, студентам - beer.</p>
//       </div>
//     );
//  } 