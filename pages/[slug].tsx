import React from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

const Slug = () => {
  return (
    <div>[slug]</div>
  )
}

export default Slug

export const getStaticPaths: GetStaticPaths = async () => {
  let path = 'hello';
  return {
    paths: [
      { params: {slug: path}}
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props:
    {
    }
  }
};