import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import List from './components/List'
import Recommend from './components/Recommend'
import Download from './components/Download'
import Writer from './components/Writer'

class Home extends PureComponent {
  render() {
    return (
      <div className="display-flex padding-lg">
        <div className="flex-3 display-flex flex-column padding-right-sm">
          <Link to="/detail">
            <img className="w-100" 
              src="https://upload.jianshu.io/admin_banners/web_images/4552/532152a690ad5a98d1c22eb48a316ca7ff428970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt="img" />
          </Link>
          <List></List>
        </div>
        <div className="flex-2 display-flex flex-column padding-left-sm">
          <Recommend></Recommend>
          <Download></Download>
          <Writer></Writer>
        </div>
      </div>
    )
  }
}

export default Home