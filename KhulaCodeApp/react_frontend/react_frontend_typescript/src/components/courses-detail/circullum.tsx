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
    order:number,
    message:string
}


export default function Circullum({border,refreshKey, unitParam, numberParam, lessonIndex}:{border:boolean,refreshKey?:boolean,unitParam?:number, numberParam?:number,lessonIndex?:number}) {
    const {makeRequest} = useApi()
    const [lessons,setLessons] = useState<CurriculumLesson[]>([])
    const [lessonData,setLessonData] = useState<mostRecent>()

    

  

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
                }
                setLessonData(data)
        }
        getRecent()
    }
    ,[refreshKey])

    
    
    
    const units = ["Introduction","Sequencing","Decisions","Loops","Variables","Challenges"]
  
  
  
  
    

  

    
    // aria-expanded={openTab===index?"true":"false"} aria-controls={`collapse${index}`}
    // ${openTab===index ? "" : "collapsed"}`} onClick={(e)=>{e.preventDefault(); if(locked) return; setOpenTab(openTab===index?-1:index)}}
    
    return(
    <div className={`edu_wraper ${border ? 'border' : ''}`}>
        <h4 className="edu_title">Course Curriculum</h4>
        <div id="accordionExample" className="accordion circullum">

            
    {units.map((name,index)=>{
        const completed = lessonData?.message==="all lessons completed"
        const prevUnit = lessons.filter((lesson=>lesson.unit===index-1))
        const prevUnitDone = prevUnit.every(l=>l.completed)
        const locked = (index!=0)&&(!completed)&&((lessonData?.unit??0)<index)&&(!prevUnitDone)
        const icon = completed?"bi-check-circle-fill text-success":locked?"bi-lock-fill":""
        const msg = completed?"":locked?`Finish Unit ${index-1} to unlock`:""
        
        return(
        <div key ={index} style={{cursor:locked?"not-allowed":"pointer"}}className="card border shadow-0 mb-3">
                <div id={`heading${index}`} className="card-header">
                    <h6 className="mb-0 accordion_title"><a style={{opacity:locked?0.5:1,pointerEvents: locked?"none":"auto"}} aria-expanded={lessonData?.unit === index ? "true" : "false"} href="#" data-bs-target={`#collapse${index}`} data-bs-toggle="collapse"  className={`d-block position-relative text-dark collapsible-link py-2 ${locked ? "locked" : ""} ${lessonData?.unit===index?"":"collapsed"}` }>{`Part 0${index}: ${name}`}<i className={`bi ${icon}`}></i></a></h6>
                    {msg&&<p style={{fontStyle:"italic"}}>{msg}</p>}
                </div>
                <div id={`collapse${index}`}   aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample" className={`collapse ${lessonData?.unit===index ? "show" : ""}`}>
                <div className="card-body">
                    <ul className="lectures_lists">
        {lessons.filter((lesson)=>lesson.unit==index).map((lesson: CurriculumLesson,i) => {
        const content: LessonContent[] = [...lesson.activities, ...lesson.videos].sort(
            (a, b) => a.order - b.order
        )

        return content.map((item: LessonContent,numberInd) => {
            const isCurrent = (unitParam===index)&&(lesson.number===numberParam)&&(numberInd===lessonIndex)

            const iconClass = item.completed
                ? "bi-check-circle-fill text-success"
                : item.type === "video"
                    ? "bi-camera-video"
                    : "bi-question-circle"

            return (
                <li style={isCurrent ? { backgroundColor: "var(--graycolor)", fontWeight: 500, borderRadius: "10px", marginInline: "8px", paddingInline: "14px", width: "auto" } : undefined} key={`${lesson.id}-${item.order}`}>
                    <Link to={`/lesson/${index}/${lesson.number}?item=${item.order}`}><div className="lectures_lists_title">  <i className={`bi ${iconClass}`}></i>{i>=9?item.type==="video"?`Video ${i+1}`:`Activity ${i+1}`:item.type==="video"?`Video 0${i+1}`:`Activity 0${i+1}`}</div></Link>  {/*Video/Activity ${item.order} */}
                    <div className="d-inline-block text-truncate w-shrunk">{item.title}</div>
                </li>
            )
            })
            })}
                    </ul>
                </div>
                </div>
            </div>
            
    )}

    
        
            
        )}

    
        
        </div>
    </div>
  




)
}
