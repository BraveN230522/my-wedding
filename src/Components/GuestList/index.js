import axios from 'axios'
import { useEffect, useState } from 'react'

export const GuestList = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [seeAll, setSeeAll] = useState([])

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

  const handleSeeAll = (id) => {
    if (seeAll.includes(id))
      setSeeAll((prev) => {
        return prev.filter((item) => item !== id)
      })
    else setSeeAll((prev) => [...prev, id])
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
          <th style={{ maxWidth: 100 }} scope='col'>
            Message
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => {
          return (
            <tr key={item.id}>
              <th scope='row'>{index + 1}</th>
              <td>{item.name}</td>
              <td style={{ width: 140, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.isAttending === true ? 'Yes' : 'No'}
              </td>
              <td style={{ width: 30, overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.numOfGuests}</td>
              <td>{item.email}</td>
              <td
                onClick={() => handleSeeAll(item.id)}
                style={{
                  maxWidth: 300,
                  wordWrap: seeAll.includes(item.id) ? 'break-word' : undefined,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                className={seeAll.includes(item.id) ? '' : 'message'}
                title={item.theirMessage}
              >
                {item.theirMessage}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
