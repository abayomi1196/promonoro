/**
 * 
 * @param time duration in seconds
 * @returns time in MM:SS format
 */


export function formatTimeLeft(time: number) {
  // The largest round integer less than or equal to the result of time divided by 60
  const minutes = Math.floor(time / 60)

  // seconds are the remainder of the time divided by 60 (modulus)
  let seconds: string | number = time % 60; 


  // if the value of seconds is less than 10, add a leading zero
  if(seconds < 10) {
    seconds = `0${seconds}`
  }

  // the output in MM:SS format
  return `${minutes}:${seconds}`
}