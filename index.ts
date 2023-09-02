//  Q No # 01  =>  develop a program that calculate and print the sum of first "n" even number using for loop?

function calculateSumOfEvenNumbers(n:number) :number{
    let sum = 0;
    for(let i = 1; i <= n; i++){
        const evenNumber = 2 * i;
        sum += evenNumber 
    }
    return sum
}

function main(){
    const n = 10;       // we can change the value according to our requirement
    const sum2 = calculateSumOfEvenNumbers(n)
    console.log("Some of your given number is =>  ", sum2)
}

main()


// Q No # 02 =>  Impliment a program that user a for loop to iterate through  array of numbers and print only even number?


let givenNumbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0;  i < givenNumbers.length; i++){
    const evenNumbers = givenNumbers[i]

    if(evenNumbers % 2 === 0){
        console.log(evenNumbers)
    }
}



// Q No # 03 => Im pliment a program that users a loop to iterate through an array of numbers and remove all the even number from them and just have the odd ones?

let givenNumbers2:number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(let i = 0; i < givenNumbers2.length; i++){
    const oddNumbers = givenNumbers2[i]

    if(oddNumbers % 2 !== 0){
        console.log(oddNumbers)
    }
}



// Q No # 04 =>  write a program that define a function to calculate the area of circle. The function shoud take the radius the as input and return the calculated area?

function areaOfcircle(radius:number): number{
    const area = Math.PI * radius * radius;
    return area
}

const radius = 10;
const area = areaOfcircle(radius)
console.log("Area of the given radius is => ", area)


// Q No # 05   Develop a program that reads a list of grades and uses the splice method to remove the grades (Below 50%) from array?

function removeLowGrades(grades: number[]){
    for(let i = grades.length - 1; i >= 0; i--){
        if(grades[i] < 50){
            grades.splice(i, 1)
        }
    }
}

const inputGrades:number[] = [86, 90, 44, 34, 78, 93, 66, 33, 45]
console.log("Original Grades: ", inputGrades)

removeLowGrades(inputGrades)
console.log("Grades after removing below 50%: ", inputGrades)




