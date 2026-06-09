import work1 from '../assets/img/search.png'
import work2 from '../assets/img/schedule.png'
import work3 from '../assets/img/medal.png'

interface Data{
    image: string;
    title: string;
    desc: string;
}

export const data:Data[] = [
    {
        image:work1,
        title:'Find Course',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
        image:work2,
        title:'Book Your Scat',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
        image:work3,
        title:'Get Certified',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
]

export default function WorkProcessTwo() {
  return (
    <div className="row justify-content-center gx-xl-5 g-4">
        {data.map((item:Data,index:number)=>( 
            <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                <div className="prc-wraps">
                    <div className="prc-thumb text-center mb-3">
                        <img src={item.image} className="img-fluid w-20" alt="" />
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
