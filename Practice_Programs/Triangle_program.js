//Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.
function checktriangle(side1, side2, side3) {
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        if (side1 === side2 && side2 === side3) {
            console.log("Equilateral Triangle")
        } else if (side1 === side2 || side2 === side3 || side3 === side1) {
            console.log("Isoscels Triangle")
        } else {
            console.log("Scalene Triangle")
        }
    }
}

checktriangle(4, 2, 3);