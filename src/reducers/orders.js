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
        if (element.id===payload){
          if(element.position === 'clients'){
            element.position='conveyor_1';
          }
          else if(element.position === `conveyor_1`){
              element.position = `conveyor_2`
          }
          else if(element.position === `conveyor_2`){
            element.position = `conveyor_3`
          }
          else if(element.position === `conveyor_3`){
          element.position = `conveyor_4`
          }
          else if(element.position === 'conveyor_4'){
            if (element.recipe.length===element.ingredients.length) {
              element.position='finish'
            }
            
          }
        } 
      });
      return [...state, newOrder];
    }
    case MOVE_ORDER_BACK: {
      let newOrder=Object.assign([], state);
      let payload = action.payload;
      newOrder.forEach(element => {
        if (element.id===payload){
          if(element.position === `conveyor_4`){
              element.position = `conveyor_3`
          }
          else if(element.position === `conveyor_3`){
            element.position = `conveyor_2`
          }
          else if(element.position === `conveyor_2`){
          element.position = `conveyor_1`
          }
        }});
      return newOrder;
    }
    case ADD_INGREDIENT: {
      const { from, ingredient } = action.payload;
      let newOrder=Object.assign([], state);
      newOrder.forEach(element => {
        if (element.position === from){
          element.recipe.forEach(elem => {
            if (elem === ingredient){
              element.ingredients.push(ingredient)
            }
          }) 
          }
        }
      )
      return [...state, newOrder];
    }
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
