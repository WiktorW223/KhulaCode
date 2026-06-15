import { useState, useEffect } from "react";
import { getBackendUrl, useApi } from "../../lib/useApi";
import { CircleHelp } from "lucide-react"
import { Link } from 'react-router-dom'

const data = [
    { title:'Lecture: 01', desc:'Web Designing Beginner' },
    { title:'Lecture: 02', desc:'Startup Designing with HTML5 & CSS3' },
    { title:'Lecture: 03', desc:'How To Call Google Map iFrame' },
    { title:'Lecture: 04', desc:'Create Drop Down Navigation Using CSS3' },
    { title:'Lecture: 05', desc:'How to Create Sticky Navigation Using JS' },
]
const backendUrl = getBackendUrl()


type CurriculumActivity= {
    title:string
    id:number
    type:string 
    order:number
    completed:boolean

   }
   
   type CurriculumVideo={
    title:string 
    order:number 
    id:number 
    type:string
    completed:boolean
   }
    type CurriculumLesson=
    {
        id:number
        unit:number
        number:number
        title:string
        completed:boolean 
        activities: CurriculumActivity[] 
        videos: CurriculumVideo[]
    }
    type LessonContent = CurriculumVideo|CurriculumActivity
type mostRecent=
{
    unit:number,
    number:number,
    order:number
}
// type Lesson = {
//     id:number
//     title:string
//     description:string
//     completed:boolean
//     number:number
//     total_number?:number
//     activities:ActivityItem[]
//     videos:VideoItem[]
//     unit:number
// }

// type VideoItem = {
//     order:number
//     type: "video"
//     video_url: string
//     title:string
//     completed:boolean
//   }
  
//   type Choice = {
//     text: string
//     is_correct: boolean
//     activity:number
//     order:number

// }
  
//   type ActivityItem = {
//     choices:Choice[]
//     order:number
//     type: "activity"
//     question: string
//     title:string
//     completed:boolean
    
//   }
  
//   type LessonContent = VideoItem | ActivityItem  

// interface Data {
//     title: string;
//     desc: string;
//}

