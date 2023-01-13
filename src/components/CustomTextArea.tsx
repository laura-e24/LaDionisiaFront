import { Field, useField } from "formik";
import _ from "lodash";

const CustomTextArea = ({
  label = "",
  name,
  placeholder = "Escriba...",
  type = "text",
  required = true,
  value = "",
  onChange = (e) => {},
  ...FormikBag
}) => {
  const [field, meta, helpers] = useField({ ...FormikBag, name });
  let className = `h-44 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none 
    focus:shadow-outline placeholder-gray-500 placeholder-opacity-20`;


  const isError = meta.touched && !_.isEmpty(meta.error)
  if (isError)
    className +=
      " bg-red-700 bg-opacity-25 border-red-600 focus:border-red-600 ";
  else
    className +=
      " bg-transparent focus:border-gray-500 ";

  return (
    <Field
      autoComplete="off"
      name={name}
      type={type}
      value={FormikBag.value}
      lang="es"
    >
      {({ field, form: { setFieldValue } }) => (
        <div>
          {label && (
            <label
              htmlFor={name}
              className="block text-sm font-bold mb-2 h-"
            >
              {label}
            </label>
          )}
          <textarea
            {...field}
            className={className}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e: React.ChangeEvent<any>) => {
              setFieldValue(field.name, e.target.value);
              onChange(e.target.value);
            }}
          ></textarea>
        </div>
      )}
    </Field>
  );
}
 
export default CustomTextArea;