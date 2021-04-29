const actions = () => {

    const sel = document.querySelectorAll('.form-action__select');
    const span = document.querySelectorAll('.form-action__fakeoption');
    const opts = document.querySelectorAll('.form-action__list');

    sel.forEach(item => {
        item.addEventListener('click', (e) => {
            opts.forEach(item => {
                item.style.display = 'none';
            });
            let targ = e.target.closest('.form-action__select').querySelector('.form-action__list');
            if (targ.style.display == 'block') {
                targ.style.display = 'none';
                e.target.closest('.form-action__select').classList.remove('rotatearr');
            } else {
                targ.style.display = 'block';
                e.target.closest('.form-action__select').classList.add('rotatearr');
            }
        });
    });



    span.forEach(item => {
        item.addEventListener('click', (e) => {
            setTimeout(() => {
                e.target.closest('.form-action__select').classList.remove('rotatearr');
            }, 50)

            let targ = e.target.closest('.form-action__select').querySelector('.form-action__val');
            targ.innerHTML = e.target.innerHTML;
            if (e.target.classList.contains('form-action__fakeoption_not')) {
                targ.style.color = "#CFCFCF";
            } else {
                targ.style.color = "#000000";
            }

            let val = e.target.getAttribute('data-value');
            let elem = document.querySelector(`[name="${val}"]`);
            elem.value = e.target.getAttribute('data-val');
            setTimeout(function() {
                opts.forEach(item => {
                    item.style.display = 'none';
                });
            }, 50)
        });
    });


    document.addEventListener('click', (e) => {
        if (!e.target.closest('.form-action__select')) {
            opts.forEach(item => {
                item.style.display = 'none';
            });

            sel.forEach(item => {
                item.classList.remove('rotatearr');
            });

        }
    });

    const from = document.querySelector('[name="from"]');
    const from_time = document.querySelectorAll('.form-action__time')[0];
    const to = document.querySelector('[name="to"]');
    const to_time = document.querySelectorAll('.form-action__time')[1];

    from.addEventListener('input', () => {
        if (from.value != '') {
            from_time.querySelector('.form-action__light').classList.remove('form-action__light_active');
            from_time.querySelector('.form-action__state span').innerHTML = from.value;
        } else {
            from_time.querySelector('.form-action__light').classList.add('form-action__light_active');
            from_time.querySelector('.form-action__state span').innerHTML = 'Адрес не указан';
        }
        if (to.value != '' && from.value != '') {
            to_time.querySelector('.form-action__light').classList.remove('form-action__light_active');
            to_time.querySelector('button').classList.add('form-action__button_active');
        }
    });

    to.addEventListener('input', () => {
        if (to.value != '' && from.value != '') {
            to_time.querySelector('.form-action__light').classList.remove('form-action__light_active');
            to_time.querySelector('.form-action__state span').innerHTML = from.value;
            to_time.querySelector('button').classList.add('form-action__button_active');
        } else {
            to_time.querySelector('.form-action__light').classList.add('form-action__light_active');
            to_time.querySelector('.form-action__state span').innerHTML = 'Адрес не указан';
            to_time.querySelector('button').classList.remove('form-action__button_active');
        }
    });

    const btns = document.querySelectorAll('.form-action__button');
    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (item.classList.contains('form-action__button_active')) {
                item.closest('.form-action__button-container').nextElementSibling.click();
            }
        });
    });


    const chbx = document.querySelector('[name="temperature"]');
    const temp_inps = document.querySelectorAll('.form-item__fields_toggle');
    chbx.addEventListener('change', () => {
        if (chbx.checked == true) {
            temp_inps.forEach(item => {
                item.style.display = 'block';
            });
        } else {
            temp_inps.forEach(item => {
                item.style.display = 'none';
            });
        }
    });




}

export default actions;