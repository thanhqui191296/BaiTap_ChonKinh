import React, { Component } from 'react'
import dataGlasses from '../data/dataGlasses.json'


export default class BaiTapThuKinh extends Component {
  state ={
    glassesCurrent: {
  "id": 2,
    "price": 50,
      "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
}
}

renderGlassesList = () => {
  return dataGlasses.map((glassesItem, index) => {
    return <img onClick={()=>{this.changeGlasses(glassesItem)}} className='ms-2 p-1 border border-width-1' style={{ width: '110px', cursor: 'pointer' }} key={index} src={glassesItem.url}></img>
  })
}
changeGlasses = (newGlasses) =>{
  this.setState({
    glassesCurrent:newGlasses
  })
}
render() {
  const styleGlasses = {
    width: '150px',
    top: '72px',
    right: '72px',
    opacity: '0.7'
  }
  const styleGlasses2 ={
    width:'150px',
    top:'72px',
    left:'200px',
    opacity: '0.7'
  }
  const inforGlasses = {
    width: '250px',
    top: '200px',
    left: '273px',
    paddingLeft: '15px',
    backgroundColor: 'rgba(255,127,0,.5)',
    textAlign: 'left',
    height: '105px',
  }
  return (
    <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: 'cover', minHeight: '2000px' }}>
      <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px' }}>
        <h3 style={{ backgroundColor: 'rgba(0,0,0,.2)', textAlign: 'center', color: 'white' }} className='p-5'>TRY GLASSES APP ONLINE</h3>
        <div className='container'>
          <div className='row mt-5 text-center'>
            <div className='col-6'>
              <div className='position-relative'>
                <img className='position-absolute' style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="" />
                <img style={styleGlasses} className='position-absolute' src={this.state.glassesCurrent.url} alt="" />
                <div className='position-relative' style={inforGlasses}>
                  <span style={{ color: '#AB82FF', fontSize: '17px' }} className='font-weight-bold'>{this.state.glassesCurrent.name}</span> <br />
                  <span style={{ fontSize: '14px', fontWeight: '400' }}>{this.state.glassesCurrent.desc}</span>
                </div>
              </div>

            </div>
            <div className='col-6'>
              <div className='position-relative'>
              <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="" />
             
             <img style={styleGlasses2} className='position-absolute' src={this.state.glassesCurrent.url} alt="" />
              </div>
              
            </div>
          </div>
          <div className='bg-light container text-center mt-5 d-flex justify-content-center p-5'>
            {this.renderGlassesList()}
          </div>

        </div>
      </div>
    </div>

  )
}
}

