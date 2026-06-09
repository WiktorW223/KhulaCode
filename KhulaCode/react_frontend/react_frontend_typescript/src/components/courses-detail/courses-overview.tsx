
export default function CoursesOverview({border}:{border:boolean}) {

  const data:string[] = [
    "Beginners interested in starting a career in web design",
    "Developers looking to expand their skills into design",
    "Anyone wanting to create their own websites or improve existing ones",
    "Students pursuing careers in tech, design, or media",
    "Freelancers who want to expand their service offerings",
    "Graphic designers looking to transition into UI/UX or web design",
    "Entrepreneurs and business owners who want to build or maintain their own websites"
  ]
  return (
    <div className={`edu_wraper ${border ? 'border' : ''}`}>
        <h4 className="edu_title">Course Overview</h4>
        <p>Learn Python in Xhosa</p>		
        <p>Through watching videos and playing interactive puzzles</p>
        
        <div className="who-enrolled-block mt-4">
            <h5 className="edu_title mb-2">Who Should Enroll?</h5>
            <ul className="features-list">
                {data.map((item:string,index:number)=>( 
                  <li key={index}><i className="bi bi-check-circle"></i>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
