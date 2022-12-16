interface ReturnValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number
}

const exerciseCalculator = (args: Array<number>, rating: number): ReturnValues => {
  let avg = 0;
  let success = false;
  let description:string;
  let weeklyRating;
  args.forEach(element => {
    avg = avg + element;
  });
  avg = avg / args.length;
  const trainingDays = args.filter(x => x != 0)

  if (rating <= avg && avg <= rating + 2) {
    description = "Good but it could be better"
    success = true
    weeklyRating = 2
  } else if (rating + 2 < avg) {
    description = "Awesome"
    success = true
    weeklyRating = 3
  } else {
    description = "bad!"
    weeklyRating = 1
  }
  return {
    periodLength: args.length,
    trainingDays: trainingDays.length,
    success: success,
    rating: weeklyRating,
    ratingDescription: description,
    target: rating,
    average: avg
  };
}

console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], -5))