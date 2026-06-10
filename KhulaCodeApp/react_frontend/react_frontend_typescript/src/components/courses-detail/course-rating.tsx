import { courseRatingData } from '../../data/data'
import { Link } from 'react-router-dom'

interface Rating{
    image: string;
    name: string;
    date: string;
    rate: string[];
    level: string;
    review: string;
    desc: string;
    like: number;
    dislike: number;
    love: number;
}

export default function CourseRating({border}:{border:boolean}) {
  return (
    <div className={`list-single-main-item fl-wrap ${border ? 'border' : ''}`}>
        <div className="list-single-main-item-title fl-wrap">
            <h3>Item Reviews -  <span> 3 </span></h3>
        </div>
        <div className="reviews-comments-wrap">
            {courseRatingData.map((item:Rating,index:number)=>( 
                <div className="reviews-comments-item" key={index}>
                    <div className="review-comments-avatar">
                        <img src={item.image} className="img-fluid" alt=""/> 
                    </div>
                    <div className="reviews-comments-item-text">
                        <h4><Link to="#">{item.name}</Link><span className="reviews-comments-item-date"><i className="bi bi-clock"></i>{item.date}</span></h4>
                        
                        <div className={`listing-rating ${item.level}`} data-starrating2="5">
                            {item.rate.map((item,index)=>( 
                                <i className={item} key={index}></i>
                            ))}
                            <span className="review-count">{item.review}</span> </div>
                        <div className="clearfix"></div>
                        <p>{item.desc}</p>
                        <div className="pull-left reviews-reaction">
                            <Link to="#" className="comment-like active"><i className="bi bi-hand-thumbs-up"></i> {item.like}</Link>
                            <Link to="#" className="comment-dislike active"><i className="bi bi-hand-thumbs-down"></i> {item.dislike}</Link>
                            <Link to="#" className="comment-love active"><i className="bi bi-suit-heart"></i> {item.love}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}
