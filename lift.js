var floor,i,prev=1;
for(i=0;i<10;i++)
{
  floor=prompt("Enter Floor Number");
  if(floor==prev)
      alert("You are on same floor");
  else if(floor==1){
      if(prev>1)
        alert("You are on "+prev+" floor. Moving down to First");
      else if(prev==1)
        alert("You are on First floor");
      prev=floor;
  }
  else if(floor==2)
    {
      if(prev<2)
        alert("you are on "+prev+" floor. Moving up to Second");
      else if(prev>2)
        alert("You are on "+prev+" floor. Moving down to second");
    prev=floor;
    }
  else if(floor==3){
    if(prev<3)
      alert("you are on "+prev+" floor. Moving up to Third");
    else if(prev>3)
      alert("You are on "+prev+" floor. Moving down to Third");
    prev=floor;
    }
  else if(floor==4){
    if(prev<4)
      alert("you are on "+prev+" floor. Moving up to Fourth");
    else if(prev>4)
      alert("You are on "+prev+" floor. Moving down to Fourth");
      prev=floor;
    }
  else if(floor==5){
    if(prev<5)
      alert("you are on "+prev+" floor. Moving up to Fifth");
    else if(prev==5)
      alert("You are on fifth");
      prev=floor;
    }
  else
      {
        alert("Invalid Entery.Please try again.You are on "+prev+" floor");
    }


}
