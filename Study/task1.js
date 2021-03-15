//исходные массивы 

//создание новых массивов по заданию

//Сделайте из него массив, состоящий из квадратов этих чисел
const arr = [1, 2, 2, 4, 6, 0, -1, 4, 234, 23, -234, -41]

const sqArr = arr.map( e => Math.pow(e, 2))

//Верните массив, состоящий только из уникальных значений(убрать все дубликаты, число в новом массиве не должно повторяться)

const uniqueArr = [...new Set(arr)];

//Проверьте то, что все элементы в массиве больше нуля
function isThereAZero() {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 ) return false
        else return true
    }
}

//Оставьте в нем только отрицательные числа
const negative = arr.filter( e => e < 0)

//Найдите сумму этих чисел
const sum = arr.reduce((sum, current) => {
    return sum + current
})

//Дан массив, в нем могут быть обычные элементы и подмассивы(например [1, 2, [3, 4], 5, {a: 7}]). Оставьте в нем только подмассивы
const arr1 = [1, 2, [3, 4], 5, {a: 7}];

const subArrs = arr1.filter((item) => item.length)

//Верните количество слов в строке, длина которых больше 4 символов
const text = "Длинное и не очень длинное слово в этой строке"

const test = text.split(' ')
const testArr = test.filter( e => e.length > 4)
const textArr = testArr.toString().replaceAll(',', ' ')

//Если в строке имеется шестизначный номер(ни больше, ни меньше) - верните его, как результат функции 
const numArr = "231204a234aasd235234231000001f1s2412"

const test1 = numArr.match(/\d{6}/)[0];



//вывод результатов
console.log(sqArr)
console.log(uniqueArr)
console.log(isThereAZero())
console.log(negative)
console.log(sum)
console.log(subArrs)
console.log(textArr)
console.log(test1)






