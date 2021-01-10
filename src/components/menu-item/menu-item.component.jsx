import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history}) => (
    // The style allows us to dynamically change the CSS
    <div className={`${size} menu-item`}>
        <div 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className='background-image' 
        />
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);