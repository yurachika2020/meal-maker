const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
      return this._courses.mains;
    },
  get desserts(){
      return this._courses.desserts;
  },
  set appetizers(appetizers){
      this._courses.appetizers = appetizers; 
  },
  set mains(mains){
      this._courses.mains = mains; 
  },
  set desserts(desserts){
      this._courses.desserts = desserts; 
  },
  get courses(){
    return {
      appetizers: this.appetizers, 
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
        name: dishName,
        price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  },
  generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price * dessert.price ;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}`;
  }
};
  
menu.addDishToCourse('appetizers', 'salad', 7.00);
menu.addDishToCourse('appetizers', 'spring rolls', 8.00);
menu.addDishToCourse('appetizers', 'tofu', 5.00);
menu.addDishToCourse('appetizers', 'miso soup', 4.00);
menu.addDishToCourse('appetizers', 'borscht', 7.00);

menu.addDishToCourse('mains', 'steak', 13.50);
menu.addDishToCourse('mains', 'fish', 15.50);
menu.addDishToCourse('mains', 'chicken wing', 10.00);
menu.addDishToCourse('mains', 'meat loaf', 13.00);
menu.addDishToCourse('mains', 'sushi cake', 13.00);

menu.addDishToCourse('desserts', 'pudding', 5.50);
menu.addDishToCourse('desserts', 'mochi', 6.50);
menu.addDishToCourse('desserts', 'icecream', 5.00);
menu.addDishToCourse('desserts', 'pie', 4.50);
menu.addDishToCourse('desserts', 'cream puff', 5.50);

const meal = menu.generateRandomMeal();
console.log(meal);

