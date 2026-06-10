import { featureCategoryData } from '../../data/data'
import { Link } from 'react-router-dom'

interface CategoryData{
    image: string;
    title: string;
    class: number;
}

export default function CategoryTwo() {
  return (
    <div className="row justify-content-center g-4">
        {featureCategoryData.map((item:CategoryData,index:number)=>( 
            <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                <div className={`edu_cat_2 cat-${index + 1}`}>
                    <div className="edu_cat_icons">
                        <Link className="pic-main" to="#"><img src={item.image} className="img-fluid" alt="" /></Link>
                    </div>
                    <div className="edu_cat_data">
                        <h4 className="title"><Link to="#">{item.title}</Link></h4>
                        <ul className="meta">
                            <li className="video"><i className="ti-video-clapper"></i>{item.class} Classes</li>
                        </ul>
                    </div>
                </div>							
            </div>
        ))}
    </div>
  )
}
