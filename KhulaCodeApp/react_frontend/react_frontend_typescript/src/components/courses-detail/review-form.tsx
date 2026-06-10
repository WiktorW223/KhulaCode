
export default function ReviewForm({border}:{border:boolean}) {
  return (
    <>
        <div className={`edu_wraper ${border ? 'border' : ''}`}>
            <h4 className="edu_title">Submit Reviews</h4>
            <div className="review-form-box form-submit">
                <form>
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label className="text-mid mb-2">Name</label>
                                <input className="form-control" type="text" placeholder="Your Name"/>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label className="text-mid mb-2">Email</label>
                                <input className="form-control" type="email" placeholder="Your Email"/>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="text-mid mb-2">Review</label>
                                <textarea className="form-control ht-140" placeholder="Review"></textarea>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <button type="submit" className="btn btn-main px-5">Submit Review</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
