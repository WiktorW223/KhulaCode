import CountUp from 'react-countup';

export default function CounterOne() {
  return (
    <section className="pt-0">
        <div className="container">
            
            <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="card rounded-4 bg-light-green p-4">
                        
                        <div className="row justify-content-center g-4">
                        
                            <div className="col-xl-3 col-lg-3 col-md-4">	
                                <div className="card bg-transparent rounded-3 py-4">
                                    <div className="text-center">
                                        <h2 className="text-green display-3 mb-0"><CountUp className="counts" end={57}/><span className="text-green ms-1">k</span></h2>
                                        <p className="fw-semibold text-dark m-0">Total Students</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-3 col-md-4">	
                                <div className="card bg-transparent rounded-3 py-4">
                                    <div className="text-center">
                                        <h2 className="text-green display-3 mb-0"><CountUp className="counts" end={214}/><span className="text-green ms-1">k</span></h2>
                                        <p className="fw-semibold text-dark m-0">Active Courses</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-3 col-md-4">	
                                <div className="card bg-transparent rounded-3 py-4">
                                    <div className="text-center">
                                        <h2 className="text-green display-3 mb-0"><CountUp className="counts" end={78}/><span className="text-green ms-1">k</span></h2>
                                        <p className="fw-semibold text-dark m-0">Total Instructors</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-3 col-md-4">	
                                <div className="card bg-transparent rounded-3 py-4">
                                    <div className="text-center">
                                        <h2 className="text-green display-3 mb-0"><CountUp className="counts" end={25}/></h2>
                                        <p className="fw-semibold text-dark m-0">Languages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