export default function Circullum({border,refreshKey}:{border:boolean,refreshKey?:boolean}) {
    const {makeRequest} = useApi()
    const [lessons,setLessons] = useState<CurriculumLesson[]>([])
    const [openTab,setOpenTab]=useState<number>(1)

    

  

    useEffect(()=>
    {
        const fillLessons = async() =>
        {
            const res= await makeRequest("curriculum/")
            if(!res.ok)
            {
                console.log("errors")
                return
            }
            const data = await res.json()
            setLessons(data)
            if(!lessons)
            {
                console.log("empty arr")
            }
    
        }

        
    fillLessons()
    },[refreshKey])

    useEffect(()=>{
        const getRecent = async()=>
        {

            const res = await makeRequest("get-last/")
                if(!res.ok)
                {
                    console.log("error")
                    return
                }
                const data = await res.json()
                if(data.message==="all lessons completed")
                {
                setOpenTab(5)
                return
                }
                setOpenTab(data.unit)
                

            

        }
        getRecent()
    }
    ,[refreshKey])

    
  const unitZeroLessons = lessons.filter((lesson)=>lesson.unit==0)
    const unitOneLessons = lessons.filter((lesson) => lesson.unit === 1)
    const unitTwoLessons = lessons.filter((lesson) => lesson.unit === 2)
    const unitThreeLessons = lessons.filter((lesson) => lesson.unit === 3)
    const unitFourLessons = lessons.filter((lesson) => lesson.unit === 4)
    const unitFiveLessons = lessons.filter((lesson) => lesson.unit === 5)

  
  
  
  
    

  
  
    return (
    <div className={`edu_wraper ${border ? 'border' : ''}`}>
        <h4 className="edu_title">Course Curriculum</h4>
        <div id="accordionExample" className="accordion circullum">

            
        <div className="card border shadow-0 mb-3">
                <div id="headingZero" className="card-header">
                    <h6 className="mb-0 accordion_title"><a href="#" data-bs-toggle="collapse" data-bs-target="#collapseZero" aria-expanded={openTab===0?"true":"false"} aria-controls="collapseZero" className={`d-block position-relative text-dark collapsible-link py-2 ${openTab===0 ? "" : "collapsed"}`} onClick={(e)=>{e.preventDefault(); setOpenTab(openTab===0?-1:0)}}>Part 00: Intro to Computers</a></h6>
                </div>
                <div id="collapseZero" aria-labelledby="headingZero" data-parent="#accordionExample" className={`collapse ${openTab===0 ? "show" : ""}`}>
                <div className="card-body">
                    <ul className="lectures_lists">
                    {unitZeroLessons.map((lesson: CurriculumLesson,i) => {
        const content: LessonContent[] = [...lesson.activities, ...lesson.videos].sort(
            (a, b) => a.order - b.order
        )

        return content.map((item: LessonContent) => {
            const iconClass = item.completed
                ? "bi-check-circle-fill text-success"
                : item.type === "video"
                    ? "bi-camera-video"
                    : "bi-question-circle"

            return (
                <li key={`${lesson.id}-${item.order}`}>
                    <Link to={`/lesson/0/${lesson.number}?item=${item.order}`}><div className="lectures_lists_title">  <i className={`bi ${iconClass}`}></i>{i>=9?item.type==="video"?`Video ${i+1}`:`Activity ${i+1}`:item.type==="video"?`Video 0${i+1}`:`Activity 0${i+1}`}</div></Link>  {/*Video/Activity ${item.order} */}
                    <div className="d-inline-block text-truncate w-shrunk">{item.title}</div>
                </li>
            )
            })
            })}
                    </ul>
                </div>
                </div>
            </div>
            
            

            <div className="card border shadow-0 mb-3">
                <div id="headingOne" className="card-header">
                    <h6 className="mb-0 accordion_title"><a href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={openTab===1?"true":"false"} aria-controls="collapseOne" className={`d-block position-relative text-dark collapsible-link py-2 ${openTab===1 ? "" : "collapsed"}`} onClick={(e)=>{e.preventDefault(); setOpenTab(openTab===1?-1:1)}}>Part 01: Sequencing</a></h6>
                </div>
                <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className={`collapse ${openTab===1 ? "show" : ""}`}>
                <div className="card-body">
                    <ul className="lectures_lists">
                    
                    {unitOneLessons.map((lesson: CurriculumLesson,i) => {
                            const content: LessonContent[] = [...lesson.activities, ...lesson.videos].sort(
                                (a, b) => a.order - b.order
                            )

                            return content.map((item: LessonContent) => {
                                const iconClass = item.completed
                                    ? "bi-check-circle-fill text-success"
                                    : item.type === "video"
                                        ? "bi-camera-video"
                                        : "bi-question-circle"

                                return (
                                    <li key={`${lesson.id}-${item.order}`}>
                                        <Link to={`/lesson/1/${lesson.number}?item=${item.order}`}><div className="lectures_lists_title">  <i className={`bi ${iconClass}`}></i>{i>=9?item.type==="video"?`Video ${i+1}`:`Activity ${i+1}`:item.type==="video"?`Video 0${i+1}`:`Activity 0${i+1}`}</div></Link>  {/*Video/Activity ${item.order} */}
                                        <div className="d-inline-block text-truncate w-shrunk">{item.title}</div>
                                    </li>
                                )
                            })
                        })}
                        
                        
                        
                    </ul>
                </div>
                </div>
            </div>

            <div className="card border shadow-0 mb-3">
                <div id="headingTwo" className="card-header">
                    <h6 className="mb-0 accordion_title"><a href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded={openTab===2?"true":"false"} aria-controls="collapseTwo" className={`d-block position-relative text-dark collapsible-link py-2 ${openTab===2 ? "" : "collapsed"}`} onClick={(e)=>{e.preventDefault(); setOpenTab(openTab===2?-1:2)}}>Part 02: Decisions</a></h6>
                </div>
                <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className={`collapse ${openTab===2 ? "show" : ""}`}>
                <div className="card-body">
                    <ul className="lectures_lists">
                    {unitTwoLessons.map((lesson: CurriculumLesson,i) => {
                            const content: LessonContent[] = [...lesson.activities, ...lesson.videos].sort(
                                (a, b) => a.order - b.order
                            )

                            return content.map((item: LessonContent) => {
                                
                                const iconClass = item.completed
                                    ? "bi-check-circle-fill text-success"
                                    : item.type === "video"
                                        ? "bi-camera-video"
                                        : "bi-question-circle"
                                return(
                                <li key={`${lesson.id}-${item.order}`}>
                                    <Link to={`/lesson/2/${lesson.number}?item=${item.order}`}><div className="lectures_lists_title">  <i className={`bi ${iconClass}`}></i>{item.type==="video"?`Video 0${i+1}`:`Activity 0${i+1}`}</div></Link>
                                    <div className="d-inline-block text-truncate w-shrunk">{item.title}</div>
                                </li>)
                    })
                        })}
                    </ul>
                </div>
                </div>
            </div>

            <div className="card border shadow-0 mb-3">
                <div id="headingThree" className="card-header">
                    <h6 className="mb-0 accordion_title"><a href="#" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded={openTab===3?"true":"false"} aria-controls="collapseThree" className={`d-block position-relative text-dark collapsible-link py-2 ${openTab===3 ? "" : "collapsed"}`} onClick={(e)=>{e.preventDefault(); setOpenTab(openTab===3?-1:3)}}>Part 03: Loops</a></h6>
                </div>
                <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className={`collapse ${openTab===3 ? "show" : ""}`}>
                <div className="card-body">
                    <ul className="lectures_lists">
                    {unitThreeLessons.map((lesson: CurriculumLesson,i) => {
                            const content: LessonContent[] = [...lesson.activities, ...lesson.videos].sort(
                                (a, b) => a.order - b.order
                            )

                            return content.map((item: LessonContent) => {
                                const iconClass = item.completed
                                    ? "bi-check-circle-fill text-success"
                                    : item.type === "video"
                                        ? "bi-camera-video"
                                        : "bi-question-circle"
                                return(
                                <li key={`${lesson.id}-${item.order}`}>
                                    <Link to={`/lesson/${lesson.unit}/${lesson.number}?item=${item.order}`}><div className="lectures_lists_title">  <i className={`bi ${iconClass}`}></i>{item.type==="video"?`Video 0${i+1}`:`Activity 0${i+1}`}</div></Link>
                                    <div className="d-inline-block text-truncate w-shrunk">{item.title}</div>
                                </li>)
                            })
                        })}
                    </ul>
                </div>
                </div>
            </div>
            
            <div className="card border shadow-0 mb-3">
                <div id="headingFour" className="card-header">
                    <h6 className="mb-0 accordion_title"><a href="#" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded={openTab===4?"true":"false"} aria-controls="collapseFour" className={`d-block position-relative text-dark collapsible-link py-2 ${openTab===4 ? "" : "collapsed"}`} onClick={(e)=>{e.preventDefault(); setOpenTab(openTab===4?-1:4)}}>Part 04: Variables</a></h6>
                </div>
                <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" className={`collapse ${openTab===4 ? "show" : ""}`}>
                <div className="card-body">
                    <ul className="lectures_lists">
                    {unitFourLessons.map((lesson: CurriculumLesson,i) => {
                            const content: LessonContent[] = [...lesson.activities, ...lesson.videos].sort(
                                (a, b) => a.order - b.order
                            )

                            return content.map((item: LessonContent) => {
                                const iconClass = item.completed
                                    ? "bi-check-circle-fill text-success"
                                    : item.type === "video"
                                        ? "bi-camera-video"
                                        : "bi-question-circle"
                                return(
                                <li key={`${lesson.id}-${item.order}`}>
                                    <Link to={`/lesson/${lesson.unit}/${lesson.number}?item=${item.order}`}><div className="lectures_lists_title">  <i className={`bi ${iconClass}`}></i>{item.type==="video"?`Video 0${i+1}`:`Activity 0${i+1}`}</div></Link>
                                    <div className="d-inline-block text-truncate w-shrunk">{item.title}</div>
                                </li>)
                            })
                        })}
                    </ul>
                </div>
                </div>
            </div>

            <div className="card border shadow-0 mb-3">
                <div id="headingFive" className="card-header">
                    <h6 className="mb-0 accordion_title"><a href="#" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded={openTab===5?"true":"false"} aria-controls="collapseFive" className={`d-block position-relative text-dark collapsible-link py-2 ${openTab===5 ? "" : "collapsed"}`} onClick={(e)=>{e.preventDefault(); setOpenTab(openTab===5?-1:5)}}>Part 05: Challenges</a></h6>
                </div>
                <div id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionExample" className={`collapse ${openTab===5 ? "show" : ""}`}>
                <div className="card-body">
                    <ul className="lectures_lists">
                    {unitFiveLessons.map((lesson: CurriculumLesson,i) => {
                            const content: LessonContent[] = [...lesson.activities, ...lesson.videos].sort(
                                (a, b) => a.order - b.order
                            )

                            return content.map((item: LessonContent) => {
                                const iconClass = item.completed
                                    ? "bi-check-circle-fill text-success"
                                    : item.type === "video"
                                        ? "bi-camera-video"
                                        : "bi-question-circle"
                                return(
                                <li key={`${lesson.id}-${item.order}`}>
                                    <Link to={`/lesson/${lesson.unit}/${lesson.number}?item=${item.order}`}><div className="lectures_lists_title">  <i className={`bi ${iconClass}`}></i>{item.type==="video"?`Video 0${i+1}`:`Activity 0${i+1}`}</div></Link>
                                    <div className="d-inline-block text-truncate w-shrunk">{item.title}</div>
                                </li>)
                            })
                        })}
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
