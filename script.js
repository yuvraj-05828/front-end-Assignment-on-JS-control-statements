// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 0; i <= 100; i++)
{
  if (i % 2 == 0) console.log(i);
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
for (let i = 0; i <= 100; i++) 
{
  if (i % 2 !== 0) console.log(i);
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
var num = 0;

do
{
  if (num % 3 == 0 );
  num += 3;
  console.log(num);
} while (num <= 96);
// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
let count = 0
for(i=2;i<=100;i++)
{
for( j=1;j<=i;j++)
{
  if(i%j==0)
  count++
  
}

if(count==2)

console.log(i)
count = 0;
}
