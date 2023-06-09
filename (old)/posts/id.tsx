import React, { useRef } from "react"
import { randomUUID } from "crypto"
import Head from "next/head"
import NavBar from "../navbar"

type BlogPost = {
	"title": string
}

type BlogProps = {
	posts: Array<BlogPost>
}

export default function Blog({ posts } : BlogProps) {
	let count = useRef(0)
	
	return (
	  <>
	  <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" 
		        crossOrigin="anonymous" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
		        async>
				
		</script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossOrigin="anonymous"></link> 
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
			   crossOrigin="anonymous"
		/>

      </Head>
	  <main>
		
		<ul>
			{posts.map((post) => (
			<li key={count.current ++}>{post.title}</li>
			))}
		</ul>
	  </main>
	  </>
	)
}


export async function getStaticProps() {
	// Call an external API endpoint to get posts
	// const res = await fetch('https://.../posts')
	const posts = [{title: "Random"}]
  
	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
	  props: {
		posts,
	  },
	}
  }


  
  