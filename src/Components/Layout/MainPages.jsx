import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Asidebar from "./Asidebar.jsx";
function MainPages() {
  return (
    <>
      {/* Parent div */}
      <div
        className=" 
           
          w-full
          min-h-screen
          p-1
          flex
          flex-col-reverse
          md:flex-row
          justify-center
          items-center
          gap-1
           bg-white/5
           backdrop-blur-5xl
          dark:bg-zinc-800/30
          text-black
           dark:text-white
            transition-colors
             duration-300
             backdrop-filter
          "
      >
        {/* Asidbar div  */}
        <div
          className="
                
                w-full
                md:w-[15%]
                h-[10vh]  
                md:h-[99vh] 
                 border border-black/20
                 dark:border border-white/20
                  rounded-md
               "
        >
          <Asidebar/>
        </div>
        {/* Navbar & Pages div */}
        <div className="
          
          w-full
          md:w-[85%]
          h-[89vh]
          md:h-[99vh]
          rounded-md
          border border-black/20
          dark:border border-white/20
          
        ">
          {/* Navbar div */}
          <div className="
          
           w-full
           h-[9vh]
           rounded-t-md
          ">
            <Navbar />
          </div>
          {/* Pages div */}
          <div className="
            
             w-full
             h-[80vh]
             md:h-[90vh]
             overflow-y-auto
              [&::-webkit-scrollbar]:hidden
            [scrollbar-width:none]
            rounded-b-md
          ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPages;




