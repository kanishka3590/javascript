var totalCountB = 200;
var totalCountM = 100;
var totalCountG = 20;
let purchase = (fruitName,count,season) =>{
      if(fruitName == 'Banana'){
          totalCountB = totalCountB - count;
          if (totalCountB > 0){
          season = "All Time";
          alert("You Have Selected "+count+" of "+fruitName+" and remaining are "+totalCountB+". The Season of this fruit is "+season);
        }
        else
          alert("Don't have Sufficient amount ");
      }
      else if(fruitName == 'Mango'){
          totalCountM = totalCountM - count;
          if(totalCountM >0){
          season = "Summer";
          alert("You Have Selected "+count+" of "+fruitName+" and remaining are "+totalCountM+". The Season of this fruit is "+season);
        }
        else
          alert("Don't have Sufficient amount ");

      }
      else if(fruitName == 'Grapes'){
          totalCountG = totalCountG - count;
          if(totalCountG > 0){
          season = "Winter";
          alert("You Have Selected "+count+" of "+fruitName+" and remaining are "+totalCountG+". The Season of this fruit is "+season);
        }
        else
          alert("Don't have Sufficient amount ");

      }
      else
        alert("This fruit is not available in this list.");
}
for(index = 0;index < 5; index++)
{
var fruit = {
  fruitName : prompt("Enter Fruit Name"),
  fruitCount : prompt("Enter Count")
}
purchase(fruit.fruitName,fruit.fruitCount);
}
