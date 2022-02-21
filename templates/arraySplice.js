let months = ["Jan", "Feb", "Mar", "Aug", "Nov", "May"];

// Add Apr at position 3 without removing any element
months.splice(3, 0, "Apr");
console.log(months);

// Replace May with Dec
months.splice(-1, 1, "Dec");
console.log(months);
