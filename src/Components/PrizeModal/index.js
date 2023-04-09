export const PrizeModal = ({ giftName }) => {
  return (
    <div
      class='modal fade'
      id='exampleModal'
      tabindex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog modal-dialog-centered' role='document'>
        <div style={{ background: '#f4f1ec' }} class='modal-content'>
          <video
            muted
            loop
            autoplay='autoplay'
            data-src='img/gift.mp4'
            data-video-small='img/gift.mp4'
            data-video-medium='img/gift.mp4'
            data-video-large='img/gift.mp4'
            src='img/gift.mp4'
            __idm_id__='688131'
          ></video>
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
            class='modal-body'
          >
            <h2 style={{ textAlign: 'center' }}>
              Congratulations! <br /> You got a gift
            </h2>
            <p>{giftName}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }} class='modal-footer'>
            <button data-dismiss='modal' className='btn btn-primary font-weight-bold py-3 px-5'>
              <span className=' font-weight-bold '>Bring it to me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
