import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import InstructorNavbar from '../../../components/instructor-dashboard/instructor-navbar'
import Sidebar from '../../../components/instructor-dashboard/sidebar'
import FooterDark from '../../../components/footer/footer-dark'
import { useApi } from '../../../lib/useApi'



interface StudentList{
    img: string;
    first_name: string;
    last_name: string;
    percentage: number;
    date_joined: number;
    xp:number;
    school:{name:string} | null;
}

export default function InstructorStudents() {
    const [students,setStudents] = useState<StudentList[]|[]>([])
    const {makeRequest} = useApi()
    const [searchQuery,setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState("alphabetical")
    const filtered = [...students].filter((stu)=>`${stu.first_name} ${stu.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()))
    const schoolName = students[0]?.school?.name ?? ""
    const sorted = [...filtered].sort((a,b)=>{
        if(sortBy==="xp") return b.xp-a.xp
        if(sortBy ==="progress") return b.percentage - a.percentage
        if (sortBy === "date_joined") return new Date(b.date_joined).getTime() - new Date(a.date_joined).getTime()
        return a.first_name.localeCompare(b.first_name)
    })
    useEffect(()=>{
    makeRequest("get-all-students/")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setStudents(data)})
  },[])
  
   
  
    return (
    <>
        {/* <InstructorNavbar/> */}

        <section className="page-title" style={{ background: 'linear-gradient(135deg, var(--maincolor) 0%, var(--navcolor) 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-white">My Students</h1>
                            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)' }}>Track your class' progress through the Cyber Jungle.</p>
                            {schoolName && <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)' }}>{schoolName}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt-4">
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="d-none">
                        {/* <Sidebar/> */}
                    </div>	
                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            {/* <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Instructor Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Students List</li>
                                    </ol>
                                </nav>
                            </div> */}
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card border-0 shadow-sm rounded-3">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center justify-content-between w-100">
                                            <h4 className="mb-2 mb-sm-0">All Students</h4>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="row g-3 align-items-end mb-4">
                                            <div className="col-md-8">
                                                <label htmlFor="search" className="form-label fw-semibold">Search</label>
                                                <div className="position-relative">
                                                    <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                                                    <input id="search" className="form-control ps-5" type="search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Search student name" aria-label="Search"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="filter" className="form-label fw-semibold">Sort by</label>
                                                <select id="filter" name="filter" value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="form-select">
                                                    <option value="alphabetical">Alphabetical</option>
                                                    <option value="xp">XP</option>
                                                    <option value="progress">Progress</option>
                                                    <option value="date_joined">Date Joined</option>
                                                </select>
                                            </div>
                                        </div>
                    
                                        <div className="table-responsive border-0 rounded-3">
                                            <table className="table align-middle p-4 mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="border-0 rounded-start" style={{ backgroundColor: 'var(--navcolor)', color: '#ffffff' }}>Student Name</th>
                                                        <th scope="col" className="border-0" style={{ backgroundColor: 'var(--navcolor)', color: '#ffffff' }}>Progress</th>
                                                        <th scope="col" className="border-0" style={{ backgroundColor: 'var(--navcolor)', color: '#ffffff' }}>XP</th>
                                                        <th scope="col" className="border-0 rounded-end" style={{ backgroundColor: 'var(--navcolor)', color: '#ffffff' }}>Enrolled Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {sorted?.map((item:StudentList,index:number)=>( 
                                                        <tr key={index}>
                                                            <td key={index}>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <div className="w-15">
                                                                        <img src={item.img} className="img-fluid rounded-circle" alt=""/>
                                                                    </div>
                                                                    <div className="student-info">
                                                                        <h6 className="mb-0 fw-semibold table-responsive-title">	
                                                                            <Link to="#">{item.first_name}</Link>
                                                                        </h6>
                                                                        <div className="d-flex gap-2">
                                                                            <p className="mb-0 text-muted-2 me-1"><i></i>{item.last_name}</p>
                                                                        </div>
                                                    
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="progress-info">
                                                                    <h6 className="fw-semibold">{item.percentage}%</h6>
                                                                    <div className="d-flex w-30">
                                                                        <div className="progress w-100" role="progressbar" aria-label="Success striped example" aria-valuenow={item.percentage} aria-valuemin={0} aria-valuemax={100} style={{height: "8px"}}>
                                                                            <div className="progress-bar progress-bar-striped bg-green" style={{width: item.percentage}}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            {/* <td><span className="text-muted-2">{item.percentage}</span></td> */}
                                                            <td>
                                                            <span className="text-muted-2">{item.xp}</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted-2">{item.date_joined}</span>
                                                            </td>
                                                            
                                                            {/* <td>
                                                                <Link to="#" className="btn btn-sm btn-gray me-1 mb-0"data-bs-toggle="modal" data-bs-target="#messageModal"><i className="bi bi-chat-dots"></i></Link>
                                                                <Link to="#" className="btn btn-sm btn-light-red mb-0" data-bs-toggle="tooltip" data-bs-title="Block"><i className="bi bi-ban"></i></Link>
                                                            </td> */}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-3">
                                            <p className="mb-0 text-center text-sm-start text-muted">{`Showing ${filtered.length} of ${students.length} students`}</p>
                                            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                                                <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                                                    <li className="page-item mb-0"><Link className="page-link" to="#" tabIndex={-1}><i className="fas fa-angle-left"></i></Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">1</Link></li>
                                                    <li className="page-item mb-0 active"><Link className="page-link" to="#">2</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">3</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">4</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#"><i className="fas fa-angle-right"></i></Link></li>
                                                </ul>
                                            </nav>
                                        </div> */}
                                    </div>
                                </div>
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
