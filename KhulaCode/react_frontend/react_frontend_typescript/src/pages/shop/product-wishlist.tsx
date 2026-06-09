import NavDark from '../../components/navbar/nav-dark'
import { Link } from 'react-router-dom'
import { wishlistData } from '../../data/shop'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

interface WishItem{
    id: number;
    image: string;
    name: string;
    date: string;
    price: string;
    stock: boolean;
}

export default function ProductWishlist() {
  return (
    <>
        <NavDark/>

        <section className="bg-gredient page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="breadcrumb m-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb simple light">
                                    <li className="breadcrumb-item"><Link to="#">HOME</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Stooooooooree</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="pageTitle-wrap">
                            <h1 className="text-light">Wishlist</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="table-responsive">
                            <table className="table table-striped wishlist">
                                <tbody>
                                    {wishlistData.map((item:WishItem,index:number)=>( 
                                        <tr key={index}>
                                            <th scope="row"><Link to="#" className="remove_cart"><i className="ti-close"></i></Link></th>
                                            <td><div className="tb_course_thumb"><img src={item.image} className="img-fluid" alt="" /></div></td>
                                            <th>{item.name}<span className="tb_date text-muted">{item.date}</span></th>
                                            <td><span className="wish_price theme-cl">{item.price}</span></td>
                                            {item.stock === true && 
                                                <>
                                                    <td><span className="badge bg-green rounded-pill">In Stock</span></td>
                                                    <td><Link to="#" className="btn btn-main">Add To Cart</Link></td>
                                                </>
                                            }
                                            {item.stock === false && 
                                                <>
                                                    <td><span className="badge bg-red rounded-pill">Out of Stock</span></td>
                                                    <td><Link to="#" className="btn btn-red">Remove</Link></td>
                                                </>
                                            }
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop/>
        
        <FooterDark/>
    </>
  )
}
