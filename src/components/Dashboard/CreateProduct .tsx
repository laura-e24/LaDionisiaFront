import { useAppDispatch } from '../../app/store';
import { createWine } from '../../features/products/productsSlice';
import { Formik, Form } from "formik"
import CustomField from '../CustomField';
import FileCustomField from '../FileCustomField';
import CustomCheckbox from '../CustomCheckbox';
import GenericButton from '../GenericButton';
import { EGenericButtonType } from '../../utils/general';
import CustomSelect from '../CustomSelect';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  wine: Yup.string().required('Wine name is required.'),
  winery: Yup.string().required('Winery is required.'),
  rating: Yup.number().required('Rating is required'),
  country: Yup.string().required('Country is required.'),
  region: Yup.string().required('Region is required.'),
  image: Yup.string().required('Image is required.'),
  description: Yup.string(),
  type: Yup.string().required('Type is required.'),
  year: Yup.number().required('Year is required'),
  totalSalesCurrent: Yup.number(),
  stock: Yup.number().required('Stock is required'),
  price: Yup.number().required('Price is required')
})

const CreateProduct = ({ handleCloseModal }) => {
  const dispatch = useAppDispatch()
  const initialValues = {
    wine: "",
    winery: "",
    rating: 0,
    country: "",
    region: "",
    image: "",
    description: "",
    type: "",
    year: 0,
    disabled: true,
    featured: false,
    onSale: false,
    totalSalesCurrent: 0,
    stock: 0,
    price: 0
  }

  return (
    <div className="my-6 justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-2/4 mt-2 mx-auto max-w-6xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-black ">
          {/*header*/}
          <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
            <p className="text-lg text-center font-semibold flex">
              New Product
            </p>
          </div>
          {/*body*/}
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              const result = await dispatch(createWine(values))
              if (createWine.fulfilled.match(result)) alert('Product Created')
              
              console.log(result)
              actions.resetForm()
            }}
          >
            {({}) => (
              <Form className="flex flex-wrap gap-4 bg-white shadow-md rounded px-6 pt-6 pb-8 dark:bg-black justify-center">
                <CustomField
                  label='Name'
                  name='wine'
                />
                <CustomField
                  label='Winery'
                  name='winery'
                />
                <CustomField
                  label='Year'
                  name='year'
                />
                <CustomField
                  label='Description'
                  name='description'
                />
                <CustomField
                  label='Country'
                  name='country'
                />
                <CustomField
                  label='Region'
                  name='region'
                />
                <CustomField
                  label='Total Sales'
                  name='totalSalesCurrent'
                />
                <CustomField
                  label='Total Sales'
                  name='totalSalesCurrent'
                />
                <CustomSelect label='Type' name='type'>
                  <option value='select'>Select type...</option>
                  <option value="reds">Reds</option>
                  <option value="whites">Whites</option>
                  <option value="rose">Rose</option>
                  <option value="sparkling">Sparkling</option>
                  <option value="dessert">Dessert</option>
                </CustomSelect>
                <CustomField
                  label='Rating'
                  name='rating'
                  type='number'
                />
                <CustomField
                  label='Price'
                  name='price'
                />
                <CustomField
                  label='Stock'
                  name='stock'
                />
                <FileCustomField
                  label='Image'
                  name='image'
                />
                <CustomCheckbox
                  label='Disabled'
                  name='disabled'
                />
                <CustomCheckbox
                  label='Featured'
                  name='featured'
                />
                 <CustomCheckbox
                  label='On Sale'
                  name='onSale'
                />
                <div className="flex items-center justify-around p-6 border-t border-slate-200 w-full">
                  <GenericButton 
                    label='Cerrar'
                    buttonType={EGenericButtonType.CLOSE}
                    onClick={handleCloseModal}
                  />
                  <GenericButton 
                    label='Aceptar'
                    buttonType={EGenericButtonType.PRIMARY}
                    type='submit'
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
export default CreateProduct;
