import 'element-closest-polyfill';
import Picker from 'pickerjs';
import actions from './custom';


window.addEventListener('DOMContentLoaded', () => {

    actions();

    const input = document.getElementById('input');
    const picker = new Picker(input, {
        format: 'YYYY/MM/DD HH:mm',
        headers: true,
        hidden: function(e) {
            if (input.value != '') {
                input.previousElementSibling.querySelector('button').innerHTML = input.value;
            } else {
                input.previousElementSibling.querySelector('button').innerHTML = 'НЕ ВЫБРАНО';
            }
        },
        text: {
            title: 'Выберите дату и время',
            cancel: 'Отмена',
            confirm: 'OK',
            year: 'Год',
            month: 'Месяц',
            day: 'День',
            hour: 'Час',
            minute: 'Минута',
            second: 'Секунда',
            millisecond: 'Милисекунда',
        },
    });

    const input1 = document.getElementById('input1');
    const picker1 = new Picker(input1, {
        headers: true,
        hidden: function(e) {
            if (input1.value != '') {
                input1.previousElementSibling.querySelector('button').innerHTML = input1.value;
            } else {
                input1.previousElementSibling.querySelector('button').innerHTML = 'НЕ ВЫБРАНО';
            }
        },
        text: {
            title: 'Выберите дату и время',
            cancel: 'Отмена',
            confirm: 'OK',
            year: 'Год',
            month: 'Месяц',
            day: 'День',
            hour: 'Час',
            minute: 'Минута',
            second: 'Секунда',
            millisecond: 'Милисекунда',
        },
    });


});