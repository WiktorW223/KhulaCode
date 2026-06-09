import { blogData } from '../../data/data'
import { Link } from 'react-router-dom'

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

export default function BlogOne() {
  return (
            <div className="row justify-content-center g-4">
                {blogData.slice(0,3).map((item:BlogData,index:number)=>{
                    return(
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="card mb-4 shadow-sm card-lift">
                                <Link to={`/blog-detail${item.id}`}>
                                    <img src={item.image} className="img-fluid" alt="Blog Img Title "/>
                                </Link>
                                
                                <div className="card-body">
                                    <div className="d-flex mb-2"><Link to="#" className="badge bg-light-green text-green rounded-2">Tutorial</Link></div>
                                    <h4 className="grid-blog-heading lh-base">
                                        <Link to={`/blog-detail${item.id}`} className="text-inherit">{item.title}</Link>
                                    </h4>
                                    <p>{item.desc}</p>
                                    
                                    <div className="row align-items-center g-0 mt-4">
                                        <div className="col-auto">
                                            <img src={item.avatarImg} alt="avatar" className="img-fluid circle w-10"/>
                                        </div>
                                        <div className="col ps-2">
                                            <h6 className="lh-1 mb-0">{item.avatarName}</h6>
                                            <p className="text-muted-2 text-md mb-0">{item.date}</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text-muted text-mid m-0">{item.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
  )
}
