import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/6e333f35-460e-4897-8edd-96208df0e5c5-vo5l.png",
  "https://utfs.io/f/3afac4f2-7ff7-4aea-82cf-4028622d0d50-vo5i.png",
  "https://utfs.io/f/f493fee5-4d59-4ab0-9d89-9172cd332d79-vo68.png",
  "https://utfs.io/f/cb11f347-c61f-4373-8348-86186aca1b22-vo74.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
