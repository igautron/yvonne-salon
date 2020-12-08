import React from 'react'
import './Search.css'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";



const Search = () => {
    return (
      <div className='search container'>
          <MDBCol md='8' sm='8' lg='8' xl='8' className='p-0 h-100'>
              <MDBFormInline className='md-form w-100 m-0 h-100'>
                  <input className='form-control search-block ml-4 ml-md-4 ml-lg-5 ml-xl-5' type='text' placeholder="Пошук на сайті" aria-label="Search" />
                  <MDBBtn rounded size="sm" type="submit" className="search-btn">
                      Знайти
                  </MDBBtn>
              </MDBFormInline>
          </MDBCol>
      </div>
    );
}

export default Search;