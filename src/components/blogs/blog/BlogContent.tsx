export default function BlogContent({ data }: { data: any }) {
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: data.content }}
    />
  );
}
