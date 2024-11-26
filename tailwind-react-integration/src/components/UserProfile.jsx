function UserProfile() {
    return (
      // sm:p-4
      <div className="sm:p-4  bg-gray-100 md:p-8   md:max-w-sm sm:max-w-xs mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"> 
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto  hover:scale-110 transition-transform duration-300 ease-in-out" />
        <h1 className="md:text-xl text-blue-800 my-4 sm:text-lg hover:text-blue-500 
cursor-pointer ">John Doe</h1>
        <p className="text-gray-600 md:text-base sm:text-sm ">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;