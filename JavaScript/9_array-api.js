    // Q1. make a string out of an array ->배열을 string으로
    {
        const fruits = ['apple', 'banana', 'orange'];
        const result = fruits.join(' & ');  //괄호안은 구분자 
        console.log(result);
    }
    
    // Q2. make an array out of a string  배열로 만들기
    {
        const fruits = '🍎, 🥝, 🍌, 🍒';
        const result = fruits.split(",");  //구분자
        console.log(result);
    }
    
    // Q3. make this array look like this: [5, 4, 3, 2, 1] //순서를 거꾸로 만들기
    {
        const array = [1, 2, 3, 4, 5];
        const result = array.reverse();
        console.log(result);
        console.log(array);  //배열자체를 바꿈
    }
    
    // Q4. make new array without the first two elements -> 3,4,5만 출력
    {
        const array = [1, 2, 3, 4, 5];
        const result = array.slice(2,5); //배열의 특정한 부분 return
        console.log(result);
        console.log(array); 
        //splice -> 배열자체를 변경 
        //slice -> 배열의 원하는 부분만 출력

    }
    
    class Student {
        constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
        }
    }
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];
    
    // Q5. find a student with the score 90
    { //find는 콜백함수를 만들어서 전달해야함
        const result = students.find((student) => student.score === 90 );
        console.log(result);
    }
    
    // Q6. make an array of enrolled students
    {
        const result = students.filter((student) => student.enrolled );
        console.log(result);
    }
    
    // Q7. make an array containing only the students' scores !!Map
    // result should be: [45, 80, 90, 66, 88]
    //Map 배열안에 있는 요소들을 원하는 함수를 이용해서 다른방식의 데이터로 만들고 싶을때 사용
    //콜백함수의 인자는 최대한 이해하기 쉬운 것으로 선택할 것 !
    {
        const result = students.map((student) => student.score);
        console.log(result);
    }
    
    // Q8. check if there is a student with the score lower than 50
    //sum -> 배열안에 함수의 결과가 true인 것이 하나라도 있으면 true로 출력 (하나라도 있을때)
    //every : 배열 중에 모든것이 다 만족되어야 true, 하나라도 만족안하면 false (모두 만족할때)
    {  
        const result = students.some((student)=> student.score < 50);
        console.log(result);

        const result2 = !students.every((student)=> student.score >= 50);
        console.log(result2);
    }
    
    // Q9. compute students' average score
    //reduce : 시작점 부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용
    {
        const result = students.reduce((prev, curr) => prev + curr.score, 0);
        console.log(result / students.length);
    }
    
    // Q10. make a string containing all the scores
    // result should be: '45, 80, 90, 66, 88'
    //map을 이용해서 새로운 배열을 만들기  -> join을 이용해서 string으로 변환하기
    {
        const result = students.map((student) => student.score).join();
        console.log(result);

        /*만약 50점 이상인 점수를 join하고싶다면? 
        const result = students.map((student) => student.score)
        .filter((score) => >=50)
        .join();
        console.log(result);
        */
    }
    
    // Bonus! do Q10 sorted in ascending order
    // result should be: '45, 66, 80, 88, 90'
    {
        const result = students
        .map((student)=> student.score)
        .sort((a,b) => a - b)
        .join();
        console.log(result);
    }     