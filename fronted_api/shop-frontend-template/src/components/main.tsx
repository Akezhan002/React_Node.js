import { Posts } from "./Posts"
import '../css/main.css'
export const Main = () => {
    return (
        <div className="container">
        <div className="title-block">
          <h2 className="news-h2">News</h2>
        </div>
        <Posts/>
      </div>

    )
}