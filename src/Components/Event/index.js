export const Event = () => {
  return (
    <div className='container-fluid py-5' id='event'>
      <div className='container py-5'>
        <div className='section-title position-relative text-center'>
          <h6 className='text-uppercase text-primary mb-3' style={{ letterSpacing: '3px' }}>
            Event
          </h6>
          <h1 className='font-secondary display-4'>Our Wedding Event</h1>
          <i className='far fa-heart text-dark'></i>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center'>
            <h5 className='font-weight-normal text-muted mb-3 pb-3'>
              Mipec Palace Tay Son <br /> April 23 2023
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 border-right border-primary'>
            <div className='text-center text-md-right mr-md-3 mb-4 mb-md-0'>
              <h5
                class='font-secondary  mb-n2'
                style={{ position: 'absolute', zIndex: 1, right: '45%', top: '10%', color: '#75587f' }}
              >
                D <br /> <span class='text-white'>&amp;</span>
                <br /> H
              </h5>
              <img className='img-fluid mb-4' src='img/event-1.jpg' alt='' />
              <h4 className='mb-3'>The Reception</h4>
              <p className='mb-2'>4th floor, 229 Tay Son, Dong Da, Ha Noi</p>
              <p className='mb-0'>10:30 - 11:30</p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='text-center text-md-left ml-md-3'>
              <img className='img-fluid mb-4' src='img/event-2.jpg' alt='' />
              <h4 className='mb-3'>Wedding Party</h4>
              <p className='mb-2'>4th floor, 229 Tay Son, Dong Da, Ha Noi</p>
              <p className='mb-0'>12:00 - 14:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
