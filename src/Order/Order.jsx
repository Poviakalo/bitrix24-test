import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import classes from 'classnames'

function Order() {    
    const initialOrder = {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        typeOperation: '',
        property: '',
        rooms: '',
        priceFrom: '',
        priceTo: ''
    }
    const [contract, setContract] = React.useState(false)
    const [order, setOrder] = React.useState(initialOrder)
    const {firstName,lastName, email, tel, typeOperation, property, rooms, priceFrom, priceTo } = order
    const changeContract = () => { 
        contract && window.confirm('Ви впевненні, що хочете відмовитися від угоди?')
        ? clearInput()
        : (!Object.values(order).includes('') ? setContract(true) : alert("Заповніть усі поля!"))
    }
    const clearInput = () => {
        console.log('test')
        setContract(!contract)      
    }
    const createOrder = (value, key) => {
        setOrder({
            ...order,
            [key]: value
        })
    }
    
  return (
    <div className='order'>
        <h1 className={classes('order__title',
        {'order__title-active': contract}
        )}>{contract ? 'Ваше замовлення оформленно' : 'Створити замовлення'}</h1>
        <div className='order__form'>  

            <Input className={classes('oreder__form-firstName')} type='text' name='firstName' values={["Ваше ім'я"]}
             onChange={(e, id) => createOrder(e,id)} nameLabel="Введіть ваше ім'я: " />       

            <Input className={classes('oreder__form-lastName')} type='text' name='lastName' values={['Ваше прізвище']}
             onChange={(e, id) => createOrder(e, id)} nameLabel="Введіть ваше прізвище: " />       

            <Input className={classes('oreder__form-email')} type='email' name='email' values={['email']}
             onChange={(e, id) => createOrder(e, id)} nameLabel="Ваш email: " />  

            <Input className={classes('oreder__form-tel')} type='tel' name='tel' values={['Телефон']}
             onChange={(e, id) => createOrder(e, id)} nameLabel="Ваш телефон: " />

            <Input className={classes('oreder__form-typeOperation')} type='radio'
            onChange={(e, name) => createOrder(e, name)} name='typeOperation' values={['оренда', 'покупка', 'продаж']} nameLabel="Тип операції: " />  

            <Input className={classes('oreder__form-property')} type='radio'
            onChange={(e, name) => createOrder(e, name)} name='property' values={['будинок', 'квартира']} nameLabel="Тип об'єкту: " /> 

            <Input className={classes('oreder__form-rooms')} type='radio'
            onChange={(e, name) => createOrder(e, name)} name='rooms' values={[1,2,3,4,5]} nameLabel="Виберіть кількість кімнат: " />

            <Input className={classes('oreder__form-priceFrom')} type='number' name='priceFrom'
            onChange={(e, id) => createOrder(e, id)} values={['від']} nameLabel="Введіть мінімальну ціну: " step={5000} min='0' />   

            <Input className={classes('oreder__form-priceTo')} type='number' name='priceTo'
            onChange={(e, id) => createOrder(e, id)} values={['до']} nameLabel="Введіть максимальну ціну: " step={5000} min='0' />   

        </div>
        <Button 
            className={
              classes('btn',
                      {'btn__active': contract} )} 
            onClick={changeContract} 
          >
            {contract ? 'remove contract' : 'create contract'}
        </Button> 
        <div className={classes(
            'order__block',
            {'order__block-active': contract}
          )}>{              
              contract  
              ? `${lastName} ${firstName}, ваше замовлення виконується. Дані замовлення: ${typeOperation}, ${property === 'будинок' ? 'будинку' : 'квартири'}, ${rooms} ${rooms===1 ? 'кімната' : (rooms === 5 ? 'кімнат' : 'кімнати')}, ціна від ${priceFrom} до ${priceTo}. Як будуть варіанти ми Вам передзвонимо за номером - ${tel}, або надішлем листа на ел.пошту - ${email} `
              : 'У вас немає замовлень'
          }</div>
    </div>
  )
}

export default Order