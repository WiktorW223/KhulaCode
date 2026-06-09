
import { Link, useParams } from 'react-router-dom'
import blog from '../../assets/img/blog-3.jpg'
import user from '../../assets/img/user-1.jpg'
import user2 from '../../assets/img/user-2.jpg'
import user3 from '../../assets/img/user-3.jpg'
import user4 from '../../assets/img/user-4.jpg'
import NavDark from '../../components/navbar/nav-dark'
import { blogCat, blogData, blogTag, trandingPost } from '../../data/data'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

interface BlogCat{
    title: string;
    value: string;
}

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    avatarImg: string;
    avatarName: string;
    date: string;
    time: string;
}

interface TrandingPost{
    id: number;
    image: string;
    title: string;
    time: string;
}

export default function BlogDetail() {
    const params:any = useParams()
    const data:BlogData | undefined = blogData.find((item)=>item.id === parseInt(params.id))


  return (
    <div className='blog-page'>
        <NavDark/>

        <section className="bg-gredient page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-light">{data && data.title ? data.title : 'The Best Platforms for Learning Programming Online'}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="article_detail_wrapss single_article_wrap format-standard">
                            <div className="article_body_wrap">
                                <div className="article_featured_image">
                                    <img className="img-fluid" src={data && data.image ? data.image : blog} alt=""/>
                                </div>
                                
                                <div className="article_top_info">
                                    <ul className="article_middle_info">
                                        <li><Link to="#"><span className="icons"><i className="ti-user"></i></span>by Rosalina Doe</Link></li>
                                        {/* <li><Link to="#"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</Link></li> */}
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br/><br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                {/* <blockquote>
                                    <span className="icon"><i className="fas fa-quote-left"></i></span>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo onsequat.</p>
                                    <h5 className="name">- Rosalina Pong</h5>
                                </blockquote> */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                            </div>
                        </div>
                        
                        {/* <div className="article_detail_wrapss single_article_wrap format-standard">
                            
                            <div className="article_posts_thumb">
                                <span className="img"><img className="img-fluid" src={user} alt=""/></span>
                                <h3 className="pa-name">Rosalina William</h3>
                                <ul className="social-links">
                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-behance"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                                <p className="pa-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                            </div>
                            
                        </div> */}
                        
                        {/* <div className="article_detail_wrapss single_article_wrap format-standard"> */}
                            
                            {/* <div className="comment-area">
                                <div className="all-comments">
                                    <h3 className="comments-title">05 Comments</h3>
                                    <div className="comment-list">
                                        <ul>
                                            <li className="article_comments_wrap">
                                                <article>
                                                    <div className="article_comments_thumb">
                                                        <img src={user} alt=""/>
                                                    </div>
                                                    <div className="comment-details">
                                                        <div className="comment-meta">
                                                            <div className="comment-left-meta">
                                                                <h4 className="author-name">Rosalina Kelian <span className="selected"><i className="fas fa-bookmark"></i></span></h4>
                                                                <div className="comment-date">19th May 2018</div>
                                                            </div>
                                                            <div className="comment-reply">
                                                                <Link to="#" className="reply"><span className="icona"><i className="ti-back-left"></i></span> Reply</Link>
                                                            </div>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                                <ul className="children">
                                                    <li className="article_comments_wrap">
                                                        <article>
                                                            <div className="article_comments_thumb">
                                                                <img src={user2} alt=""/>
                                                            </div>
                                                            <div className="comment-details">
                                                                <div className="comment-meta">
                                                                    <div className="comment-left-meta">
                                                                        <h4 className="author-name">Rosalina Kelian</h4>
                                                                        <div className="comment-date">19th May 2018</div>
                                                                    </div>
                                                                    <div className="comment-reply">
                                                                        <Link to="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-text">
                                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <ul className="children">
                                                            <li className="article_comments_wrap">
                                                                <article>
                                                                    <div className="article_comments_thumb">
                                                                        <img src={user3} alt=""/>
                                                                    </div>
                                                                    <div className="comment-details">
                                                                        <div className="comment-meta">
                                                                            <div className="comment-left-meta">
                                                                                <h4 className="author-name">Rosalina Kelian</h4>
                                                                                <div className="comment-date">19th May 2018</div>
                                                                            </div>
                                                                            <div className="comment-reply">
                                                                                <Link to="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-text">
                                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="article_comments_wrap">
                                                <article>
                                                    <div className="article_comments_thumb">
                                                        <img src={user4} alt=""/>
                                                    </div>
                                                    <div className="comment-details">
                                                        <div className="comment-meta">
                                                            <div className="comment-left-meta">
                                                                <h4 className="author-name">Rosalina Kelian</h4>
                                                                <div className="comment-date">19th May 2018</div>
                                                            </div>
                                                            <div className="comment-reply">
                                                                <a href="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                            </li>
                                        </ul>
                                    </div> */}
                                {/* </div> */}
                                {/* <div className="comment-box">
                                    <h3 className="reply-title">Post Comment</h3>
                                    <div className="comment-forms">
                                        <form action="#">
                                            <div className="row g-4">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your Email"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <textarea name="comment" className="form-control" cols={30} rows={6} placeholder="Type your comments...."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <Link to="#" className="btn btn-main px-5">Submit Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                    
                    {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div style={{position:'sticky', top:'90px'}}>
                            <div className="single_widgets widget_search">
                                <h4 className="title">Search</h4>
                                <form action="#" className="sidebar-search-form">
                                    <input type="search" name="search" placeholder="Search.."/>
                                    <button type="submit"><i className="ti-search"></i></button>
                                </form>
                            </div>

                            <div className="single_widgets widget_category">
                                <h4 className="title">Categories</h4>
                                <ul>
                                    {blogCat.map((item:BlogCat,index:number)=>( 
                                        <li key={index}><Link to="#">{item.title} <span>{item.value}</span></Link></li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="single_widgets widget_thumb_post">
                                <h4 className="title">Trending Posts</h4>
                                <ul>
                                    {trandingPost.map((item:TrandingPost,index:number)=>( 
                                        <li key={index}>
                                            <span className="left">
                                                <img src={item.image} alt="" className="img-fluid"/>
                                            </span>
                                            <span className="right">
                                                <Link className="feed-title" to="#">{item.title}</Link> 
                                                <span className="post-date"><i className="ti-calendar"></i>{item.time}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="single_widgets widget_tags">
                                <h4 className="title">Tags Cloud</h4>
                                <ul>
                                    {blogTag.map((item:string, index:number)=>( 
                                        <li key={index} className='me-2'><Link to="#">{item}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        </section>

        <FooterTop/>
        <Footer/>
    </div>
  )
}
