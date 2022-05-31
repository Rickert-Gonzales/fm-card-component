import "./App.css";
import ContentImage from "./components/Image/ContentImage";
import ContentText from "./components/Text/ContentText";

function App() {
   return (
      <div className="Container">
         <div className="Container-Card">
            <ContentImage className="Container-Card__img" />
            <ContentText className="Container-Card__text" />
         </div>
      </div>
   );
}

export default App;
