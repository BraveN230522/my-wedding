import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const STATUS = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
}
const TIMEOUT = 3000
const MAX_LENGTH = 500
const MAX_LENGTH_NAME = 28
const MAX_LENGTH_EMAIL = 50

export const RSVP = () => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState()
  const {
    formState: { isDirty },
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  })

  useEffect(() => {
    if (isDirty) setStatus(undefined)
  }, [isDirty])

  const onSubmit = (values) => {
    setLoading(true)

    const message = values.message.slice(0, MAX_LENGTH).trim()
    const name = values.name.slice(0, MAX_LENGTH_NAME).trim()
    const email = values.email.slice(0, MAX_LENGTH_EMAIL).trim()

    setTimeout(() => {
      axios({
        method: 'post',
        url: 'https://my-wedding-api.vercel.app/api/invitations',
        data: {
          name: name,
          email: email,
          numOfGuests: values.numOfGuests,
          isAttending: values.confirm === 'Yes',
          theirMessage: message,
        },
      })
        .then(function (response) {
          setStatus(STATUS.SUCCESS)
          reset({
            name: '',
            email: '',
            numOfGuests: '',
            confirm: '',
            message: '',
          })
        })
        .catch(function (error) {
          setStatus(STATUS.FAILED)
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }, TIMEOUT)
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
                      id='name'
                      type='text'
                      className='form-control bg-secondary border-0 py-4 px-3'
                      placeholder='Your Name'
                      required='required'
                      maxLength={MAX_LENGTH_NAME}
                    />
                  </div>
                  <div className='form-group col-sm-6'>
                    <input
                      {...register('email')}
                      type='email'
                      className='form-control bg-secondary border-0 py-4 px-3'
                      placeholder='Your Email'
                      required='required'
                      maxLength={MAX_LENGTH_EMAIL}
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
                    maxLength={MAX_LENGTH}
                  ></textarea>
                </div>
                <button className='btn btn-primary font-weight-bold py-3 px-5' type='submit' disabled={loading}>
                  <span className=' font-weight-bold '>Submit</span>
                  {loading && (
                    <div
                      className='spinner-border text-light position-absolute'
                      style={{ left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto' }}
                      role='status'
                    />
                  )}
                </button>
              </form>
              {status === STATUS.SUCCESS && <p className='mt-2 text-primary'>Thanks for being awesome!</p>}
              {status === STATUS.FAILED && <p className='mt-2 text-danger'>Please try to resend it again!</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
