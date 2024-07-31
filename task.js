document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');
        const dropdownItems = Array.from(dropdownList.querySelectorAll('.dropdown__item'));
        const dropdownLinks = Array.from(dropdownList.querySelectorAll('.dropdown__link'));

        // Обработка клика на элемент dropdown__value
        dropdownValue.addEventListener('click', () => {
            // Закрываем все другие открытые списки
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
                }
            });

            // Переключаем класс активного списка
            dropdownList.classList.toggle('dropdown__list_active');
        });

        // Обработка клика на элементы списка
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                // Меняем текст кнопки на выбранное значение
                const selectedValue = item.querySelector('.dropdown__link').textContent;
                dropdownValue.textContent = selectedValue;

                // Закрываем список
                dropdownList.classList.remove('dropdown__list_active');
            });
        });

        // Предотвращаем переход по ссылке
        dropdownLinks.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
            });
        });
    });

    // Закрываем выпадающие списки при клике вне их
    document.addEventListener('click', event => {
        if (!event.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
            });
        }
    });
});
