import { useState, useEffect } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useApi } from '../../../lib/useApi'
import bg from '../../../assets/img/black.png'
import image from '../../../assets/videos/black.png'
import avatar from '../../../assets/img/avatar-6.jpg'
import ReactPlayer from 'react-player'
import thumbnail from '../../../assets/img/tn.png'
import NavDark from '../../../components/navbar/nav-dark'
import StudentNavbar from '../../../components/student-dashboard/student-navbar'
import ReviewForm from '../../../components/courses-detail/review-form'
import DetailRating from '../../../components/courses-detail/detail-rating'
import CourseRating from '../../../components/courses-detail/course-rating'
import CourseDetail from '../../../components/courses-detail/course-detail'
import Circullum from '../../../components/courses-detail/circullum'
import CoursesOverview from '../../../components/courses-detail/courses-overview'
import FooterTop from '../../../components/footer/footer-top'
import FooterDark from '../../../components/footer/footer-dark'
import DetailSidebarFour from '../../../components/courses-detail/detail-sidebar-four'
import videoFile from "../../../assets/videos/videoplayback.mp4"

export default function Detail5() {
const navigate = useNavigate()
const [showVideo, setShowVideo] = useState(false)
const {unit,lessonNumber}  = useParams()
let [item] = useSearchParams()
const itemParam = Number(item.get("item"))
const lessonNumUrl = Number(lessonNumber)
const unitUrl = Number(unit)
const [currentIndex,setCurrentIndex] = useState(0)
const [unitLessons, setUnitLessons]= useState<Lesson[]>([])
const currentUnitIndex = unitLessons.findIndex((lesson)=>lesson.number===Number(lessonNumUrl))
const nextLesson = currentUnitIndex<unitLessons.length-1 ?unitLessons[currentUnitIndex+1]:null
const prevLesson = currentUnitIndex>0 ?unitLessons[currentUnitIndex-1]:null
const currentUnitLesson = currentUnitIndex>=0 ? unitLessons[currentUnitIndex]:null
const [lesson,setLesson] = useState<Lesson|null>(null)
const lessonItems:LessonContent[] = lesson?[...lesson.activities,...lesson.videos].sort((a,b)=>a.order-b.order):[]
const currentItem = lessonItems[currentIndex]
const lessonId = Number(lesson?.id??0)
const [message,setMessage] = useState("")
const [refresh,setRefresh] = useState(false)
const [xp,setXp] = useState(0)
const [showXP,setShowXP] = useState(false)
const [prevUnit,setPrevUnit] = useState(0)
const [tag, setTag] = useState("")
const {makeRequest} = useApi()



const [selected,setSelected] = useState<number|null>(null)

const renderLessonContent = ()=>
    {
        const handleVideoEnd = async ()=>
        {
            if(currentItem?.type!=="video")
            {
                return
            }
            const res = await makeRequest(`video/${lessonId}/${currentItem.id}/attempt/`,
                {method:"POST",
                headers:
                {
                    "Content-Type":"application/json"
                }}
            )
            if(!res.ok)
            {
            console.log("error")
            }
            const data = await res.json()
            // console.log({data})
            setRefresh((value)=>!value)
            setXp(data.amount_xp)


        }
        
        
        if(currentItem?.type==="video")
            {

                return(
                    <div className="courses-video xl">
                                    <div className="thumb position-relative overflow-hidden">
                                        {!showVideo ? (
                                            <>
                                                <img className="pro_img img-fluid w100" src={thumbnail} alt="7.jpg"/>
                                                <div className="overlay_icon">
                                                    <div className="bb-video-box" style={{ border: "none" }}>
                                                        <button
                                                            type="button"
                                                            className="play-popup-video"
                                                            style={{ outline: "none", boxShadow: "none" }}
                                                            onClick={() => setShowVideo(true)}
                                                        >
                                                            <i className="bi bi-play-fill"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <ReactPlayer
                                                src={currentItem?.video_url}
                                                controls
                                                playing
                                                width="100%"
                                                height="100%"
                                                style={{ width: "100%", height: "100%", aspectRatio: "16 / 9" }}
                                                onEnded = {handleVideoEnd}
                                            />
                                        )}
                                    </div>
                                    
                                    </div>
                )
            }
            else if(currentItem?.type==="activity")
        {
           
            return(
                <>
                <h3 style={{ whiteSpace: "pre-line" }}>{currentItem?.question?currentItem.question.replace(/\\n/g,"\n"):""}</h3>
                
                {currentItem.choices.map((opt:Choice ,optIndex:number)=>
                    {
                    const isSelected = selected === optIndex
                    const display = isSelected? message:""

                    
                    const buttonClass= isSelected?
                     opt.is_correct?
                        "btn btn-green me-1"
                        :"btn btn-red me-1"
                    :"btn btn-light-main me-1"
                    
                    return(
                    <div key= {optIndex}>
                    <button  style={{ whiteSpace: "pre-wrap",textAlign:"left" }}className={buttonClass} onClick={()=>handleButtonClick(optIndex,opt.order)}>{opt.text.replace(/\\n/g,"\n")}</button>
                    <p>{display}</p>
                    
                </div>)
                }
                    
                    
                    
                )}
                
                {/* <p>{experience}</p>    */}
            </>
        )
            }       
    }
const handleButtonClick = async(optIndex:number,choiceOrder:number)=>
{
    if(currentItem?.type!=="activity")
    {
        return
    }
    setSelected(optIndex)
    const res = await makeRequest(`activity/${lessonId}/${currentItem.id}/attempt/`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({"choice_order":choiceOrder})
    })
    if(!res.ok){
        console.log("error with backend")
        return
    }
    const data = await res.json()
    setMessage(data.message)
    setXp(data.amount_xp)
    setRefresh((value)=>!value)

}

