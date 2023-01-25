import "./topbar.scss"
import { Person, Mail} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">AKAR</a>
          <div className="itemContainer">
            <Person/>
            <span>+44 924 12 74</span>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}
