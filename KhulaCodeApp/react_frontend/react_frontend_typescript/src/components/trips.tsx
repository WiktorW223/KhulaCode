import { tripsData } from '../data/data'

interface Trips{
    icon: string;
    title: string;
    desc: string;
}

export default function Trips() {
  return (
    <div className="trips_wrap full bg-main py-4">
        <div className="container">
            <div className="row g-4">
                {tripsData.map((item:Trips,index:number)=>{
                    return(
                        <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                            <div className="trips d-flex align-items-center gap-3 pe-xl-5">
                                <div className="trips_icons flex-1">
                                    <span className="square--60 circle bg-transparents"><i className={item.icon}></i></span>
                                </div>
                                <div className="trips_detail">
                                    <h5 className="text-light lh-base mb-0">{item.title}</h5>
                                    <p className="text-light opacity-75 lh-base m-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
