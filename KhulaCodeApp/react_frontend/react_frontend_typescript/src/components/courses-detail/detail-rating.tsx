
export default function DetailRating({border}:{border:boolean}) {
  return (
    <>
        <div className={`rating-overview ${border ? 'border' : ''}`}>
            <div className="rating-overview-box">
                <span className="rating-overview-box-total text-dark">4.2</span>
                <span className="rating-overview-box-percent">out of 5.0</span>
                <div className="star-rating d-flex align-items-center justify-content-center gap-1 text-mid" data-rating="5">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
            </div>

            <div className="rating-bars">
                <div className="rating-bars-item">
                    <span className="rating-bars-name">5 Star</span>
                    <span className="rating-bars-inner">
                        <span className="rating-bars-rating high" data-rating="4.7">
                            <span className="rating-bars-rating-inner" style={{width: "85%"}}></span>
                        </span>
                        <strong>85%</strong>
                    </span>
                </div>
                <div className="rating-bars-item">
                    <span className="rating-bars-name">4 Star</span>
                    <span className="rating-bars-inner">
                        <span className="rating-bars-rating good" data-rating="3.9">
                            <span className="rating-bars-rating-inner" style={{width: "75%"}}></span>
                        </span>
                        <strong>75%</strong>
                    </span>
                </div>
                <div className="rating-bars-item">
                    <span className="rating-bars-name">3 Star</span>
                    <span className="rating-bars-inner">
                        <span className="rating-bars-rating mid" data-rating="3.2">
                            <span className="rating-bars-rating-inner" style={{width: "52.2%"}}></span>
                        </span>
                        <strong>53%</strong>
                    </span>
                </div>
                <div className="rating-bars-item">
                    <span className="rating-bars-name">1 Star</span>
                    <span className="rating-bars-inner">
                        <span className="rating-bars-rating poor" data-rating="2.0">
                            <span className="rating-bars-rating-inner" style={{width: "20%"}}></span>
                        </span>
                        <strong>20%</strong>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}
