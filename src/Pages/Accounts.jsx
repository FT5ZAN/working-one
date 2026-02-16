import { useSelector } from "react-redux";

function AccountsPage() {
  const accounts = useSelector((state) => state.accounts.accounts);

  console.log(accounts);

    return (
    <>
         <div className=" bg-white h-full w-full dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300">

     

      <h1 className=" text-3xl font-bold">
        Welcome 
      </h1>

    </div>
    </>
    );
}

export default AccountsPage;