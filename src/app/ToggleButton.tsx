interface ToggleButtonProps  {
    Click: ()=> void
   }
   
   export default function ToggleButton({Click}: ToggleButtonProps){
       return(
           <button className="flex justify-center" onClick={Click}>
               Click ME
           </button>
       )
   }