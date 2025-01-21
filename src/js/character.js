export default class Character {
    constructor(name, type, attack, defence) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть строкой длиной от 2 до 10 символов.');
      }
      this.name = name;
  
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!validTypes.includes(type)) {
        throw new Error(`Тип должен быть одним из: ${validTypes.join(', ')}`);
      }
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
    }
  
    levelUp() {
        if (this.health <= 0) {
          throw new Error("Нельзя повысить левел умершего");
        }
        this.level += 1;
        this.attack = this.attack * 1.2;
        this.defence = this.defence * 1.2;
        this.health = 100;
      }
  
    damage(points) {
      this.health -= points * (1 - this.defence / 100);
    }
  }