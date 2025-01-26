const main__btn = document.querySelector('.main__btn')
const btnAll = document.querySelectorAll('.btn')
const history__block__text = document.querySelectorAll('.history__block__text')

main__btn.addEventListener('click',(e)=>{

    console.log(e.target.dataset.num)

    let targetBtn = e.target
    let dataNum = targetBtn.dataset.num
    for (let hisBlockText of history__block__text) {
        //Скрыть все вкладки
        hisBlockText.classList.remove('active')

        //если id вкладки равен дата атрибуту кнопки на которую нажали
        if (dataNum === hisBlockText.id) {
            
            for (let btn of btnAll) {
                btn.style.backgroundColor = ''
            }
            
            
            hisBlockText.classList.add('active')
             
            
            targetBtn.style.backgroundColor = 'rgb(255, 220, 154)'
        }
    }

       
})


