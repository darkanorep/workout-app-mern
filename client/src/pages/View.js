import {useEffect, useState} from 'react'

const View = ({workout}) => {

    const [singleWork, setSingleWork] = useState([])

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetch(`/api/workouts/${workout._id}`)
                .catch(error => {
                    console.log(error.message)
                })
            const json = await responseData.json()

            if (responseData.ok) {
                setSingleWork([json])
            }
            // console.log(singleWork)
        }
        getData()
    })

  return (
    <div>
        {singleWork.map((list) => (
            <ul key={list._id}>
                <li>{list.title}</li>
                <li>{list.reps}</li>
                <li>{list.load}</li>
            </ul>
        ))}
    </div>
  )
}

export default View