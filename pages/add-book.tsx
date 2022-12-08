import React from 'react'
import { AddBookForm, Layout } from '../components'
import { NextPage } from 'next'

const AddBook: NextPage = () => {
  return (
    <Layout>
      <AddBookForm />
    </Layout>
  )
}

export default AddBook
