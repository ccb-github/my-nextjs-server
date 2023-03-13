import { DefaultTags } from '#/ui/DefaultTags';
import Script from 'next/script';
import CommonHead from './CommonHead';
//integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>Next.js content manage system</title>
      <meta
        name="description"
        content="A simple nextjs 13 app(With beta next.js 13 app dir)"
      />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"  
              async/>
      
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" 
              async/>
      
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" async defer/> 
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" rel="stylesheet"  
            precedence="default" crossOrigin="anonymous" />
      
      

    </>
  );
    //bootstrap script integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
  //integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
}
