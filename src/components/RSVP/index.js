import axios from 'axios'
import { useForm } from 'react-hook-form'

export const RSVP = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  })
  const onSubmit = (values) => {
    axios({
      method: 'post',
      headers: { 'X-Api-Key': 'CaOs4SsUE6LNQbdGukuqMrZdpwiGx!@HIkzCg@kYEzuuycelAcBuVIRariThJ9-9' },
      url: 'https://sheet.best/api/sheets/6a56d6a1-3859-4dd0-a19c-de8e87f63f3f',
      data: {
        Name: values.name,
        Email: values.email,
        Guests: values.numOfGuests,
        Confirm: values.confirm,
      },
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log({ values })
  }
  return (
    <div className='container-fluid py-5' id='rsvp'>
      <div className='container py-5'>
        <div className='section-title position-relative text-center'>
          <h6 className='text-uppercase text-primary mb-3' style={{ letterSpacing: '3px' }}>
            RSVP
          </h6>
          <h1 className='font-secondary display-4'>Join Our Party</h1>
          <i className='far fa-heart text-dark'></i>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='text-center'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-row'>
                  <div className='form-group col-sm-6'>
                    <input
                      {...register('name')}
                      type='text'
                      className='form-control bg-secondary border-0 py-4 px-3'
                      placeholder='Your Name'
                      required='required'
                    />
                  </div>
                  <div className='form-group col-sm-6'>
                    <input
                      {...register('email')}
                      type='email'
                      className='form-control bg-secondary border-0 py-4 px-3'
                      placeholder='Your Email'
                      required='required'
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-sm-6'>
                    <select
                      {...register('numOfGuests')}
                      className='form-control bg-secondary border-0'
                      style={{ height: '52px' }}
                      required
                    >
                      <option value='' disabled selected hidden>
                        Number of Guest
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className='form-group col-sm-6'>
                    <select
                      {...register('confirm')}
                      className='form-control bg-secondary border-0'
                      style={{ height: '52px' }}
                      required
                    >
                      <option
                        style={{ color: 'gray', opacity: 0.7, display: 'none' }}
                        value=''
                        disabled
                        selected
                        hidden
                      >
                        I'm Attending
                      </option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    {...register('message')}
                    className='form-control bg-secondary border-0 py-2 px-3'
                    rows='5'
                    placeholder='Message'
                    required='required'
                  ></textarea>
                </div>
                <div>
                  <button className='btn btn-primary font-weight-bold py-3 px-5' type='submit'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
