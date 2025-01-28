function ConvertToCelcius() {
  let FarEnheight = -32,
    Celcius = 0.5556;
  return ConvertToCelcius;
}
//ConvertToCelcius
function DescribeTemperature() {
  const DescribeTemperature = ConvertToCelcius(
    window.prompt("Type a number", "")
  );
  let ConvertToCelcius = -32 * 0.5556;
  if (ConvertToCelcius < 0) {
    console.log("Very Cold");
  } else if (ConvertToCelcius < 20) {
    console.log("Cold");
  } else if (ConvertToCelcius < 30) {
    console.log("Warm");
  } else if (ConvertToCelcius < 40) {
    console.log("hot");
  } else if (ConvertToCelcius >= 40) {
    console.log("very hot");
  }
}
//DescribeTemperature
/* Having a bit of any issue with 'Prompt' on where exactly
I should place it in the code and what to write*/
