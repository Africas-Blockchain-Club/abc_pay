export function unavailable(feature: string) {
  return Response.json(
    {
      error: "not_implemented",
      message: `${feature} is planned but is not connected yet.`,
    },
    { status: 501 },
  );
}
