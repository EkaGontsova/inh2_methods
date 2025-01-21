import "./css/style.css";
import "./js/character.js";
import Character from './js/character.js';

try {
    const hero = new Character('Robin Hood', 'Bowman'); 
    console.log(hero);
} catch (error) {
    console.error(error.message);
}

// try {
//     const hero = new Character('Robin', 'BlaBla'); 
//     console.log(hero);
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     const hero = new Character('R', 'Daemon'); 
//     console.log(hero);
// } catch (error) {
//     console.error(error.message);
// }