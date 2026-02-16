import ThemeToggle from "./Moad";
function Navbar() {
    return (
        <>
        <div className="
                        bg-white/5
                        backdrop-blur-3xl
                        dark:bg-zinc-800/30
                        w-full
                        h-[9vh]
                        rounded-t-md
                         "> 
              <ThemeToggle />
        </div>
        </>
    )
}   

export default Navbar;





