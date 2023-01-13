import { Field, useField } from "formik";
import _ from "lodash";

const FileCustomField = ({
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
  let className = `form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white 
    bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`;


  // const isError = meta.touched && !_.isEmpty(meta.error)
  // if (isError)
  //   className +=
  //     " bg-red-700 bg-opacity-25 border-red-600 focus:border-red-600 ";
  // else
  //   className +=
  //     " bg-transparent focus:border-gray-500 ";

  return (
    <Field
      name={name}
      type='file'
      value={FormikBag.value}
    >
      {({ field, form: { setFieldValue } }) => (
        <div>
          {label && (
            <label
              htmlFor={name}
              className="block text-sm font-bold mb-2"
            >
              {label}
            </label>
          )}
          <input
            {...field}
            className={className}
            type='file'
            name={name}
            placeholder={placeholder}
            onChange={(e: React.ChangeEvent<any>) => {
              setFieldValue(field.name, e.target.value);
              onChange(e.target.value);
            }}
          />
        </div>
      )}
    </Field>
  );
}
 
export default FileCustomField;