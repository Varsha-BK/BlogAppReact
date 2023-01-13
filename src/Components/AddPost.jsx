import React from 'react'
import Navbar from './Navbar'

const AddPost = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <Navbar/>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" name="" id="" placeholder='Enter the Blog Title' className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Content</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Enter the Blog Content' className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary">Add Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost