'use strict';
/**
 * Класс "Герой". Прототипный стиль.
 * @type {Object}
 **/
let Hiro = {
    create: function (name) {
        let hiro = Object.create(Hiro);
        hiro.name = name;
        hiro.soldiers = Object.create(hiro.soldiers);
        hiro.recruitSoldiers();
        return hiro;
    }
};
Hiro.__proto__ = {
    /**
     * Перечисление "Результат атаки".
     * @type {Object}
     **/
    AttackResult: {
        /**
         * Результат - герой победил.
         * @type {String}
         **/
        WIN: 'HIRO_WIN',
        LOSE: 'HIRO_LOSE',
        DRAW: 'HIRO_DRAW'
    },
    /**
     * Опция "Максимальное количество солдат".
     * @type {Number}
     **/
    maxSoldiers: 100,
    name: undefined,
    level: 1,
    battlesCount: 0,
    /**
     * @type {Array of Soldier}
     **/
    soldiers: [],
    getName: function () {
        return this.name;
    },
    getLevel: function () {
        return this.level;
    },
    getBattlesCount: function () {
        return this.battlesCount;
    },
    getSoldiersCount: function () {
        return this.soldiers.length;
    },
    getPower: function () {
        let result = this.soldiers.length * this.level;
        return result;
    },
    /**
     * Рекрутирует солдат для текущего героя.
     * @private
     **/
    recruitSoldiers: function () {
        let count = parseInt(Math.random() * Hiro.maxSoldiers);
        for (let i = 0; i <= count; i++) {
            let soldier = Soldier.create();
            soldier.setHiro(this);
            this.soldiers.push(soldier);
        }
    },
    /**
     * @private
     **/
    levelUp: function () {
        ++this.level;
    },
    /**
     * Выполняет действие "атака противника".
     * @public
     **/
    attack: function (enemy) {
        let myPower = this.getPower(),
            enemyPower = enemy.getPower();
        if (myPower > enemyPower) {
            this.setAttackResult(Hiro.AttackResult.WIN);
            enemy.setAttackResult(Hiro.AttackResult.LOSE);
        } else if (myPower < enemyPower) {
            this.setAttackResult(Hiro.AttackResult.LOSE);
            enemy.setAttackResult(Hiro.AttackResult.WIN);
        } else {
            this.setAttackResult(Hiro.AttackResult.DRAW);
            enemy.setAttackResult(Hiro.AttackResult.DRAW);
        }
    },
    /**
     * Обрадатывает результат сражения.
     * @public
     **/
    setAttackResult: function (attackResult) {
        ++this.battlesCount;
        switch (attackResult) {
            case Hiro.AttackResult.WIN:
                this.levelUp();
                alert(this.getName() + '/Я победил :)');
                break;
            case Hiro.AttackResult.LOSE:
                alert(this.getName() + '/Я проиграл :(');
                break;
            case Hiro.AttackResult.DRAW:
                alert(this.getName() + '/Ничья. Давай еще раз ;-)');
                break;
            default:
                throw new Error('Не поддерживаемый оезультат соревнования');
        }
    }
};
