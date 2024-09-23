import React  from 'react'
import CardBook from './CardBook'
import FOTO from '../../assets/img/livroA.jpg'


function BooksMenu() {

  const data = [
    {
      id:0,
      image: FOTO,
      title: "Título do Card",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:1,
      image: FOTO,
      title: "AAAAAA",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:2,
      image: FOTO,
      title: "BBBBBB",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:3,
      image: FOTO,
      title: "CCCCCC",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:4,
      image: FOTO,
      title: "Título do Card",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:5,
      image: FOTO,
      title: "AAAAAA",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:6,
      image: FOTO,
      title: "BBBBBB",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:7,
      image: FOTO,
      title: "CCCCCC",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:8,
      image: FOTO,
      title: "Título do Card",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:9,
      image: FOTO,
      title: "AAAAAA",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:10,
      image: FOTO,
      title: "BBBBBB",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
      id:11,
      image: FOTO,
      title: "CCCCCC",
       descri: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
      {
        data.map((item) => (
          <CardBook key={item.id} image={item.image} title={item.title} descri={item.descri} />
        ))
      }
    </div>
  )
}

export default BooksMenu