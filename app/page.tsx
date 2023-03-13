import LoginForm from '#/ui/LoginForm';
import MyString from "#/lib/stringFactory"
import Carousel from '#/ui/Carousel'


export default function Page() { 

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Welcome, log in first</h1>
      <LoginForm/>  
      <Carousel/>
    </div>
  );
}

