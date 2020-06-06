# BMI-Calculator
Simple BMI Calculator 


## About
#### BMI Categories:
- Underweight = <18.5
- Normal weight = 18.5–24.9
- Overweight = 25–29.9
- Obesity = BMI of 30 or greater

## How it works
![BMI](https://user-images.githubusercontent.com/61579772/83941361-472ef880-a81d-11ea-9802-4f149825641c.jpg)

![BMI2](https://user-images.githubusercontent.com/61579772/83941364-4f873380-a81d-11ea-91e9-91336a2ec9c4.jpg)

## What I learnt  
- Intro to Node
- Intro to Express
- Intro to Body_parser
- POST/GET methods



## Logic
``` var weight = Number(req.body.weight)
  var height = Number(req.body.height)

  var bmi = (weight / (height * height))

  if (bmi < 18.5) {
    res.send('Your Body Mass Index is' +' '  + bmi +' ' +':this is conisidered below average')
  }else if(bmi>=18.5 && bmi<=24.9){
    res.send('Your Body Mass Index is' +' '  + bmi +' ' +':this is conisidered normal')
  }else if(bmi>=25&& bmi<=30){
    res.send('Your Body Mass Index is' +' '  + bmi +' ' +':this is conisidered Overweight')
  }else{
    res.send('Your Body Mass Index is' +' '  + bmi +' ' +':this is conisidered Obese')
  } 
  ```


### Inspiration❤
https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi-m.htm





