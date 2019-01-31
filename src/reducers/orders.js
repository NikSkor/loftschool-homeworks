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
      let payload = action.payload;
      let newOrder = {
        id: payload.id,
        ingredients: [],
        position: 'clients',
        recipe: payload.recipe
      }
      return [...state, newOrder]
    }
    case MOVE_ORDER_NEXT: {
      let newOrder=Object.assign([], state);
      let payload = action.payload;
      newOrder.forEach(element => {
        if (element.id===payload.id){
          if(element.position === 'clients'){
            element.position='conveyor_1'
          }
          for (let i=1; i<4; i++) {
            if(element.position === `conveyor_${i}`){
              element.position = `conveyor_${i+1}`
            }
          }
          if(element.position === 'conveyor_4'){
            element.position='finish'
          }
        }

        
      });
      return newOrder;
    }
    case MOVE_ORDER_BACK: {
      let newOrder=Object.assign([], state);
      let payload = action.payload;
      newOrder.forEach(element => {
        if (element.id===payload.id){
          for (let i=4; i>1; i--) {
            if(element.position === `conveyor_${i}`){
              element.position = `conveyor_${i-1}`
            }
          }
        }});
      return newOrder;
    }
    case ADD_INGREDIENT: {
      return state;
    }
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
