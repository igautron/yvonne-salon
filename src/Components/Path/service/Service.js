import React from 'react'
import './Service.css'
import { MDBRow, MDBCol, MDBMask } from 'mdbreact';


class Service extends React.Component {



render() {

    const images = [
        {src: require('../../../img/salon/service/zach.jpg'), name: 'Укладка'},
        {src: require('../../../img/salon/service/strizki.jpg'), name: 'Стрижки'},
        {src: require('../../../img/salon/service/zatch2.jpg'), name: 'Зачіски'},
        {src: require('../../../img/salon/service/pletinia.jpg'), name: 'Плетіння'},
        {src: require('../../../img/salon/service/biozavivka.jpg'), name: 'Завивка волосся'},
        {src: require('../../../img/salon/service/farb.jpg'), name: 'Фарбування'},
        {src: require('../../../img/salon/service/koloruvania.jpg'), name: 'Колорування'},
        {src: require('../../../img/salon/service/laminuvania.png'), name: 'Ламінування волосся'},
        {src: require('../../../img/salon/service/farbuvania.jpg'), name: 'Комплексний догляд за волоссям'},
        {src: require('../../../img/salon/service/3.jpg'), name: 'Чоловічі стрижки'},
        {src: require('../../../img/salon/service/child.jpg'), name: 'Дитячі стрижки'},
        {src: require('../../../img/salon/service/manikureobreznoi.jpg'), name: 'Манікюр класичний'},
        {src: require('../../../img/salon/service/manikmechan.jpg'), name: 'Манікюр механічний'},
        {src: require('../../../img/salon/service/pedicureobr.jpg'), name: 'Педикюр класичний'},
        {src: require('../../../img/salon/service/mehanicheskii.jpg'), name: 'Педикюр механічний'},
        {src: require('../../../img/salon/service/gellack.jpg'), name: 'Покриття лаком'},
        {src: require('../../../img/salon/service/gellack.jpg'), name: 'Покриття гель-лаком'},
        {src: require('../../../img/salon/service/narowuvanie.jpg'), name: 'Нарощування нігтів'},
        {src: require('../../../img/salon/service/parafinoterapia.jpg'), name: 'Парафінотерапія'},
        {src: require('../../../img/salon/service/parafinoterapia2.jpg'), name: 'Парафінотерапія'},
    ]

    return (
        <div className='container'>
            <h1 className='h1-responsive py-5 m-0 font-weight-bold text-center'>Послуги</h1>
            <h4 className="grey-text text-center h4-responsive mx-auto mb-5 text-media">
                Наші майстри надають неперевершені послуги для жінок, чоловіків та дітей. Нові тренди та широкий спектр
                послуг роблять ваш салон одним із найкращих в індустрії краси.
            </h4>
            <div className='p-3'>
                <MDBRow className='pb-5'>
                    {images.map((image) => (
                        <MDBCol lg="3" sm='12' className="mb-4 service-col ">
                            <div collection className="z-depth-1-half w-auto">
                                <div className="view zoom">
                                    <img
                                        src={image.src}
                                        className="img-fluid w-100"
                                        alt=""
                                    />
                                    <div className="dark card-img-overlay h-50 text-center h4-responsive p-0 m-auto ">
                                        <MDBMask className="flex-center" overlay="pink-light">
                                                   <a href="">
                                                        <p className="service-text black-text opacity-100 pt-5 pb-5 pl-0 pr-0 font-weight-bold">
                                                           {image.name}
                                                        </p>
                                                   </a>
                                        </MDBMask>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                    ))}
                </MDBRow>
            </div>
        </div>
    );
}
}

export default Service;