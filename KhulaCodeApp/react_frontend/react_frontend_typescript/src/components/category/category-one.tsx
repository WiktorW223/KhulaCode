import { categoryOne } from '../../data/data';

interface Category{
    icon: string;
    title: string;
    count: number;
}

export default function CategoryOne() {
 
  return (
    <>
        <div className="row justify-content-center g-4">
            {categoryOne.map((cat:Category, index:number)=>{
                return(
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
                        <div className="card-hover style-2 p-4 rounded-3 card card-body d-flex flex-column gap-3 m-0">
                            <div className="icon-wraps">
                                <span className="icon-slap fs-1"><i className={cat.icon}></i></span>
                            </div>
                            <div>
                                <h4 className="text-dark fw-normal mb-0 lh-base">{cat.title}</h4>
                                <span className="text-muted-2">
                                    <span className="fw-semibold me-1">{cat.count}</span>Courses
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>   
    </>
  )
}
