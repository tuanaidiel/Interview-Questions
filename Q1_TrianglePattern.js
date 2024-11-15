// right half triangle
function right_half_triangle(rows){
    for (let i=1; i <= rows; i++){
        let stars = '*'.repeat(i);
        console.log(stars);
    }
}

right_half_triangle(5);

// left half triangle
function left_half_triangle(rows){
    for (let i=1; i <= rows; i++){
        let spaces = ' '.repeat(rows - i);
        let stars = '*'.repeat(i);
        console.log(spaces + stars)
    }
}

left_half_triangle(5);

// full triangle
function full_triangle(rows){
    for (let i=1; i<=rows; i++){
        let spaces = ' '.repeat(rows-i)
        let stars = '*'.repeat(i*2 - 1)
        console.log(spaces + stars)
    }
}

full_triangle(5);