export const About = () => {
  return (
    <div className='container-fluid py-5' id='about'>
      <div className='container py-5'>
        <div className='section-title position-relative text-center'>
          <h6 className='text-uppercase text-primary mb-3' style={{ letterSpacing: '3px' }}>
            About
          </h6>
          <h1 className='font-secondary display-4'>Groom & Bride</h1>
          <i className='far fa-heart text-dark'></i>
        </div>
        <div className='row m-0 mb-4 mb-md-0 pb-2 pb-md-0'>
          <div className='col-md-6 p-0 text-center text-md-right'>
            <div className='h-100 d-flex flex-column justify-content-center bg-secondary p-5'>
              <h3 className=''>The Groom</h3>
              <h3 className='font-secondary font-weight-normal text-muted mb-3'>
                <i className='fa fa-male text-primary pr-3'></i>Tuan Dung
              </h3>
              {/* <div className='position-relative'>
                <a className='btn btn-outline-primary btn-square mr-1' href='/#'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a className='btn btn-outline-primary btn-square mr-1' href='/#'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a className='btn btn-outline-primary btn-square mr-1' href='/#'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a className='btn btn-outline-primary btn-square' href='/#'>
                  <i className='fab fa-instagram'></i>
                </a>
              </div> */}
            </div>
          </div>
          <div className='col-md-6 p-0' style={{ minHeight: '400px' }}>
            <img
              alt=''
              className='position-absolute w-100 h-100'
              src='img/about-1.jpg'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className='row m-0'>
          <div className='col-md-6 p-0' style={{ minHeight: '400px' }}>
            <img
              alt=''
              className='position-absolute w-100 h-100'
              src='img/about-2.jpg'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='col-md-6 p-0 text-center text-md-left'>
            <div className='h-100 d-flex flex-column justify-content-center bg-secondary p-5'>
              <h3 className=''>The Bride</h3>
              <h3 className='font-secondary font-weight-normal text-muted mb-3'>
                <i className='fa fa-female text-primary pr-3'></i>Thanh Ha
              </h3>
              {/* <div className='position-relative'>
                <a className='btn btn-outline-primary btn-square mr-1' href='/#'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a className='btn btn-outline-primary btn-square mr-1' href='/#'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a className='btn btn-outline-primary btn-square mr-1' href='/#'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a className='btn btn-outline-primary btn-square' href='/#'>
                  <i className='fab fa-instagram'></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
