import { useState } from 'react'
import InstructorNavbar from '../../../components/instructor-dashboard/instructor-navbar'
import FooterDark from '../../../components/footer/footer-dark';

export default function InstructorCreateCourse() {
    const [activeTab, setActiveTab] = useState<number>(1)
    
    type ActivityOption={
        isCorrect:boolean
        text: string
        id:string
    }

    type VideoItem ={
        title:string
        id:string
        video_url:string
        type:"video"
        order:number
    }
    
    
    type ActivityItem={
        id: string
        title:string
        question:string 
        type:"activity"
        order:number
        options:ActivityOption[]

    }
    type ContentItem=ActivityItem|VideoItem
    const [content, setContent] = useState<ContentItem[]>([])
    const [msg,setMsg] = useState("")

    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const lessonData = {
            title: formData.get("title")?.toString()??"",
            description: formData.get("description")?.toString()??"",
            unit: Number(formData.get("unit")??0),
            number: Number(formData.get("lesson_number")??0),
            
        }
        const finalData = content.map((item, i)=>{
        if(item.type==="activity")
        {
            const choices = item.options.map((choice,choiceIndex)=>({
                text:choice.text,
                is_correct:choice.isCorrect,
                order:choiceIndex+1,
            }
        ))
        return{
            title:`${lessonData.title} Activity`,
            question:item.question,
            order:i+1,
            choices:choices,
            type:"activity",

        }}
        return{
            title:lessonData.title,
            video_url:item.video_url,
            order:i+1,
            type:"video",

            
        }
    
    
    
    }
    )
        
        
        const form = e.currentTarget
        

        const ultimateData = {...lessonData,content:finalData}

        try{
            const res = await fetch("http://127.0.0.1:8000/KhulaCode/make-lesson/",
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify(ultimateData)
                })
            if(!res.ok)
            {
                console.log("error in backend")
                return
            }
            console.log("success")
            setMsg("success!")
        }
        catch(error){
            console.log("network error")
            setMsg("error")
        }
        
        }
  return (
    <>
        <InstructorNavbar/>   

        <section className="bg-gredient py-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                        <div className="text-center">
                            <h1 className="text-light">Add New Course</h1>
                            <p className="fs-6 text-light">Just fill the form carefully and create your new courses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light py-5">
            <div className="container">			
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-10 col-lg-12">
                        <div className="card shadow-sm">
                            <div className="card-body p-4 p-lg-5">
                                <div className="step-indicator mb-4">
                                    <div className={activeTab >= 1 ? 'active' : ''}><span>1</span><p>Info</p></div>
                                    <div className={activeTab >= 2 ? 'active' : ''}><span>2</span><p>Curriculum</p></div>
                                    <div className={activeTab >= 3 ? 'active' : ''}><span>3</span><p>Pricing</p></div>
                                    <div className={activeTab >= 4 ? 'active' : ''}><span>4</span><p>Publish</p></div>
                                </div>

                                <form id="multiStepForm" onSubmit={handleSubmit}>
                                    <div className={`step ${activeTab === 1 ? 'active' : ''}`}>
                                        
                                    <button type="button" onClick={()=>setContent([
                                        ...content,
                                        {type:"video",
                                            title:"",
                                            video_url:"",
                                        order:0,
                                        id:crypto.randomUUID()}
                                        ]
                                        )}>
                                            Add Video</button> 
                                        
                                        <button type="button" onClick={()=>setContent([
                                        ...content,
                                        {type:"activity",
                                            title:"",
                                            question:"",
                                            id:crypto.randomUUID(),
                                        order:0,
                                        options: [{text:"",isCorrect:false,id:crypto.randomUUID()},{text:"",isCorrect:false,id:crypto.randomUUID()},{text:"",isCorrect:false,id:crypto.randomUUID()}]},
                                        
                                        ]
                                        )}>
                                            Add Activity</button>
                                        
                                        <div className="mb-4">
                                            <h5 className="text-darks mb-0 lh-base">Basic Information</h5>
                                            <p className="text-muted">Fill basic information regarding your course.</p>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">Lesson Title</label>
                                            <input name="title" type="text" className="form-control" placeholder="Enter course title"/>
                                            <small className="text-muted">Write lesson title.</small>
                                        </div>
                                        
                                        {/* <div className="form-group mb-3">
                                            <label className="form-label">Courses category</label>
                                            <select className="form-control" id="c-category">
                                                <option value="webdesign">Web Design</option>
                                                <option value="graphicdesign">Graphic Design</option>
                                                <option value="finance">Finance</option>
                                                <option value="itsoftware">IT & Software</option>
                                                <option value="ecommerce">Ecommerce</option>
                                                <option value="bootstrap">Bootstrap</option>
                                            </select>
                                        </div> */}
                                        <div className="form-group mb-3">
                                            <label className="form-label">Unit Number</label>
                                            <input name="unit" type="number" className="form-control" placeholder="Enter unit number"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label className="form-label">Lesson Number (order)</label>
                                            <input name="lesson_number" type="number" className="form-control" placeholder="Enter number"/>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">Lesson Description</label>
                                            <textarea name="description" className="form-control" rows={3} placeholder="Enter description"></textarea>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <h5 className="text-darks mb-0 lh-base">Course Media</h5>
                                            <p className="text-muted">Upload a professional thumbnail, a preview video, and any additional resources.</p>
                                        </div>

                                        
                                        {content.map((item,i)=>
                                        (
                                        item.type==="video"&&(
                                           <div key={item.id}>
                                            <label htmlFor='video-title'>{`Video title ${i+1}`} </label>
                                            <input id="video-title" placeholder = {`Video title ${i+1}`} value ={item.title} onChange ={(e)=>
                                            {
                                                const updatedVideo:VideoItem = {
                                                    ...item,
                                                    title:e.target.value
                                                }
                                                const list = [...content]
                                                list[i] = updatedVideo
                                                setContent(list)
                                            }
                                                } type="text" />
                                            <label htmlFor='video'>{`video url ${i+1}`} </label>
                                            <input id="video" style={{width:"650px"}}placeholder = {`video url ${i+1}`}  onChange ={(e)=>
                                            {
                                                const updatedVideo:VideoItem = {
                                                    ...item,
                                                    video_url:"http://127.0.0.1:8000/media/videos/"+e.target.value
                                                }
                                                const list = [...content]
                                                list[i] = updatedVideo
                                                setContent(list)
                                            }
                                                } type="text" />  
                                        </div>    
                                        )||
                                        item.type==="activity"&&(
                                            <div key={item.id}>
                                            <label htmlFor='activity-title'>{`Activity title ${i+1}`} </label>
                                            <input id="activity-title" placeholder ={`Activity title ${i+1}`} value ={item.title} onChange ={(e)=>
                                                {
                                                    const list = [...content]
                                                    const updatedActivity:ActivityItem={
                                                        ...item,
                                                        title:e.target.value
                                                    }
                                                    list[i] = updatedActivity
                                                    setContent(list)
                                                }
                                                    } type="text" />
                                            <label htmlFor='question'>{`Question ${i+1}`} </label>
                                            <textarea id="question"placeholder ={`Question ${i+1}`} value ={item.question} rows = {5} onChange ={(e)=>
                                                {
                                                    const updatedActivity:ActivityItem={
                                                        ...item,
                                                        question:e.target.value
                                                    }
                                                    const list = [...content]
                                                    list[i] = updatedActivity
                                                    setContent(list)
                                                }
                                                    }  />
                                            
                                        {item.options.map((option,optionIndex)=>
                                        (
                                            <div key={optionIndex}>
                                            <label htmlFor='option'>{`Option ${optionIndex+1}`}</label>
                                            <input id="option" placeholder ={`Option ${optionIndex+1}`} value ={option.text} onChange ={(e)=>
                                                {
                                                    const updatedOptions:ActivityOption[]= item.options.map((currentOption,currentIndex)=>
                                                        currentIndex===optionIndex
                                                        ?{...currentOption,text:e.target.value}:currentOption
                                                )
                                                    
                                                    const list = [...content]
                                                    list[i]={...item,options:updatedOptions}
                                                    setContent(list)
                                                }
                                                    } type="text" />
                                            
                                            <input type='checkbox' 
                                            onChange={()=>{
                                                
                                                const updatedOptions = item.options.map((currentOption,currentIndex)=>
                                                    currentIndex===optionIndex?{...currentOption,isCorrect:!currentOption.isCorrect}:currentOption
                                            
                                            )
                                                
                                                const list = [...content]
                                                list[i]={...item,options:updatedOptions}
                                                setContent(list)
                                            }}
                                            />
                                            
                                            
                                            </div>
                                        
                                        )
                                        )}
                                        
                                        
                                        </div>
                                        )))}



                                            

                                        
                                        
                                        {/* <div className="mb-4">
                                            <label className="form-label">Video Thumbnail 1 <span className="text-danger">*</span></label>
                                            <input name="thumbnail" className='form-control' type='text'/> */}
                                            {/* <div className="border rounded d-flex align-items-center justify-content-between p-3">
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-image fs-4 text-primary me-3"></i>
                                                    <input type="file" id="thumbnailInput" className="form-control" onChange={handleThumbnailChange} accept="image/*"/>
                                                </div>
                                                {preview && (
                                                    <img id="thumbnailPreview" src={preview} className="img-thumbnail ms-3" style={{width:'100px', }} alt="Preview"/>
                                                )}
                                            </div>
                                            <small className="text-muted d-block mt-2">Recommended: 800x600px | JPG/PNG</small> */}
                                        {/* </div>

                                        <div className="mb-4">
                                            <label className="form-label">Video URL 1 </label>
                                            <input name="video_url" className="form-control" type='text'/> */}
                                            {/* <div className="border rounded d-flex align-items-center justify-content-between p-3"> */}
                                                {/* <div className="d-flex align-items-center">
                                                    <i className="bi bi-image fs-4 text-primary me-3"></i> */}
                                                    {/* <input type="file" id="thumbnailInput" className="form-control" onChange={handleThumbnailChange2} accept="image/*"/>
                                                </div>
                                                {preview2 && (
                                                    <img id="thumbnailPreview" src={preview2} className="img-thumbnail ms-3" style={{width:'100px', }} alt="Preview"/>
                                                )}
                                            </div> */}
                                            {/* <small className="text-muted d-block mt-2">Format: MP4/WebM | Max: 100MB</small> */}
                                        </div>

                                        {/* <div className="mb-4">
                                            <label className="form-label">Activity Question 1</label>
                                            <input name="video_url" className="form-control" type='text'/>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label className="form-label">Activity 1 Option 1</label>
                                            <input name="option" className="form-control" type='text'/>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Activity 1 Option 2</label>
                                            <input name="option" className="form-control" type='text'/>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Activity 1 Option 3</label>
                                            <input name="option" className="form-control" type='text'/>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label className="form-label">Activity Question 2</label>
                                            <input name="video_url" className="form-control" type='text'/>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label className="form-label">Activity 2 Option 1</label>
                                            <input name="option" className="form-control" type='text'/>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Activity 2 Option 2</label>
                                            <input name="option" className="form-control" type='text'/>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Activity 2 Option 3</label>
                                            <input name="option" className="form-control" type='text'/>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Activity Question 3 </label>
                                            <input name="video_url" className="form-control" type='text'/>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label className="form-label">Activity 3 Option 1</label>
                                            <input name="option" className="form-control" type='text'/>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Activity 3 Option 2</label>
                                            <input name="option" className="form-control" type='text'/>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Activity 3 Option 3</label>
                                            <input name="option" className="form-control" type='text'/>
                                        </div> */}


                                       
                                        {/* <div className="mb-4">
                                            <label className="form-label">Course Resources</label>
                                            <div className="border rounded d-flex align-items-center justify-content-between p-3">
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-image fs-4 text-primary me-3"></i>
                                                    <input type="file" id="thumbnailInput" className="form-control" onChange={handleThumbnailChange3} accept="image/*"/>
                                                </div>
                                                {preview3 && (
                                                    <img id="thumbnailPreview" src={preview3} className="img-thumbnail ms-3" style={{width:'100px', }} alt="Preview"/>
                                                )}
                                            </div>
                                            <small className="text-muted d-block mt-2">Optional: PDF, ZIP, or DOCX | Max 5 files</small>
                                        </div> */}
                                        
                                        <button type="submit">Submit</button>
                                        <p>{msg}</p>
                                        
                                    {/* </div> */}
                                    
                                    <div className={`step ${activeTab === 2 ? 'active' : ''}`}>
                                        <div className="mb-4">
                                            <h5 className="lh-base m-0">Course Curriculum</h5>
                                            <p className="text-muted">Add course sections and lessons below. You can add as many as needed.</p>
                                        </div>

                                        <div id="curriculumContainer">
                                            <div className="section border p-3 rounded mb-4">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h6 className="mb-0 text-dark">Lesson Title</h6>
                                                <button type="button" className="btn btn-sm btn-red remove-section rounded-2">Remove Section</button>
                                                </div>

                                                <div className="mb-3">
                                                <label className="form-label">Lesson Title</label>
                                                <input type="text" className="form-control" placeholder="e.g., Getting Started"/>
                                                </div>

                                                <div className="lessons">
                                                <div className="lesson mb-3">
                                                    <label className="form-label">Lecture Title</label>
                                                    <input type="text" className="form-control mb-2" placeholder="e.g., Introduction"/>
                                                    <textarea className="form-control" rows={2} placeholder="Lecture description..."></textarea>
                                                </div>
                                                </div>

                                                <button type="button" className="btn btn-sm btn-light-main add-lesson rounded-2">+ Add Lecture</button>
                                            </div>
                                        </div>

                                        <button type="button" className="btn btn-outline-main rounded-2" id="addSection">+ Add Lesson</button>
                                    </div>

                                    <div className={`step ${activeTab === 3 ? 'active' : ''}`}>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">Is this as a free course?</label>
                                            <div className="form-check">
                                                <input id="freecpurse" className="form-check-input" name="freecpurse" type="checkbox"/>
                                                <label htmlFor="freecpurse" className="form-check-label text-muted-2">Check if this is a free course.</label>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">Course Price ($)</label>
                                            <input type="number" className="form-control" placeholder="e.g., 99"/>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">This course has a discount</label>
                                            <div className="form-check">
                                                <input id="coursediscount" className="form-check-input" name="coursediscount" type="checkbox"/>
                                                <label htmlFor="coursediscount" className="form-check-label text-muted-2">Check if this course has discount.</label>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">Discount Price ($)</label>
                                            <input type="number" className="form-control" placeholder="e.g., 99"/>
                                            <span className="text-muted text-mid">This course has <i className="fs-semibold text-green">10.5%</i> discount.</span>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">Discount Expiry Period</label>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="form-check">
                                                    <input id="lifetime" className="form-check-input" name="expireperiod" type="radio"/>
                                                    <label htmlFor="lifetime" className="form-check-label text-muted-2">Lifetime</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="limitedtime" className="form-check-input" name="expireperiod" type="radio" defaultChecked/>
                                                    <label htmlFor="limitedtime" className="form-check-label text-muted-2">Limited Period</label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">Number of Days</label>
                                            <input type="number" className="form-control" placeholder="e.g., 20"/>
                                        </div>
                                    </div>

                                    <div className={`step ${activeTab === 4 ? 'active' : ''}`}>
                                        <div className="form-group mb-3">
                                            <label className="form-label">SEO Meta Title</label>
                                            <input type="text" className="form-control" placeholder="e.g., Advance Java Script"/>
                                            <span className="text-muted text-mid">Use max 65 characters only.</span>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">SEO Description</label>
                                            <input type="number" className="form-control" placeholder="e.g., Meta Description"/>
                                            <span className="text-muted text-mid">Use max 150 characters only.</span>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">Course Tags</label>
                                            <input type="number" className="form-control" placeholder="e.g., Design, Figma, Java"/>
                                            <span className="text-muted text-mid">Use tags with commas.</span>
                                        </div>
                                        
                                        <div className="form-group mb-3">
                                            <label className="form-label">Visibility</label>
                                            <select className="form-control" id="visibility">
                                                <option value="">&nbsp;</option>
                                                <option value="public">Public</option>
                                                <option value="private">Private</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mt-4">
                                        <button type="button" className="btn btn-gray px-4" id="prevBtn" onClick={()=>setActiveTab(activeTab > 1 ? activeTab - 1 : 1)}>Previous</button>
                                        <button type="button" className="btn btn-main px-4" id="nextBtn" onClick={()=>setActiveTab(activeTab < 4 ? activeTab + 1 : 4)}>Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>						
                    </div>	
                </div>
            </div>
        </section>
        <FooterDark/>
    </>
  )
}
