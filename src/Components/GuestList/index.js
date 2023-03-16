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
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Is Attending</th>
          <th scope='col'>Guests</th>
          <th scope='col'>Email</th>
          <th scope='col'>Message</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => {
          return (
            <tr key={item.id}>
              <th scope='row'>{index + 1}</th>
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
