var point = 70;
var grade;
if (point < 50) {
  Grade = "E";
} 
else if (point >= 50 && point < 55) 
{
  Grade = "D";
} 
else if (point >= 55 && point < 60) 
{
   Grade = "D+";
} 
else if (point >= 60 && point < 65) 
{
   Grade = "C";
} 
else if (point >= 65 && point < 70) 
{
   Grade = "C+";
} 
else if (point >= 70 && point < 75) 
{
   Grade = "B";
} 
else if (point >= 75 && point < 80) 
{
   Grade = "B+";
} 
else if (point >= 80 && point < 100) 
{
   Grade = "A";
}
console.log("Your grade is = "+point," "+Grade);

