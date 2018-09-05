'use strict';
/**
 * Класс "Солдат".  Прототипный стиль.
 * @type {Object}
 **/
let Soldier = {
    create: function () {
        let soldier = {};
        soldier.__proto__ = Soldier;
        return soldier;
    }
};
Soldier.__proto__ = {
    /**
     * @type {Hiro}
     **/
    hiro: undefined,

    /**
     * @param {Hiro} hiro
     * @public
     **/
    setHiro: function (hiro) {
        if (undefined !== this.hiro) {
            alert('Мой герой "' + data.hiro.getName() + '"! Не стану дезертировать!');
            throw new Error('Герой уже привязан.');
        }
        this.hiro = hiro;
    }
};
