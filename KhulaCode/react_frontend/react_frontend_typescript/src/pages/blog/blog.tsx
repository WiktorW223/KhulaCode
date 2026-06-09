import { Link } from 'react-router-dom'

import NavDark from '../../components/navbar/nav-dark'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

import { blogData } from '../../data/data'

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

export default function Blog() {
  return (
    <>
        <NavDark/>

        <section className="bg-gredient page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-light">Latest Updates</h1>
                            <p className="text-light">Reference giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section>
            <div className="container">
                <div className="row align-items-center justify-content-center mb-5">
                    {blogData.map((item:BlogData,index:number)=>( 
                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <div className="card mb-4 shadow-sm card-lift">
                                <Link to={`/blog-detail/${item.id}`}>
                                    <img src={item.image} className="img-fluid" alt="Blog Img Title "/>
                                </Link>
                                <div className="card-body">
                                    <div className="d-flex mb-2"><a href="#" className="badge bg-light-green text-green rounded-2">Tutorial</a></div>
                                    <h4 className="grid-blog-heading lh-base">
                                        <Link to={`/blog-detail/${item.id}`} className="text-inherit">{item.title}</Link>
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
                    ))}
                </div>
                
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                <button type="button" className="btn btn-light-main px-5"><i className="bi bi-arrow-clockwise me-2"></i>Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterTop/>
        <Footer/>
    </>
  )
}
