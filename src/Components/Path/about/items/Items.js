import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom'

class Items extends React.Component {

    render() {
        return (
           <div>
               <div className='container  justify-content-center m-auto pb-5'>
                   <div className='price w-75'>
                       <h2 className="h1-responsive font-weight-bold text-center my-5 pt-5">
                           Послуги салону
                       </h2>
                       <div className='w-75'>
                           <img className='justify-content-center text-center w-100 mx-3' src={require('../../../../img/watercolor-flowers-png-clipart-background_7921.png')} />
                       </div>
                       <table id="dtBasicExample" className="table table-price px-5 mx-3" width="100%">
                           <thead>
                           <tr>
                               <th className="th-sm">НАЗВА ПОСЛУГИ
                               </th>
                               <th className="th-sm">ЦІНА
                               </th>
                           </tr>
                           </thead>
                           <p className='py-3 text-left font-weight-bold'>ПОСЛУГИ МАНІКЮРНОГО ЗАЛУ</p>
                           <tbody>
                           <tr>
                               <td>Манікюр комбінований</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Чоловічий манікюр</td>
                               <td>300</td>
                           </tr>
                           <tr>
                               <td>Покриття лаком, гель-лаком</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Покриття френч, втирка</td>
                               <td>250</td>
                           </tr>
                           <tr>
                               <td>Дизайн нігтів за допомогою наклейок або камінцями</td>
                               <td>50-100</td>
                           </tr>
                           <tr>
                               <td>Укріплення нігтів (акрилова пудра, біогель, база)</td>
                               <td>50-100</td>
                           </tr>
                           <tr>
                               <td>Парафінотерапія</td>
                               <td>250</td>
                           </tr>
                           <tr>
                               <td>Нарощування нігтів</td>
                               <td>650</td>
                           </tr>
                           <tr>
                               <td>Зняття покриття гель-лаком</td>
                               <td>100</td>
                           </tr>
                           </tbody>
                           <p className='py-3 text-left font-weight-bold'>ПОСЛУГИ ПЕДИКЮРНОГО ЗАЛУ</p>
                           <tbody>
                           <tr>
                               <td>Класичний педикюр</td>
                               <td>300</td>
                           </tr>
                           <tr>
                               <td>Апаратний педикюр</td>
                               <td>350</td>
                           </tr>
                           <tr>
                               <td>Кислотний педикюр</td>
                               <td>350</td>
                           </tr>
                           <tr>
                               <td>Покриття лаком</td>
                               <td>100</td>
                           </tr>
                           <tr>
                               <td>Покриття гель-лаком</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Покриття френч, кошачий глаз, втирка</td>
                               <td>250</td>
                           </tr>
                           </tbody>
                           <p className='py-3 text-left font-weight-bold'>ПОСЛУГИ ПЕРУКАРСЬКОГО ЗАЛУ</p>
                           <tbody>
                           <tr>
                               <td>Стрижка короткого волосся</td>
                               <td>від 250</td>
                           </tr>
                           <tr>
                               <td>Стрижка волосся середьної довжини</td>
                               <td>300</td>
                           </tr>
                           <tr>
                               <td>Стрижка довгого волосся</td>
                               <td>від 300</td>
                           </tr>
                           <tr>
                               <td>Укладка короткого волосся</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Укладка волосся середньої довжини</td>
                               <td>300</td>
                           </tr>
                           <tr>
                               <td>Укладка довгого волосся</td>
                               <td>350</td>
                           </tr>
                           <tr>
                               <td>Укладка люкс (локони)</td>
                               <td>від 350</td>
                           </tr>
                           <tr>
                               <td>Афрокудрі</td>
                               <td>600-800</td>
                           </tr>
                           <tr>
                               <td>Зачіски 1 складності</td>
                               <td>600</td>
                           </tr>
                           <tr>
                               <td>Зачіски 2 складності</td>
                               <td>800</td>
                           </tr>
                           <tr>
                               <td>Зачіски 3 складності</td>
                               <td>1000</td>
                           </tr>
                           <tr>
                               <td>Плетення волосся</td>
                               <td>300-600</td>
                           </tr>
                           <tr>
                               <td>Стрижка чолки</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Стрижка кінчиків</td>
                               <td>200</td>
                           </tr>
                           </tbody>
                           <p className='py-3 text-left font-weight-bold'>ПОСЛУГИ ПЕРУКАРСЬКОГО ЗАЛУ ДЛЯ ЧОЛОВІКІВ</p>
                           <tbody>
                           <tr>
                               <td>Чоловіча стрижка</td>
                               <td>300</td>
                           </tr>
                           <tr>
                               <td>Чоловіча стрижка на довге волосся</td>
                               <td>300</td>
                           </tr>
                           <tr>
                               <td>Чоловіча укладка</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Пілінг шкіри голови</td>
                               <td>150</td>
                           </tr>
                           <tr>
                               <td>Висвітлені пасма волосся(акценти)</td>
                               <td>300</td>
                           </tr>
                           <tr>
                               <td>Часткове освітлення волосся</td>
                               <td>600</td>
                           </tr>
                           <tr>
                               <td>Повне освітлення волосся</td>
                               <td>від 1000</td>
                           </tr>
                           <tr>
                               <td>Стрижка бороди</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Уход за бородой</td>
                               <td>150</td>
                           </tr>
                           </tbody>
                           <p className='py-3 text-left font-weight-bold'>ДОГЛЯД ЗА ВОЛОССЯМ</p>
                           <tbody>
                           <tr>
                               <td>Кератинове вирівнювання Felps or Homna Tokio</td>
                               <td>1000-1800</td>
                           </tr>
                           <tr>
                               <td>Кератиновий догляд Farmavita</td>
                               <td>600</td>
                           </tr>
                           <tr>
                               <td>Кашемирове волосся Farmavita</td>
                               <td>600</td>
                           </tr>
                           <tr>
                               <td>Маска Davines the Chircle Chronieles</td>
                               <td>250</td>
                           </tr>
                           <tr>
                               <td>Лікування від лупи Farmavita</td>
                               <td>300</td>
                           </tr>
                           <tr>
                               <td>Лікування від випадіння волосся</td>
                               <td>300</td>
                           </tr>
                           </tbody>
                           <p className='py-3 text-left font-weight-bold'>ЗАХИСТ ВОЛОССЯ</p>
                           <tbody>
                           <tr>
                               <td>Пілінг шкіри голови</td>
                               <td>150</td>
                           </tr>
                           <tr>
                               <td>Активний захист та відновлення під час покраски</td>
                               <td>150/250/350/400</td>
                           </tr>
                           <tr>
                               <td>Реконструкція волосся Joico</td>
                               <td>1000</td>
                           </tr>
                           <tr>
                               <td>Маска для волосся Davines</td>
                               <td>300-600</td>
                           </tr>
                           <tr>
                               <td>Ботекс Homna Tokio, Felps</td>
                               <td>800-1000</td>
                           </tr>
                           <tr>
                               <td>Ампульний уход для волосся</td>
                               <td>500</td>
                           </tr>
                           <tr>
                               <td>Глубоке живлення та відновлення Farmavita</td>
                               <td>400</td>
                           </tr>
                           <tr>
                               <td>Стрижка бороди</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Уход за бородой</td>
                               <td>150</td>
                           </tr>
                           </tbody>
                           <p className='py-3 text-left font-weight-bold'>ФАРБУВАННЯ ВОЛОССЯ</p>
                           <tbody>
                           <tr>
                               <td>Класичний колір: фарбування корнів</td>
                               <td>600</td>
                           </tr>
                           <tr>
                               <td>Класичний колір: фарбування в один тон</td>
                               <td>від 800</td>
                           </tr>
                           <tr>
                               <td>Персональний колір: покраска із частковим фарбуванням</td>
                               <td>1200-2000</td>
                           </tr>
                           <tr>
                               <td>Ексклюзивний колів: омбре, ратуш, балаяж, гуляж</td>
                               <td>1500-2300</td>
                           </tr>
                           </tbody>
                           <p className='py-3 text-left font-weight-bold'>ПОСЛУГИ ДЛЯ ДІТЕЙ</p>
                           <tbody>
                           <tr>
                               <td>Дитяча стрижка</td>
                               <td>150</td>
                           </tr>
                           <tr>
                               <td>Дитяча укладка</td>
                               <td>150</td>
                           </tr>
                           <tr>
                               <td>Підліткова стрижка</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Стрижка малюнка</td>
                               <td>від 300 </td>
                           </tr>
                           <tr>
                               <td>Підліткова покраска частини волосся</td>
                               <td>від 300</td>
                           </tr>
                           <tr>
                               <td>Укладка для дівчаток (локони)</td>
                               <td>250</td>
                           </tr>
                           <tr>
                               <td>Укладка з плетенням</td>
                               <td>300-600</td>
                           </tr>
                           <tr>
                               <td>Стрижка бороди</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Плетення із канікалоном</td>
                               <td>300</td>
                           </tr>
                           </tbody>
                           <p className='py-3 text-left font-weight-bold'>БРОВКИ ТА МАКІЯЖ</p>
                           <tbody>
                           <tr>
                               <td>Фарбування брів</td>
                               <td>200</td>
                           </tr>
                           <tr>
                               <td>Фарбування хной</td>
                               <td>250</td>
                           </tr>
                           <tr>
                               <td>МАКІЯЖ ДЕННИЙ</td>
                               <td>600-800</td>
                           </tr>
                           <tr>
                               <td>МАКІЯЖ ВЕЧІРНІЙ</td>
                               <td>800-1000</td>
                           </tr>
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
        )
    }
}

export default Items