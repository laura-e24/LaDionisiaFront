import { EGenericButtonType } from "../utils/general";

export interface IGenericButton {
  label: string;
  onClick?: any;
  type?: "submit" | "reset" | "button";
  buttonType?: EGenericButtonType;
  isDisabled?: boolean;
  size?: "sm" | "base" | "md" | "lg";
}

const GenericButton = ({
  buttonType = EGenericButtonType.PRIMARY,
  label,
  type = "button",
  isDisabled,
  onClick,
  size = "base",
}: IGenericButton) => {
  
  let className = "  ";

  switch (buttonType) {
    case EGenericButtonType.PRIMARY:
      className += "  bg-blue-500 text-white active:bg-blue-600 font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ";
      break;
    case EGenericButtonType.CLOSE:
      className += "  bg-red-500 text-white active:bg-red-600 font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ";
      break;
  }

  switch (size) {
    case "sm":
      className += ` ${className} text-sm px-4 py-1`;
      break;
    case "base":
      className += ` ${className} text-base px-6 py-3`;
      break;
    case "md":
      className += ` ${className} text-md px-8 py-2`;
      break;
    case "lg":
      className += ` ${className} text-lg px-10 py-4`;
      break;
  }

  return ( 
    <div className="flex">
      <button
        className={className}
        type={type}
        onClick={() => onClick && onClick()}
        disabled={isDisabled}
      >
        {label}
      </button>
    </div>
  );
}
 
export default GenericButton;