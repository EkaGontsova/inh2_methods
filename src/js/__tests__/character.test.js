import Character from '../character';

describe('Character', () => {
    let character;

    beforeEach(() => {
        character = new Character('Test', 'Bowman', 25, 25);
    });

    test('should create character with correct properties', () => {
        expect(character.name).toBe('Test');
        expect(character.type).toBe('Bowman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
    });

    test('should throw error if name is not string or length is not between 2 and 10', () => {
        expect(() => new Character(123, 'Bowman', 25, 25)).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
        expect(() => new Character('a', 'Bowman', 25, 25)).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
        expect(() => new Character('blablablabla', 'Bowman', 25, 25)).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
    });

    test('should throw error if type is not valid', () => {
        expect(() => new Character('Test', 'InvalidType', 25, 25)).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });

    test('should increase level and attack/defence by 20% and set health to 100 when levelUp is called', () => {
        character.levelUp();
        expect(character.level).toBe(2);
        expect(character.attack).toBeCloseTo(25 * 1.2);
        expect(character.defence).toBeCloseTo(25 * 1.2);
        expect(character.health).toBe(100);
    });

    test('should throw error if health is 0 or less when levelUp is called', () => {
        character.health = 0;
        expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
    });

    test('should decrease health by points * (1 - defence / 100) when damage is called', () => {
        const initialHealth = character.health;
        character.damage(50);
        const expectedHealth = initialHealth - 50 * (1 - character.defence / 100);
        expect(character.health).toBeCloseTo(expectedHealth);
    });
});