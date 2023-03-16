import axios from 'axios'
import { useEffect, useState } from 'react'

export const GuestList = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    onCall()
  }, [])

  const onCall = () => {
    axios({
      method: 'get',
      url: 'https://my-wedding-api.vercel.app/api/invitations',
    })
      .then(function (response) {
        setData(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading)
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='spinner-border text-primary' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    )

  return (
    <table className='table'>
      <thead className='thead-dark position-sticky' style={{ zIndex: 1000, top: -1, left: 0, right: 0 }}>
        <tr>
          <th className='position-sticky' style={{ top: 0 }} scope='col'>
            #
          </th>
          <th className='position-sticky' style={{ top: 0 }} scope='col'>
            Name
          </th>
          <th className='position-sticky' style={{ top: 0 }} scope='col'>
            Is Attending
          </th>
          <th className='position-sticky' style={{ top: 0 }} scope='col'>
            Guests
          </th>
          <th className='position-sticky' style={{ top: 0 }} scope='col'>
            Email
          </th>
          <th className='position-sticky' style={{ top: 0 }} scope='col'>
            Message
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          return (
            <tr key={item.id}>
              <th scope='row'>{item.id}</th>
              <td>{item.name}</td>
              <td>{item.isAttending === true ? 'Yes' : 'No'}</td>
              <td>{item.numOfGuests}</td>
              <td>{item.email}</td>
              <td>{item.theirMessage}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
