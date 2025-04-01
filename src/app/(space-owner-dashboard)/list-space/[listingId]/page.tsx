export default function SelectedListing({
  params,
}: {
  params: { listingId: string };
}) {
  return (
    <section className={`px-3 py-3 md:px-10 md:py-8 space-y-5`}>
      Selected Listing is {params.listingId}
    </section>
  );
}
