import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Company Name is required'),
        company_primary_email: Yup.string().email('Email is invalid').required('Email is required'),
        website: Yup.string().required('Website is required'),
        contact_number: Yup.string().required('Contact Number is required'),
        registration_id : Yup.string().required('Registration ID is required'),
        owner_id : Yup.string().required('Owner ID is required'),
        company_color_code : Yup.string().required('Company Color Code is required'),
        country : Yup.string().required('Country is required'),
        state : Yup.string().required('State is required'),
        description : Yup.string().required('Description is required'),
        company_logo : Yup.string().required('Company Logo is required'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            company_primary_email: '',
            website: '',
            contact_number: '',
            registration_id : '',
            owner_id : '',
            company_color_code : '',
            country : '',
            state : '',
            description : '',
            company_logo : '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });
  return (
    <div className="register-form">
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Company Name</label>
                <input
                id="name"
                name="name"
                type="text"
                className={
                    'form-control' +
                    (formik.errors.name && formik.touched.name
                      ? ' is-invalid'
                      : '')
                  }
                onChange={formik.handleChange}
                value={formik.values.name}
                /> 
            <div className="invalid-feedback">
                {formik.errors.name && formik.touched.name
                ? formik.errors.name
                : null}
            </div>  
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                id="company_primary_email"
                name="company_primary_email"
                type="email"
                className={
                    'form-control' +
                    (formik.errors.company_primary_email && formik.touched.company_primary_email) ? 'is-invalid' : ''
                }
                onChange={formik.handleChange}
                value={formik.values.company_primary_email}
                />
                <div className="invalid-feedback">
                    {formik.errors.company_primary_email && formik.touched.company_primary_email
                    ? formik.errors.company_primary_email
                    : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    className={
                        'form-control' +
                        (formik.errors.website && formik.touched.website
                            ? ' is-invalid'
                            : '')
                    }
                    onChange={formik.handleChange}
                    value={formik.values.website}
                />
                <div className="invalid-feedback">
                    {formik.errors.website && formik.touched.website
                    ? formik.errors.website
                    : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="contact_number">Contact Number</label>
                <input
                    id="contact_number"
                    name="contact_number"
                    type="text"
                    className={
                        'form-control' +
                        (formik.errors.contact_number && formik.touched.contact_number
                            ? ' is-invalid'
                            : '')
                    }
                    onChange={formik.handleChange}
                    value={formik.values.contact_number}
                />
                <div className="invalid-feedback">
                    {formik.errors.contact_number && formik.touched.contact_number
                    ? formik.errors.contact_number
                    : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="registration_id">Registration ID</label>
                <input
                    id="registration_id"
                    name="registration_id"
                    type="text"
                    className={
                        'form-control' +
                        (formik.errors.registration_id && formik.touched.registration_id
                            ? ' is-invalid'
                            : '')
                    }
                    onChange={formik.handleChange}
                    value={formik.values.registration_id}
                />
            </div>
            <div className="form-group">
                <label htmlFor="owner_id">Owner ID</label>
                <input
                    id="owner_id"
                    name="owner_id"
                    type="text"
                    className={
                        'form-control' +
                        (formik.errors.owner_id && formik.touched.owner_id
                            ? ' is-invalid' 
                            : '')
                    }
                    onChange={formik.handleChange}
                    value={formik.values.owner_id}
                />
                <div className="invalid-feedback">
                    {formik.errors.owner_id && formik.touched.owner_id
                    ? formik.errors.owner_id
                    : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="company_color_code">Company Color Code</label>
                <input
                    id="company_color_code"
                    name="company_color_code"
                    type="text"
                    className={
                        'form-control' +
                        (formik.errors.company_color_code && formik.touched.company_color_code
                            ? ' is-invalid'
                            : '')
                    }
                    onChange={formik.handleChange}
                    value={formik.values.company_color_code}
                />
                <div className="invalid-feedback">
                    {formik.errors.company_color_code && formik.touched.company_color_code
                    ? formik.errors.company_color_code
                    : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                    id="country"
                    name="country"
                    type="text"
                    className={
                        'form-control' +
                        (formik.errors.country && formik.touched.country) ? 'is-invalid' : ''
                    }
                    onChange={formik.handleChange}
                    value={formik.values.country}
                />
                <div className="invalid-feedback">
                    {formik.errors.country && formik.touched.country
                    ? formik.errors.country
                    : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                    id="state"
                    name="state"
                    type="text"
                    className={
                        'form-control' +
                        (formik.errors.state && formik.touched.state) ? 'is-invalid' : ''
                    }
                    onChange={formik.handleChange}
                    value={formik.values.state}
                />
                <div className="invalid-feedback">
                    {formik.errors.state && formik.touched.state
                    ? formik.errors.state
                    : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    className={
                        'form-control' +
                        (formik.errors.description && formik.touched.description) ? 'is-invalid' : ''
                    }
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                <div className="invalid-feedback">
                    {formik.errors.description && formik.touched.description
                    ? formik.errors.description
                    : null}
                </div>
                
            </div>
            <div className="form-group">
                <label htmlFor="company_logo">Company Logo</label>  
                <input
                    id="company_logo"
                    name="company_logo"
                    type="file"
                    className={
                        'form-control' +
                        (formik.errors.company_logo && formik.touched.company_logo) ? 'is-invalid' : ''
                    }
                    onChange={formik.handleChange}
                    value={formik.values.company_logo}
                />
                <div className="invalid-feedback">
                    {formik.errors.company_logo && formik.touched.company_logo
                    ? formik.errors.company_logo
                    : null}
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Signup