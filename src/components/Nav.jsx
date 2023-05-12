import SearchBar from "./SearchBar";
import "./Nav.css"
import Info from "./Info";


export default function Nav(props) {
    return (
      <div className="navbar">
         <Info/>
         <SearchBar onSearch={props.onSearch}/>
      </div>
    );
 }