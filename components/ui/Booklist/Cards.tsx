import React from 'react'
import { Book } from '../../../utils/types'
import text from '../../../utils/text.json'
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import { CiCircleRemove } from 'react-icons/ci'
import Link from 'next/link'

type CardsProps = {
  data: Book
}

// TODO: Potentially add book images?
// TODO: Change test and test2 into icons (favorite and delete)

export const Cards: React.FC<CardsProps> = ({ data }: CardsProps) => {
  return (
    <Link href=''>
      <div className='w-72 h-72 bg-sky-100 rounded-xl'>
        <div className='flex flex-row px-4 py-2 justify-between'>
          <BsHeartFill />
          <CiCircleRemove />
        </div>
        <div className='pl-4'>
          <h3 className='text-2xl font-semibold pt-6'>{data.title}</h3>
          <div>type of book: </div>
          <div className='pt-6'>
            {text.booklist_nb_pages}: {data.pages}
          </div>
          <div>{text.booklist_last_left}: </div>
          <div className='pt-16'>
            {text.booklist_status}:
            {data.finished === true ? ' completed' : ' not completed'}
          </div>
        </div>
      </div>
    </Link>
  )
}
