import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER: {

    }
    case MOVE_ORDER_NEXT: {

    }
    case MOVE_ORDER_BACK: {

    }
    case ADD_INGREDIENT: {
      
    }
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