type Lesson = {
    id:number
    title:string
    description:string
    completed:boolean
    number:number
    total_number?:number
    activities:ActivityItem[]
    videos:VideoItem[]
}

type VideoItem = {
    order:number
    type: "video"
    video_url: string
    title:string
    completed:boolean
    id:number
  }
  
  type Choice = {
    text: string
    is_correct: boolean
    activity:number
    order:number

}
  
  type ActivityItem = {
    choices:Choice[]
    order:number
    type: "activity"
    question: string
    title:string
    completed:boolean
    id:number
    
  }
  
  type LessonContent = VideoItem | ActivityItem  


useEffect(()=>{
    if(xp<0)
    {
        return
    }

    const timer = setTimeout(()=>
{
    setXp(0)

},3500)
return ()=> clearTimeout(timer)
},[xp])

  useEffect(()=>
    {
      makeRequest(`lessons/${unitUrl}/`)
      .then( res => res.json())
      .then( data => {setUnitLessons(data)})
    }
  ,[unitUrl])

  useEffect(()=>
    {
      if(unitUrl>1)
        {makeRequest(`num-lesson-unit/${unitUrl-1}/`)
      .then( res => res.json())
      .then( data => {
        console.log(data.num)
        setPrevUnit(data.num)

      })}
    }
  ,[unitUrl])

  useEffect(()=>
  {
    makeRequest(`lesson/${unitUrl}/${lessonNumUrl}/`)
    .then( res => res.json())
    .then( data => {
        const sortedItems = [...data.activities,...data.videos].sort(
            (a,b)=>a.order-b.order
        )
        const itemIndex = sortedItems.findIndex((item)=>item.order===itemParam)
        setLesson(data),setCurrentIndex(itemIndex>=0?itemIndex:0),setSelected(null),setMessage(""),setShowVideo(false),setXp(0)})
  }
,[lessonNumUrl,unitUrl,itemParam])

useEffect (()=>
{
makeRequest("get-info/1/")
.then((res=>res.json()))
.then((data=>{setTag(data.profile_data.tag)
}))
},[refresh])


useEffect(()=>
    {
      makeRequest(`lesson/${unitUrl}/${lessonNumUrl}/`)
      .then( res => res.json())
      .then( data => {
          setLesson(data)})
    },[refresh,unitUrl,lessonNumUrl])

    useEffect(()=>
        {
          makeRequest(`lesson/${unitUrl}/${lessonNumUrl}/`)
          .then( res => res.json())
          .then( data => {
              setLesson(data)})
        },[refresh,unitUrl,lessonNumUrl])

const handlePrevClick = ()=>{
    if(currentIndex>=1)
    {
        setCurrentIndex(i=>i-1)
        setXp(0)
        setMessage("")
        setSelected(null)
        return
    }
    if(prevLesson)
    {
        navigate(`/lesson/${unitUrl}/${prevLesson?.number}?item=2`)
        return
    }
    if(unitUrl>0)
    {
        navigate(`/lesson/${unitUrl-1}/${prevUnit}?item=2`)
        return
    }

}

const handleNextClick = ()=>{
    if(currentIndex<lessonItems?.length-1)
    {
        setCurrentIndex(i=>i+1)
        setXp(0)
        setMessage("")
        setSelected(null)
        return
    }
    if(lesson?.total_number&&nextLesson)
    {
        navigate(`/lesson/${unitUrl}/${nextLesson?.number}`)
        return
    }
    if(unitUrl<5)
    {
        navigate(`/lesson/${unitUrl+1}/1`)
        return
    }

}

