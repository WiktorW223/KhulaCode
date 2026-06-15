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

const nextButtonCaption = currentIndex===1&&currentUnitIndex+1=== unitLessons.length?`Unit ${unitUrl+1}`:currentIndex===1?nextLesson?.title:"Activity"

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


    
    
    
    
    
    
   
    return (
      <div className={`edu_wraper ${border ? 'border' : ''}`}>
          <h4 className="edu_title">Lesson Overview</h4>
          <p>{lesson?.description}</p>		
          
      </div>
    )
  }



  return (
    <>
       <StudentNavbar refreshKey={refresh}/>

        <div className="image-cover ed_detail_head lg theme-ov" style={{backgroundColor:'#f4f4f4', backgroundImage:`url(${bg})`}} data-overlay="7">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-10">
                        <div className="ed_detail_wrap light">
                            <div className="course-type d-flex align-items-center gap-2 mb-1">
                                <span className="badge bg-green rounded-pill">{tag}</span>
                            </div>
                            <div className="ed_header_caption">
                                <h2 className="ed_title">Lwazi's Adventure in the Cyber Jungle </h2>
                            </div>
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
                                    <li><i className={`bi ${currentItem?.completed ? "bi-check-circle-fill text-success" : "bi-circle text-muted"}`}></i>{currentItem?.completed ? "Completed" : "Not completed"}</li>
                                </ul>
                            </div>	
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

                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-4 mb-4">
                            <button  disabled={currentIndex<1&&prevLesson===null&&unitUrl<=0} onClick={handlePrevClick} type="button" className="btn btn-light-main"><i className="bi bi-arrow-left me-1"></i>Prev{currentIndex<1&&prevLesson===null&&unitUrl<=0?"":currentIndex===0&&currentUnitIndex=== 0?`: Unit ${unitUrl-1}`:currentIndex===0? `: ${prevLesson?.title}` :": Video"}</button>
                            <button  disabled={lessonItems.length-1<=currentIndex&&nextLesson===null&&unitUrl>=5} type="button" onClick = {handleNextClick} className="btn btn-main">Next{lessonItems.length-1<=currentIndex&&nextLesson===null&&unitUrl>=5 ?"":currentIndex===1&&currentUnitIndex+1=== unitLessons.length?`: Unit ${unitUrl+1}`:currentIndex===1? `: ${nextLesson?.title}` : ": Activity"}<i className="bi bi-arrow-right ms-1"></i></button>
                        </div>

                        <div className="tab_box_info mt-4">
                            <ul className="nav nav-pills mb-3 light" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="overview-tab" data-bs-toggle="pill" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="curriculum-tab" data-bs-toggle="pill" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="false">Curriculum</a>
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <CoursesOverview border={false}/>
                                </div>
                                <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                                    <Circullum border={false} refreshKey={refresh}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </section>
    </>
  )
}
