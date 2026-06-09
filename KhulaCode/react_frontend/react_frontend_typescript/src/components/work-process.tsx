import { workData } from '../data/data'

interface WorkData{
    icon: string;
    theme: string;
    title: string;
    desc: string;
}

export default function WorkProcess() {
  return (
    <div className="row justify-content-center gx-xl-5 g-4">
        {workData.map((item:WorkData,index:number)=>(
            <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                <div className="prc-wraps">
                    <div className="prc-icons mb-3">
                        <div className={`square--80 circle bg-light-${item.theme} mx-auto`}><span className={`text-${item.theme} fs-3`}><i className={item.icon}></i></span></div>
                    </div>
                    <div className="prc-caption text-center">
                        <h4>{item.title}</h4>
                        <p className="text-muted-2">{item.desc}</p>
                    </div>
                </div>
            </div>
        ))}					
    </div>
  )
}
