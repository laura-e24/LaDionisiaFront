import { EGenericButtonType } from "../../utils/general";
import GenericButton from "../GenericButton";

const GenericModal = ({ display, setDisplay, title = '', message, onClickAccept }) => {
  return (
    <>
      {display && (
        <div className="backdrop-blur-sm bg-black flex fixed w-screen h-screen inset-0 z-50 bg-opacity-30">
          <div className="bg-white max-w-[50%] mx-auto my-auto rounded p-10">
            <h3 className="text-lg text-semibold uppercase text-gray-500 text-center">
              {title}
            </h3>
            <p className="text-gray-400 font-light py-4">
              {message}
            </p>
            <div className="flex space-x-6 border-t border-slate-200 pt-6">
              <GenericButton 
                label="Cancel"
                size="sm"
                onClick={() => setDisplay(false)}
              />
              <GenericButton 
                label="Yes, disable"
                size="sm"
                onClick={() => {
                  onClickAccept()
                  setDisplay(false)
                }}
                buttonType={EGenericButtonType.CLOSE}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default GenericModal;



{/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                        
                    </div>
                    <div className="relative p-3 flex">
                        
                        
                </div> */}