function CoursesOverview({border}:{border:boolean}) {

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
          <h4 className="edu_title">Lesson Overview</h4>
          <p>{lesson?.description}</p>		
          
          {/* <div className="who-enrolled-block mt-4">
              <h5 className="edu_title mb-2">Who Should Enroll?</h5>
              <ul className="features-list">
                  {data.map((item:string,index:number)=>( 
                    <li key={index}><i className="bi bi-check-circle"></i>{item}</li>
                  ))}
              </ul>
          </div> */}
      </div>
    )
  }



  return (
    <>
       {/* <NavDark/> */}
       <StudentNavbar refreshKey={refresh}/>

        <div className="image-cover ed_detail_head lg theme-ov" style={{backgroundColor:'#f4f4f4', backgroundImage:`url(${bg})`}} data-overlay="7">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-10">
                        <div className="ed_detail_wrap light">
                            <div className="course-type d-flex align-items-center gap-2 mb-1">
                                <span className="badge bg-green rounded-pill">{tag}</span>
                                {/* <span className="badge bg-red rounded-pill"><i className="bi bi-tags me-1"></i>Pro</span> */}
                            </div>
                            <div className="ed_header_caption">
                                <h2 className="ed_title">Lwazi's Adventure in the Cyber Jungle </h2>
                                {/* <ul>
                                    <li><i className="bi bi-calendar-check"></i>10 - 20 weeks</li>
                                    <li><i className="bi bi-calendar-check"></i>102 Lectures</li>
                                    <li><i className="bi bi-people"></i>502 Student Enrolled</li>
                                </ul> */}
                            </div>
                            
                            {/* <div className="ed_rate_info">
                                <div className="d-flex align-items-center justify-content-start gap-2">
                                    <div className="star_info text-md d-flex align-items-center gap-1">
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                    </div>
                                    <div className="review_counter d-flex align-items-center gap-1">
                                        <strong className="high fw-bold text-light">4.9</strong><span className="text-mid text-light">(2.24k Reviews)</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        <section className="bg-light pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 pe-xl-5 pt-5">
                        <div className="inline_edu_wrap">
                            <div className="inline_edu_first">
                                <h4>{`Unit ${unitUrl}: ${lesson?.title}`}</h4>
                                <ul className="edu_inline_info">
                                    {/* <li><i className="ti-calendar"></i>10 weeks</li> */}
                                    {/* <li><i className="bi bi-camera-video"></i>{lesson?.total_number}</li> */}
                                    <li><i className={`bi ${currentItem?.completed ? "bi-check-circle-fill text-success" : "bi-circle text-muted"}`}></i>{currentItem?.completed ? "Completed" : "Not completed"}</li>
                                    {/* <li><i className="ti-user"></i>42k Student Enrolled</li> */}
                                </ul>
                            </div>	
                            {/* <div className="inline_edu_last">
                                <h4 className="edu_price">$49.00</h4><a href="#" className="btn btn-main enroll-btn">Buy Now<i className="ti-angle-right"></i></a>
                            </div> */}
                        </div>
                        
                        {xp>0 && (
    <div className="xp-toast show">
      <span className="xp-icon">+</span>
      <div>
        <strong>{xp} XP earned</strong>
        <p>Nice progress!</p>
      </div>
    </div>
  )}
                        {renderLessonContent()}
                        
                            
                           
                            {/* <div className="instructor_over_info">
                                <ul>
                                    <li>
                                        <div className="ins_info">
                                            <div className="ins_info_thumb"><img src={avatar} className="img-fluid" alt="" /></div>
                                            <div className="ins_info_caption"><span>Teacher</span><h4>Jessica West</h4></div>
                                        </div>
                                    </li>
                                    <li><span>Category</span>Software</li>
                                    <li>
                                        <span>Reviews</span>
                                        <div className="eds_rate">4.2
                                            <div className="eds_rating">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                            
                        
                        
                        <div className="tab_box_info mt-4">
                        <button  disabled={currentIndex<1&&prevLesson===null&&unitUrl<=0} onClick={handlePrevClick} type="button" className="btn btn-light-main me-1">Prev</button>
                        <button  disabled={lessonItems.length-1<=currentIndex&&nextLesson===null&&unitUrl>=5} type="button" onClick = {handleNextClick} className="btn btn-light-main me-1">Next</button>
                            <ul className="nav nav-pills mb-3 light" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="overview-tab" data-bs-toggle="pill" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="curriculum-tab" data-bs-toggle="pill" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="false">Curriculum</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="instructor-tab" data-bs-toggle="pill" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="reviews-tab" data-bs-toggle="pill" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                </li> */}
                            </ul>
                            {/* disabled={lesson?.number<=1}
                            disabled={lesson?.number>=lesson?.total_number} */}
                           
                        
                            <div className="tab-content" id="pills-tabContent">
                                
                                <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab"> 
                                    <CoursesOverview border={false}/>
                                </div>
                                
                                <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                                    <Circullum border={false} refreshKey={refresh}/>
                                </div>
                                
                                <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                    <CourseDetail border={false}/>
                                </div>
                                
                                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                    <DetailRating border={false}/>
                        
                                    <CourseRating border={false}/>
                                    
                                    <ReviewForm border={false}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </section>

        {/* */}
        {/* <FooterDark/> */}
    </>
  )
}
