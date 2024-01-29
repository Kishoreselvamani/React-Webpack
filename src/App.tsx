import "./style.css";
import Image from "./react-logo.jpg";
import Clickcounter from "./Clickcounter";
// import { AppComponent } from "./AppComponent";



export const App = () => {
   
  return (
    <>
      <h2>
    
        edited React-Template from the Webpack - {process.env.NODE_ENV}
        {process.env.name}
      </h2>
      <img src={Image} alt="react-logo" width={100} />
      <Clickcounter />
      {/* <AppComponent/>     
      <Main/> */}
    </>
  );
};
