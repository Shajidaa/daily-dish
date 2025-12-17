export const feedback = [
  { id: 1, message: "This food was so delicious" },
  { id: 2, message: "This food was so delicioussssssssss" },
];

export function GET(request) {
  return Response.json({
    status: 200,
    message: "yahoo , Api created",
  });
}
