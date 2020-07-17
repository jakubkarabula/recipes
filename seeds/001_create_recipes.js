
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, 
          name: 'Tuscan Sausage and Pepper Spaghetti', 
          headline: 'with Tomatoes and Parmesan', 
          image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/tuscan-sausage-and-pepper-spaghetti-af5b317c.jpg', 
          calories: '860 kcal', 
          time: '35 minutes'
        },
        {
          id: 2, 
          name: 'Velvety Mushroom Prosciutto Chicken', 
          headline: 'with Scallion Mashed Potatoes & Roasted Broccoli', 
          image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5ef10dc8e35a170ff645b9fc-ded4aceb.jpg',
          calories: '680 kcal',
          time: '45 minutes'
        },
        {
          id: 3, 
          name: 'Pecan-Crusted Trout', 
          headline: 'with an Apple-Studded Salad & Thyme-Roasted Potatoes', 
          image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5edfad75dc56545ee9131f32-506a9e1f.jpg',
          calories: '970 kcal',
          time: '35 minutes'
        },
        {
          id: 4, 
          name: 'Turkish Chickpea & Cauliflower Bowls', 
          headline: 'with Cilantro Couscous & Creamy Feta Sauce', 
          image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/turkish-chickpea-cauliflower-bowls-fa51d8e3.jpg',
          calories: '790 kcal',
          time: '35 minutes'
        },
        {
          id: 5, 
          name: 'Zucchini & Sun-Dried Tomato Panini', 
          headline: 'with Melty Mozz, Basil Sauce & Italian-Seasoned Potato Wedges', 
          image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5ee128214691fc476b4a9d30-800ade29.jpg',
          calories: '850 kcal',
          time: '30 minutes'
        },
        {
          id: 6, 
          name: 'Black Bean and Poblano Flautas', 
          headline: 'with Guacamole & Pico de Gallo', 
          image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5ee8f66a609ffb435c6090ab-536fca63.jpg',
          calories: '970 kcal',
          time: '30 minutes'
        }
      ]);
    });
};
